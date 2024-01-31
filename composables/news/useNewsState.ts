export function useNewsState() {
  const news = ref([] as NewsCard[]);
  const searchQuery = reactive({
    current: "",
    available: "",
  } as SearchQuery);
  const initialConfig = reactive({
    variant: {
      color: "green",
      iconName: "pig",
    },
    pageNumber: 7,
  } as NewsConfig);

  return { news, searchQuery, initialConfig };
}
