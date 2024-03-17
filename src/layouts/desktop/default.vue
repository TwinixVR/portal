<template>
  <div id="app" class="app-shell app-shell--desktop">
    <header class="app-shell-header">
      <slot name="header">
        <div class="app-header-container">
          <div class="app-header">
            <h1 class="app-logo" aria-hidden>
              <a class="app-logo-link" href="/">
                <!-- <img class="icon" src="" alt="" /> -->
              </a>
            </h1>
            <div class="app-nav">
              <ul class="nav-items">
                <li class="nav-item">
                  <a class="nav-link"> <span class="nav-item-text">关于我们</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"> <span class="nav-item-text">业务介绍</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"> <span class="nav-item-text">案例展示</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"> <span class="nav-item-text">联系我们</span></a>
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
</script>
<style lang="scss">
/**css vars */
:root {
  --app-header-height: 80px;
  --app-size--1x: 8px;
  --app-size--3x: 24px;
  --app-size--4x: calc(var(--app-size--1x) * 4);
  --app-icon--bg: transparent;
  --app-icon--size: 18px;
  --app-font-weight--normal: 400;
  --app-font-weight--medium: 500;
  --app-nav-item--width: auto;
  --app-nav-item-size: 18px;
  --app-color--black: #000;
  --app-color--white: #fff;
  --app-text--white: #fff;
  --app-bezier: cubic-bezier(0.5, 0, 0, 0.75);
}

.app-shell--desktop {
  --app-shell-header-height: 80px;
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
    .app-header-container {
      position: relative;
      z-index: 10;
      inline-size: 100%;
      min-block-size: var(--app-header-height);
      background: url('~/assets/imgs/idx_header_bg.png') 100% no-repeat;
      // background-color: hsla(0, 0%, 100%, 0.75);
      // backdrop-filter: blur(48px);
      .app-header {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        inline-size: 100%;
        max-width: 80vw;
        min-block-size: var(--app-header-height);
        margin: auto;
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
              display: inline-flex;
              align-items: center;
              inline-size: var(--app-nav-item--width);
              min-block-size: var(--app-size--4x);
              padding: calc(var(--app-size--1x) / 2) var(--app-size--1x);
              font-weight: var(--app-font-weight--normal);
              white-space: nowrap;
              transition:
                color 0.33s ease,
                background-color 0.33s ease;
              .nav-item-text {
                margin: 0 var(--app-size--1x);
                font-size: var(--app-nav-item-size);
                color: var(--app-color--white);
                transition: color 0.33s ease;
              }
            }
          }
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
      max-width: 80vw;
      margin: 0 auto;
      font-size: 20px;
      font-weight: var(--app-font-weight--medium);
      line-height: 40px;
      color: var(--app-color--white);
      .row {
        &:not(:first-child) {
          margin-top: 80px;
        }
      }
      .title {
        margin-bottom: 40px;
        font-size: 30px;
        line-height: 40px;
      }
      .icons {
        display: inline-flex;
        flex: 0 1;
        align-items: center;
        font-size: 30px;
        :not(:first-child) {
          margin-left: 64px;
        }
      }
      .tel {
        font-size: 20px;
      }
      .right {
        align-self: flex-end;
      }
      .copyright {
        align-self: flex-end;
        font-size: 18px;
        font-weight: var(--app-font-weight--normal);
        color: rgba(255, 255, 255, 0.5);
        text-align: right;
        .icp {
          margin-left: var(--app-size--1x);
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .app-shell-header {
      .app-header {
        max-width: 100% !important;
      }
    }
    .app-shell-footer {
      .app-footer {
        max-width: 100% !important;
      }
    }
  }
}
</style>
