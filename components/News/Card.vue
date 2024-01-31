<template>
  <div class="news-card">
    <UiImage
      :src="`/images/empty/test${props.card.mockImageIndex}.jpg`"
      height="217px"
      border-radius="16px 16px 0 0"
    />
    <div class="news-card__content">
      <div v-if="props.card.shortText" class="news-card__shortText">
        {{ props.card.shortText }}
      </div>
      <div class="news-card__footer">
        <UiIcon
          v-if="
            props.card.config.variant.iconName &&
            props.card.config.variant.color
          "
          :name="props.card.config.variant.iconName"
          :color="props.card.config.variant.color"
        />
        <div
          v-if="props.card.datePublish && parsedDate"
          class="news-card__date"
          :class="dateClass"
        >
          {{ parsedDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Заменив поле src - можно получить изображения из CDN
// видел постановку, но принял решение сделать и так и так
// просто для лучшего визуала
// (карточки которые по апи без поля image приходят - все также не записываются согласно с постановкой)
// :src="props.card.image"

interface Props {
  card: NewsCard;
}

const props = defineProps<Props>();

const dateClass = computed(
  () => `c-${props.card?.config?.variant?.color}-text`
);

const parsedDate = computed(() => {
  return useDateParse(props.card?.datePublish);
});
</script>

<style scoped lang="scss">
.news-card {
  border-radius: 16px;
  background-color: $white-smoke;
  animation: fadeIn 2s;

  &__content {
    padding: 24px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }

  &__shortText {
    height: 69px;
    @include lineClamp(3);
  }

  &__date {
    @include lineClamp(1);
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
