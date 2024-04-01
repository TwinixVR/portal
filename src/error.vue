<template>
  <NuxtLoadingIndicator />
  <div :class="['error', `error-${props.error?.statusCode}`]">
    <Error404 v-if="is404" :app-name="appConfig?.appName" @go-back="handleError">
      <template #action>
        <a class="button" @click="handleError"> 返回首页 </a>
      </template>
    </Error404>
    <Error500
      v-else
      :app-name="appConfig?.appName"
      :status-code="props.error?.statusCode"
      :stack="props.error?.stack"
      v-bind="props.error"
      @go-back="handleError"
    />
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    error: {
      url?: string;
      statusCode?: number;
      statusMessage?: string;
      message?: string;
      description?: string;
      data?: any;
      stack?: string;
    };
  }>(),
  {
    error: () => ({
      url: '',
      statusCode: 404,
      statusMessage: 'Not Found',
      message: '(404 Not Found)',
      stack: '',
      data: undefined,
    }),
  }
);
const message = computed(() => String(props.error?.message ?? ''));
const is404 = computed(() => props.error?.statusCode === 404 || message.value?.includes('404'));

const appConfig = useAppConfig();

function handleError() {
  return clearError({ redirect: '/' });
}
</script>
<style lang="scss" scoped>
.button {
  --rd: 0.3rem;
  --bc-1: #e2e2e2;
  --bc-2: #33a1ff;
  position: relative;
  padding: 0.75em 1.5em;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: currentColor;
  text-align: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2px;
    content: '';
    background-image: linear-gradient(90deg, var(--bc-1) 0%, var(--bc-1) 25%, var(--bc-2) 50%, var(--bc-2) 100%);
    background-size: 400% auto;
    border-radius: var(--rd);
    opacity: 0.5;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    transition:
      background-position 0.3s ease-in-out,
      opacity 0.2s ease-in-out;
  }
  &:hover {
    &::before {
      background-position: -50% 0;
      opacity: 1;
    }
  }
}
</style>
