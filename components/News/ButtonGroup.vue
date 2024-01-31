<template>
  <div class="button-group">
    <UiButton
      v-for="(variant, index) in buttonVariants"
      @click="$emit('changeNews', variant)"
      :key="variant.color + variant.iconName + index"
      :color="variant.color"
      :icon-name="variant.iconName"
      text="Загрузить"
    />
  </div>
</template>

<script setup lang="ts">
const buttonVariants = ref([
  { color: "green", iconName: "pig" },
  { color: "pink", iconName: "lightning" },
  { color: "orange", iconName: "flame" },
] as ButtonVariant[]);
</script>

<style scoped>
.button-group {
  animation: fadeIn 2s;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 29px;

  @media (max-width: 686px) {
    gap: 12px;
  }

  @media (max-width: 598px) {
    gap: 8px;
    justify-content: space-between;

    .bc-orange-button {
      width: 100%;
    }
  }
}
</style>
