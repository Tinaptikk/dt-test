<template>
  <div class="input__container">
    <input
      class="input"
      :type="props.type"
      :placeholder="props.placeholder"
      :class="inputModificationClass"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event as any)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
  type?: InputType;
  placeholder?: string;
  modification?: InputModification;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  placeholder: "",
  modification: "",
});

const inputModificationClass = computed(() => {
  return props.modification ? `input-${props.modification}-modification` : "";
});
</script>

<style scoped lang="scss">
.input {
  width: 100%;

  &__container {
    width: 100%;
  }

  &-search-modification {
    font-size: 16px;
    line-height: 21px;
    font-weight: bold;
    color: $dark-grey;
  }
}
</style>
