<template>
  <div :class="classString">
    <div v-if="$slots.cover" class="card-cover"><slot name="cover"></slot></div>
    <div class="card-body">
      <slot v-if="$slots.default"></slot>
      <div v-else class="card-meta-container">
        <div class="card-meta" :style="{ paddingRight: !showAction ? '0px' : '' }">
          <div class="card-meta-title">{{ title }}</div>
          <div class="card-meta-description">{{ description }}</div>
        </div>
        <div class="card-action">
          <slot name="action">
            <a v-if="showAction" href="javascript:void(0)">
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
const props = withDefaults(
  defineProps<{
    bordered?: boolean;
    hoverable?: boolean;
    title?: string;
    description?: string;
  }>(),
  { bordered: true, hoverable: true, title: undefined, description: undefined }
);
const { bordered, hoverable } = toRefs(props);
const pre = 'card';
const classString = computed(() => ({
  [`${pre}`]: true,
  [`${pre}-bordered`]: !!bordered.value,
  [`${pre}-hoverable`]: !!hoverable.value,
}));
const showAction = computed(() => bordered.value && hoverable.value);
</script>
<style lang="scss" scoped>
$prefix: 'card';
.card {
  --card-title-text-size: 24px;
  --card-description-text-size: 16px;
  --card-text-color--primary: #000;
  --card-text-color--secondary: rgba(0, 0, 0, 0.5);
  --card-bg-color--hover: #33a1ff;
  --card-text-color--hover: #fff;
  --card-padding: 24px;
  --card-action-icon-size: 24px;
  --card-bezier: cubic-bezier(0.5, 0, 0, 0.75);
  --card-size-base: 8px;
  position: relative;
  display: flex;
  flex-direction: column;

  > * {
    flex: none;
  }
  &-body {
    flex: 1;
    padding: var(--card-padding) 0;
    > .#{$prefix}-meta-container {
      block-size: 100%;
    }
    .#{$prefix}-action {
      line-height: 0;
    }
  }
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
    padding-right: calc(var(--card-size-base) * 6);
    &-title {
      margin-bottom: calc(var(--card-padding) / 2);
      overflow: hidden;
      font-size: var(--card-title-text-size);
      font-weight: 500;
      color: var(--card-text-primary);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-description {
      font-size: var(--card-description-text-size);
      color: var(--card-text-color--secondary);
    }
  }
  &-bordered {
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
      transition:
        background-color 0.3s ease,
        color 0.33s ease;
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
        color: var(--card-text-color--secondary);
      }
      &-icon {
        font-size: var(--card-action-icon-size);
        line-height: 0;
      }
    }

    .#{$prefix}-meta-container {
      display: flex;
      flex: 1;
      justify-content: space-between;
    }
  }
  &-hoverable {
    cursor: pointer;
    transition:
      box-shadow 0.3s var(--card-bezier),
      background-color 0.3s ease,
      color 0.33s ease,
      border-color 0.3s;

    &:hover {
      border-color: #fff;
      border-color: var(--card-bg-color--hover);
      box-shadow: 0px 0px var(--card-size-base) rgba(0, 0, 0, 0.12);
      .#{$prefix}-body {
        color: var(--card-text-color--hover);
        background-color: var(--card-bg-color--hover);
      }
      .#{$prefix}-meta-description {
        color: var(--card-text-color--hover) !important;
      }
      .#{$prefix}-action {
        & > a {
          color: var(--card-text-color--hover);
        }
        &-icon {
          color: var(--card-text-color--hover);
        }
      }
    }
  }
}
</style>
