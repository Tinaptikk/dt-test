<template>
  <div class="image__container">
    <img class="image" :src="props.src" :alt="props.alt" :style="imageStyle" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: string;
  alt?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alt: "",
  width: "100%",
  height: "100%",
  borderRadius: "0px",
  objectFit: "cover",
});

const imageStyle = computed(() => {
  return `width: ${props.width}; height: ${props.height}; border-radius: ${props.borderRadius}; object-fit: ${props.objectFit}`;
});
</script>

<style scoped></style>
