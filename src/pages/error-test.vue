<template>
  <div>
    <NuxtLayout :name="false"
      ><h1>test error page</h1>
      <div>
        <button @click="enableCustomLayout">更新布局</button>
        <button @click="enable500Error">500 Error</button>
        <button @click="enable404Error">404 Error</button>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, setPageLayout, createError, showError } from '#imports';
definePageMeta({
  layout: false,
});
function enableCustomLayout() {
  setPageLayout('desktop-default');
}
function enable500Error() {
  throw createError({
    statusCode: 500,
    statusMessage: 'An error occurred',
    fatal: true,
  });
}

function enable404Error() {
  showError({ statusCode: 404, statusMessage: 'page not fund' });
}
</script>
