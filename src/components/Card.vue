<template>
  <div :class="classString">
    <div v-if="$slots.cover" class="card-cover"><slot name="cover"></slot></div>
    <div class="card-body">
      <slot v-if="$slots.default"></slot>
      <div v-else class="card-meta-container">
        <div class="card-meta">
          <div class="card-meta-title">{{ title }}</div>
          <div class="card-meta-description">{{ description }}</div>
        </div>
        <div class="card-action">
          <slot name="action">
            <a href="javascript:void(0)">
              <Icon class="card-action-icon"><SwapRight /></Icon>
            </a>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SwapRight from '~/assets/icons/swap-right.svg';
const props = defineProps<{
  bordered?: boolean;
  hoverable?: boolean;
  title?: string;
  description?: string;
}>();
const { bordered = true, hoverable, title, description } = toRefs(props);
const pre = 'card';
const classString = computed(() => ({
  [`${pre}`]: true,
  [`${pre}-bordered`]: bordered,
  [`${pre}-hoverable`]: !!hoverable,
}));
</script>
<style lang="scss" scoped>
$prefix: 'card';
.card {
  --card-title-text-size: 30px;
  --card-description-text-size: 20px;
  --card-text-primary: #000;
  --card-text-secondary: rgba(0, 0, 0, 0.5);
  --card-padding: 24px;
  &-cover {
    & > :deep(*) {
      display: block;
      width: 100%;
    }
    :deep(img) {
      border-radius: 0;
    }
  }
  &-meta {
    &-title {
      overflow: hidden;
      font-size: var(--card-title-text-size);
      font-weight: 500;
      color: var(--card-text-primary);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-description {
      font-size: var(--card-description-text-size);
      color: var(--card-text-secondary);
    }
  }
  &.#{$prefix}-bordered {
    background-color: #fff;
    border: 1px solid #fff;
    .#{$prefix}-cover {
      margin-top: -1px;
      margin-right: -1px;
      margin-left: -1px;
    }
    .#{$prefix}-body {
      position: relative;
      display: block;
      padding: var(--card-padding);
      overflow: hidden;
    }
    .#{$prefix}-action {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      align-self: flex-end;
      justify-content: flex-end;
      & > a {
        display: inline-block;
        font-weight: 400;
      }
      &-icon {
        font-size: 30px;
        line-height: 0;
        color: var((--card-text-secondary));
      }
    }
    .#{$prefix}-meta-container {
      display: flex;
      flex: 1;
      justify-content: space-between;
    }
  }
}
</style>
