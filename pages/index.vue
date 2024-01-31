<template>
  <div class="news-page">
    <NewsSearch
      class="news-page__search"
      :searchQuery="searchQuery"
      @update-search-current-query="updateSearchCurrentQuery"
      @update-search-available-query="updateSearchAvailableQuery"
    />
    <NewsCardGrid
      v-show="currentNews?.length"
      :news="currentNews"
      class="news-page__card-grid"
    />
    <NewsButtonGroup
      @change-news="handleChangeNews"
      class="news-page__button-group"
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Новости - Домотехника электронный гипермаркет. Интернет-магазин.",
  description:
    "Купить, ноутбуки, телевизоры, холодильники, стиральные машины, посудомоечные машины, ПММ, посудомойки, морозилки,  планшеты, Apple, посуда во Владивостоке",
});

const {
  news,
  searchQuery,
  initialConfig,
}: {
  news: Ref<NewsCard[]>;
  searchQuery: SearchQuery;
  initialConfig: NewsConfig;
} = useNewsState();

const currentNews = computed(() => {
  return searchQuery.available.length ? filteredNewsBySearch.value : news.value;
});

const isPageAlreadyFetched = (pageNumber: number) => {
  return !!news.value.find((item) => item.config.pageNumber === pageNumber);
};

const isPageEmpty = (page: NewsCard[]) => !!!page?.length;

const filteredNewsBySearch = computed(() => {
  return news.value.filter((card) =>
    useRegularizeString(card.shortText).includes(
      useRegularizeString(searchQuery.available)
    )
  );
});

const saveNewsPage = (page: NewsCard[]) => {
  if (isPageEmpty(page)) return;

  const validPage = validateNewsPage(page);

  news.value = sortNewsPageByNumber([...news.value, ...validPage]);
};

const parseNewsPage = (page: NewsCard[], config: NewsConfig) => {
  if (isPageEmpty(page)) return [];

  return page.map((card) => {
    const { image, shortText, datePublish } = card;
    const mockImageIndex = useRandomInteger(1, 10);

    return { config, image, shortText, datePublish, mockImageIndex };
  });
};

const validateNewsPage = (page: NewsCard[]) => {
  return page.filter((card) => card.image && card.shortText);
};

const sortNewsPageByNumber = (page: NewsCard[]) => {
  return page.sort(
    (cardA, cardB) => cardA.config.pageNumber - cardB.config.pageNumber
  );
};

const updateNewsPage = (config: NewsConfig) => {
  news.value = news.value.map((card) => {
    if (card.config.pageNumber !== config.pageNumber) return card;
    return Object.assign({}, card, { config: config });
  });
};

const loadNewsPage = async (config: NewsConfig) => {
  const { data }: any = await useNewsFetchByPageNumber(config.pageNumber);
  const page = parseNewsPage(data?.value?.data?.news, config);

  saveNewsPage(page);
};

const handleChangeNews = async (
  selectedVariant?: ButtonVariant,
  isInitial = false
) => {
  const config = {
    variant: selectedVariant,
    pageNumber: useRandomInteger(1, 10),
  };

  if (isInitial) {
    config.variant = initialConfig.variant;
    config.pageNumber = initialConfig.pageNumber;
  }

  if (isPageAlreadyFetched(config.pageNumber)) {
    updateNewsPage(config);
    return;
  }

  await loadNewsPage(config);
};

const updateSearchCurrentQuery = (e: any) => {
  searchQuery.current = e;
};

const updateSearchAvailableQuery = (e: any) => {
  searchQuery.available = e;
};

handleChangeNews(null, true);
</script>

<style lang="scss">
.news-page {
  max-width: 1416px;
  padding: 0 48px;

  margin: 0 auto;

  &__search {
    margin-top: 48px;
  }

  &__card-grid {
    margin-top: 48px;
  }

  &__button-group {
    margin-top: 24px;
    padding-bottom: 74px;
  }

  @media (max-width: 1347px) {
    max-width: none;

    .news-page {
      &__button-group {
        padding-bottom: 48px;
      }
    }
  }

  @media (max-width: 646px) {
    padding: 0 24px;

    .news-page {
      &__search {
        margin-top: 24px;
      }

      &__card-grid {
        margin-top: 24px;
      }

      &__button-group {
        margin-top: 24px;
        padding-bottom: 24px;
      }
    }
  }
}
</style>
