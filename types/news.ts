interface NewsCard {
  config: NewsConfig;
  image: string;
  mockImageIndex: number;
  shortText: string;
  datePublish: string;
}

interface NewsConfig {
  variant: ButtonVariant;
  pageNumber: number;
}

export type { NewsCard, NewsConfig };
