<template>
  <span class="i-icon" role="img" :style="{ color: color }">
    <component :is="icon" :focusable="false"></component>
  </span>
</template>
<script setup lang="ts">
import { useSlots, h } from 'vue';

const props = defineProps<{
  size?: string;
  color?: string;
}>();
const slots = useSlots();
const icon = () =>
  h(slots.default?.()?.[0] ?? [], {
    style: {
      color: props.color,
    },
    focusable: false,
    width: !props.size ? '1em' : props.size,
    height: !props.size ? '1em' : props.size,
  });
</script>
<style lang="scss">
@use '~/assets/styles/icon.scss' as *;
.i-icon {
  @include icon;
}
</style>
