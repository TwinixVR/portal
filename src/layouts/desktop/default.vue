<template>
  <div class="app-shell app-shell--desktop">
    <header class="app-shell-header">
      <slot name="header">
        <div ref="navbarRef" class="app-nav-bar" :class="navbarCls">
          <div class="app-nav-container">
            <h1 class="app-logo" aria-hidden>
              <a class="app-logo-link" href="/">
                <span></span>
              </a>
            </h1>
            <div class="app-nav">
              <ul class="nav-items">
                <li class="nav-item nav-item--active">
                  <a class="nav-link" href="#aboutus"> <span class="nav-item-text">关于我们</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#bussines"> <span class="nav-item-text">业务介绍</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#advantages"> <span class="nav-item-text">案例展示</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#cooperation"> <span class="nav-item-text">联系我们</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </slot>
    </header>
    <main class="app-shell-content">
      <slot />
    </main>
    <footer class="app-shell-footer">
      <div class="app-footer">
        <div class="left">
          <div class="row">
            <h2 class="title">关注我们</h2>
            <div class="icons">
              <Icon><Weichat /></Icon> <Icon><Douyin /></Icon> <Icon><Weibo /></Icon>
            </div>
          </div>
          <div class="row">
            <h2 class="title">联系我们</h2>
            <div class="tel">(029) 3806 6546</div>
          </div>
        </div>
        <div class="right">
          <span class="copyright"
            ><span>&copy;2022秦创原版权所有</span><span class="icp">陕ICP备案2022002973号</span></span
          >
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import Douyin from '~/assets/icons/douyin.svg';
import Weichat from '~/assets/icons/weichat.svg';
import Weibo from '~/assets/icons/weibo.svg';
import { useScroll } from '@vueuse/core';

const navbarCls = ref<{ [key: string]: boolean }>({ ['app-nav-bar--not_transparent']: false });

const { y } = useScroll(window, { throttle: 10 });
watchEffect(() => {
  navbarCls.value = {
    ['app-nav-bar--not_transparent']: y.value > 200,
  };
});
</script>
<style lang="scss">
/**css vars */
:root {
  --app-text--xl: 32px;
  --app-text--l: 26px;
  --app-text--m: 18px;
  --app-text--s: 14px;

  --app-header-height: 64px;

  --app-size--1x: 8px;
  --app-size--2x: 16px;
  --app-size--3x: 24px;
  --app-size--4x: calc(var(--app-size--1x) * 4);
  --app-icon--bg: transparent;
  --app-font-weight--normal: 400;
  --app-font-weight--medium: 500;
  --app-nav-item--width: auto;
  --app-nav-item-size: 16px;

  --app-nav-item-text-color: #fff;
  --app-nav-item-text-color--active: #33a1ff;
  --app-nva-bg-color: transparent;

  --app-icon--size: 16px;

  --app-color--black: #000;
  --app-color--white: #fff;
  --app-text--white: #fff;
  --app-bezier: cubic-bezier(0.5, 0, 0, 0.75);
  --app-content-width: 65vw;
  --app-content-padding: 0px;
}

.app-shell--desktop {
  --app-shell-header-height: 64px;
  display: grid;
  grid-template-areas:
    'app-shell-masthead'
    'app-shell-content'
    'app-shell-footer';
  grid-template-rows: 0 1fr auto;
  grid-template-columns: auto;
  grid-gap: 0 24px;
  min-block-size: 100vh;
  .app-shell-header {
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    .app-nav-bar {
      position: relative;
      z-index: 10;
      inline-size: 100%;
      min-block-size: var(--app-header-height);
      background: url('~/assets/imgs/idx_header_bg.png') 100% no-repeat;
      background-color: var(--app-nva-bg-color);
      transition:
        transform 0.3s ease,
        background-color 0.2s ease-in;
      perspective: 1000px;
      .app-nav-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        inline-size: 100%;
        max-width: var(--app-content-width);
        min-block-size: var(--app-header-height);
        margin: auto;
      }
      .app-logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-inline-start: var(--app-size--1x);
        .app-logo-link {
          display: inline-flex;
          align-items: center;
          min-block-size: var(--app-size--4x);
          padding: 0 var(--app-size--4x);
          overflow: hidden;
          .icon {
            display: block;
            inline-size: calc(var(--app-icon--size) * 5);
            block-size: var(--app-icon--size);
            content: '';
          }
        }
      }
      .app-nav {
        position: static;
        display: flex;
        align-items: center;
        padding-inline-end: var(--app-size--1x);
        margin: 0;
        .nav-items {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin: 0;
          line-height: 20px;
          list-style-type: none;
          transition: transform 0.5s ease;
          .nav-item {
            position: relative;
            display: inline-flex;
            align-items: center;
            inline-size: var(--app-nav-item--width);
            min-block-size: var(--app-size--4x);
            padding: calc(var(--app-size--1x) / 2) var(--app-size--1x);
            font-size: var(--app-nav-item-size);
            font-weight: var(--app-font-weight--normal);
            color: var(--app-nav-item-text-color);
            white-space: nowrap;
            transition:
              color 0.33s ease,
              background-color 0.33s ease,
              font-weight 0.33s ease;
            .nav-link {
              font-size: inherit;
              font-weight: inherit;
              color: currentColor;
              cursor: pointer;
              // mix-blend-mode: difference;
              &::before {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: -1;
                content: '';
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 3px;
                transition: all 0.3s cubic-bezier(0.34, 0.9, 0.7, 1);
                transform: scaleX(0);
                transform-origin: 50%;
              }
            }
            .nav-item-text {
              margin: 0 var(--app-size--1x);
              font-size: inherit;
            }
            &:hover,
            & &--active {
              color: var(--app-nav-item-text-color);
              // font-weight: 600;
              .nav-link {
                &::before {
                  transform: scaleX(1);
                }
              }
            }
          }
        }
      }
      &.app-nav-bar--not_transparent {
        background: none;
        background-color: hsla(0, 0%, 100%, 0.75);
        backdrop-filter: blur(48px);
        box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.42);
        --app-nav-item-text-color: var(--app-color--black);
        animation: slideDown 0.25s ease-in-out;
        .app-nav {
          .nav-item {
            &:hover,
            & &--active {
              font-weight: 600;
              color: var(--app-nav-item-text-color--active);
            }
          }
        }
      }

      @keyframes slideDown {
        from {
          transform: translateY(-50%);
        }
        to {
          transform: translateY(0);
        }
      }
    }
  }
  .app-shell-content {
    grid-area: app-shell-content;
    max-width: 100vw;
  }
  .app-shell-footer {
    grid-area: app-shell-footer;
    inline-size: 100%;

    padding: 80px 0 40px 0;
    background: #001223;
    .app-footer {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      max-width: var(--app-content-width);
      padding-inline-start: var(--app-content-padding);
      padding-inline-end: var(--app-content-padding);
      margin: 0 auto;
      font-size: var(--app-text--s);
      font-weight: var(--app-font-weight--medium);
      color: var(--app-color--white);
      .row {
        &:not(:first-child) {
          margin-top: var(--app-size--4x);
        }
      }
      .title {
        margin-bottom: var(--app-size--2x);
        font-size: var(--app-text--l);
      }
      .icons {
        display: inline-flex;
        flex: 0 1;
        align-items: center;
        font-size: var(--app-text--l);
        :not(:first-child) {
          margin-left: var(--app-size--4x);
        }
      }
      .tel {
        font-size: var(--app-text--m);
      }
      .right {
        align-self: flex-end;
      }
      .copyright {
        align-self: flex-end;
        font-size: var(--app-text--s);
        font-weight: var(--app-font-weight--normal);
        color: rgba(255, 255, 255, 0.5);
        text-align: right;
        .icp {
          margin-left: var(--app-size--1x);
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    --app-content-width: 100vw;
    --app-content-padding: var(--app-size--3x);
  }
  @media screen and (min-width: 1920px) {
    --app-text--xl: 36px;
    --app-text--l: 30px;
    --app-text--m: 20px;
    --app-text--s: 18px;
    --app-header-height: 80px;
    --app-nav-item-size: 18px;
    --app-icon--size: 18px;
  }
}
</style>
