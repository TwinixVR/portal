<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import { useHead } from '#imports';
import MixCircle from './error/MixCircle.vue';
import Torchlight from './error/Torchlight.vue';
import Spotlight from './error/Spotlight.vue';
import Glitch from './error/Glitchy.vue';
const props = defineProps<{ appName?: string }>();
useHead({
  title: `404 - Not Found | ${props.appName || ''}`,
});
const comps = [MixCircle, Torchlight, Spotlight, Glitch];
const ui = computed(() => {
  const r = Math.floor(Math.random() * comps.length);
  return comps[r];
});
const emit = defineEmits<{
  goBack: () => void;
}>();
const handleError = () => {
  emit('goBack');
};
</script>
<template>
  <div class="error-container error-404">
    <component :is="ui" @go-back="handleError">
      <div class="action">
        <slot name="action"></slot>
      </div>
    </component>
  </div>
</template>
<style lang="scss" scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  text-align: center;

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 20px;
  }
}
</style>
