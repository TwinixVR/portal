<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { PageMeta } from '#app';

// desktop-default| phone| pad
// 可以基于 API 调用或登录状态进行选择
const layout = ref<PageMeta['layout']>('desktop-default');
</script>

<style lang="scss">
@use '~/assets/styles/common';

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  filter: blur(1rem);
  opacity: 0;
}
</style>
