<template>
  <div class="news-search">
    <UiInput
      :model-value="props.searchQuery.current"
      @update:model-value="handleInputChange($event)"
      class="news-search__input"
      type="text"
      placeholder="Поиск"
      modification="search"
    />
    <UiIcon name="search" color="grey" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  searchQuery: SearchQuery;
}

const props = defineProps<Props>();
const emit = defineEmits([
  "update-search-current-query",
  "update-search-available-query",
]);

const searchTimer = ref(null as any);

const handleInputChange = async (e: any) => {
  emit("update-search-current-query", e.target.value);
  clearTimeout(searchTimer.value);

  searchTimer.value = setTimeout(() => {
    emit("update-search-available-query", e.target.value);
  }, 200);
};
</script>

<style scoped lang="scss">
.news-search {
  padding: 8.5px 16px;

  border: 2px solid $dark-grey;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  animation: fadeIn 2s;
}
</style>
