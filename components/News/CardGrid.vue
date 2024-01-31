<template>
  <div class="card-grid">
    <ClientOnly>
      <NewsCard
        v-for="(card, i) in props.news"
        :key="card.config.variant.color + card.shortText + i"
        :card="card"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
interface Props {
  news: NewsCard[];
}

const props = defineProps<Props>();
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  @media (max-width: 1347px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1092px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 837px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 645px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
