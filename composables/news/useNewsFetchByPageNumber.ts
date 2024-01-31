export async function useNewsFetchByPageNumber(pageNumber: number) {
  return await useAsyncData(() =>
    $fetch(`https://domotekhnika.ru/api/v1/news?page=${pageNumber}`)
  );
}
