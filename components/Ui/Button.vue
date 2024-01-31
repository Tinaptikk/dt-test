<template>
  <div v-if="props.text" class="button" :class="buttonClass">
    <div class="button__text">
      {{ props.text }}
    </div>
    <div v-if="props.iconName">
      <UiIcon :name="props.iconName" color="white" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  color?: IconColor;
  iconName?: IconName;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  color: "orange",
});

const buttonClass = computed(() => {
  return `bc-${props.color}-button`;
});
</script>

<style scoped lang="scss">
.button {
  width: 175px;
  padding: 16px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 36px;
  user-select: none;

  @media (max-width: 598px) {
    width: 212px;
  }

  @media (max-width: 480px) {
    width: 170px;
  }

  @media (max-width: 396px) {
    width: 100%;
  }

  &__text {
    font-weight: 600;
    line-height: 21px;
    color: #fff;
  }
}
</style>
