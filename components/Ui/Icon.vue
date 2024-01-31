<template>
  <div class="icon__container">
    <img
      class="icon"
      :class="iconColorClass"
      :src="`/images/icons/${props.name}.svg`"
      :alt="name"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: IconName;
  color: IconColor;
}

const props = defineProps<Props>();

const iconColorClass = computed(() => {
  return `f-${props.color}-icon`;
});
</script>

<style scoped lang="scss">
.icon {
  &__container {
    display: flex;
    align-items: center;
  }
}
</style>
