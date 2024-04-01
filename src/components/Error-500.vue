<!-- eslint-disable vue/no-v-html -->
<template>
  <div :class="['error-container', `error-container--${statusCode}`]">
    <component :is="ui" @go-back="handleError">
      <div class="action">
        <slot name="action"></slot>
      </div>
    </component>
    <div v-if="isDev" class="stack" v-html="stack"></div>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '#imports';
import Glitch from './error/Glitch.vue';
import GlitchText from './error/GlitchText.vue';
const props = withDefaults(
  defineProps<{
    appName?: string;
    statusCode?: number;
    statusMessage?: string;
    description?: string;
    stack?: string;
  }>(),
  {
    appName: '',
    statusCode: 500,
    statusMessage: 'Server Error',
    description: '',
    stack: undefined,
  }
);
useHead({
  title: `${props.statusCode}-${props.statusMessage}|${props.appName}`,
});
const isDev = process.dev || import.meta.dev;
const comps = [Glitch, GlitchText];
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
<style lang="scss" scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  .stack {
    padding: 20px;
    overflow: auto;
    color: crimson;
    text-align: left;
    background-color: #dedede;
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 20px;
  }
}
</style>
