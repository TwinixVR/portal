<template>
  <div class="page-index">
    <div ref="bannerRef" class="section section-banner">
      <div ref="parallaxContainer" class="cover-parallax" :style="layerCoverStyle">
        <div class="layer" :style="layer0Style"></div>
      </div>
      <div class="cover-filter"></div>
      <div class="inner">
        <h1 class="banner-caption banner-caption--en">
          Provide professional solutions for <br />artificial intelligence, digital twins, metaverse, and 3D
          visualization applications
        </h1>
        <h1 class="banner-caption">提供专业的人工智能、数字孪生、元宇宙、三维可视化应用解决方案</h1>
      </div>
    </div>
    <div class="section section-aboutus">
      <div class="inner">
        <div class="left">
          <img
            src="~/assets/imgs/1001.webp"
            srcset="~/assets/imgs/1001@2x.webp 2x, ~/assets/imgs/1001.webp 1x"
            sizes="(max-width: 1920px) 1x"
            alt="about us"
          />
        </div>
        <div class="right">
          <h1 class="title">关于我们</h1>
          <div class="subtitle">about us</div>
          <div class="desc">
            致力于为多行业企业、文化旅游（展馆）产业、大中专院校等多类型客户，打造结合自身行业特点、需求和体验的一站式数字孪生方案与服务。通过自主设计+对数字化市场的适应，逐渐确立了以企业流程孪生类展示、数字可视化培训、文旅（展馆）类沉浸式展示、学校混合现实类教学、互动协同平台等为主的服务体系结构，创造性地帮助客户实现数字化转型和痛点诉求解决。
          </div>
        </div>
      </div>
    </div>
    <div class="section section-bussines">
      <div class="inner">
        <h1 class="title">业务介绍</h1>
        <div class="subtitle">The Main Busines</div>
        <div class="desc">
          <Card
            class="card-bussines"
            title="虚拟现实（XR）"
            description="虚拟展厅、XR智能培训、XR教育、完全应急培训系统"
          >
            <template #cover>
              <img
                alt="虚拟现实（XR）"
                src="~/assets/imgs/1002.jpg"
                srcset="~/assets/imgs/1002@2x.jpg 2x, ~/assets/imgs/1002.jpg 1x"
              />
            </template>
          </Card>
          <Card
            class="card-bussines"
            title="数字孪生"
            description="智慧园区、智慧楼宇、智慧港口、智慧能源、 数字矿山、数字电厂 "
          >
            <template #cover>
              <img
                alt="数字孪生"
                src="~/assets/imgs/1003.jpg"
                srcset="~/assets/imgs/1003@2x.jpg 2x, ~/assets/imgs/1003.jpg 1x"
              />
            </template>
          </Card>
          <Card
            class="card-bussines"
            title="工农业元宇宙"
            description="数字乡村可视化、农业数字孪生、数字大屏、 工业元宇宙 "
          >
            <template #cover>
              <img
                alt="工农业元宇宙"
                src="~/assets/imgs/1004.jpg"
                srcset="~/assets/imgs/1004@2x.jpg 2x, ~/assets/imgs/1004.jpg 1x"
              />
            </template>
          </Card>
          <Card
            class="card-bussines"
            title="AI+数字人"
            description="AI+数字人、数字人生成平台、元宇宙数字人、 数字人交互"
          >
            <template #cover>
              <img
                alt="AI+数字人"
                src="~/assets/imgs/1005.jpg"
                srcset="~/assets/imgs/1005@2x.jpg 2x, ~/assets/imgs/1005.jpg 1x"
              />
            </template>
          </Card>
          <Card class="card-bussines" title="软件开发" description="小程序设计、APP设计、网站设计、 软件系统开发">
            <template #cover>
              <img
                alt="软件开发"
                src="~/assets/imgs/1006.jpg"
                srcset="~/assets/imgs/1006@2x.jpg 2x, ~/assets/imgs/1006.jpg 1x"
              />
            </template>
          </Card>
        </div>
      </div>
    </div>
    <div class="section section-advantages">
      <div class="inner">
        <h1 class="title">公司优势</h1>
        <div class="subtitle">Company advantages</div>
        <div class="desc">
          <div class="big">
            <Card
              class="card-advantages"
              :hoverable="false"
              :bordered="false"
              title="专业的技术团队，丰富的行业经验 "
              description="用专业服务每一名客户"
            >
              <template #cover>
                <img
                  alt="专业的技术团队，丰富的行业经验 "
                  src="~/assets/imgs/1007.jpg"
                  srcset="~/assets/imgs/1007@2x.jpg 2x, ~/assets/imgs/1007.jpg 1x"
                />
              </template>
            </Card>
          </div>
          <div class="small">
            <Card
              class="card-advantages"
              :hoverable="false"
              :bordered="false"
              title="成熟的产品体系，完善的售后服务 "
              description="以实际行动表现新力量"
            >
              <template #cover>
                <img
                  alt="成熟的产品体系，完善的售后服务"
                  src="~/assets/imgs/1008.jpg"
                  srcset="~/assets/imgs/1008@2x.jpg 2x, ~/assets/imgs/1008.jpg 1x"
                />
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-cooperation">
      <div class="inner">
        <h1 class="title">合作机构</h1>
        <div class="subtitle">Cooperation institutions</div>
        <div class="desc">
          <!-- <ul>
            <li> <img alt="" src="~/assets/imgs/logo-zgyd.png" /></li>
          </ul> -->
          <div class="row">
            <div><img alt="" src="~/assets/imgs/logo-zgyd.png" /></div>

            <div><img alt="" src="~/assets/imgs/logo-crrc.png" /></div>

            <div><img alt="" src="~/assets/imgs/logo-zgdx.png" /></div>

            <div><img alt="" src="~/assets/imgs/logo-zhxt.png" /></div>
          </div>
          <div class="row">
            <div><img alt="" src="~/assets/imgs/logo-cars.png" /></div>

            <div><img alt="" src="~/assets/imgs/logo-zggd.png" /></div>

            <div><img alt="" src="~/assets/imgs/logo-tjny.png" /></div>

            <div><img alt="" src="~/assets/imgs/logo-zglt.png" /></div>
          </div>
          <!-- <div></div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Card } from '#components';
import { useElementBounding } from '@vueuse/core';
import type { CSSProperties } from 'vue';
import useParallax from '~/composables/useParallax';
const parallaxContainer = ref<HTMLElement>();
const bannerRef = ref<HTMLElement>();
const MAX_MOVE = 24;
const { roll, tilt } = useParallax(parallaxContainer);

const layerBase: CSSProperties = {
  // position: 'absolute',
  transition: '.3s ease-out all',
};
const { width: bannerWidth } = useElementBounding(bannerRef);
const layer0Style = computed(() => {
  const scale = !tilt.value && !roll.value ? 1 : (2 * MAX_MOVE) / (bannerWidth.value || 9999) + 1;
  return {
    ...layerBase,
    transform: `translate3d(${tilt.value * MAX_MOVE}px, ${roll.value * MAX_MOVE}px, 0) scale(${scale})`,
    transformOrigin: 'center',
  };
});
const layerCoverStyle = computed(() => ({
  ...layerBase,
}));
</script>
<style lang="scss">
.page-index {
  --page-text--xl: var(--app-text--xl);
  --page-text--l: var(--app-text--l);
  --page-text--m: var(--app-text--m);
  --page-text--s: var(--app-text--s);
  --page-content-width: var(--app-content-width);
  --page-content-padding: var(--app-content-padding);
  --app-size--6x: calc(var(--app-size--1x) * 6);
  --page-gap: calc(var(--app-size--1x) * 4);
  scroll-margin-top: var(--app-shell-header-height);
  background-color: #f5f5f5;
  .section {
    .title {
      font-size: var(--page-text--l);
      font-weight: var(--app-font-weight--medium);
      color: var(--app-color--black);
    }
    .subtitle {
      font-size: var(--page-text--m);
      font-weight: var(--app-font-weight--normal);
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: var(--page-gap);
    }
    > .inner {
      max-width: var(--page-content-width);
      padding-inline-start: var(--page-content-padding);
      padding-inline-end: var(--page-content-padding);
      margin: auto;
    }
  }
  & > .section:not(:first-child) {
    padding-top: var(--app-size--6x);
    padding-bottom: var(--app-size--6x);
  }

  .section-banner {
    --banner-cover-move: 0px;
    --banner-cover-width: calc(100% + var(--banner-cover-move));
    --banner-cover-height: calc(100% + var(--banner-cover-move));
    --banner-height: calc(100vw * 900 / 1920);

    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    height: var(--banner-height);
    position: relative;
    overflow: hidden;
    .cover-parallax {
      will-change: transform;
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      pointer-events: none;
      transform: translate3d(0, 0, 0) rotate(0.0001deg);
      transform-style: preserve-3d;
      background-color: #002638;
      background-size: cover;

      > .layer {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        background: url(~/assets/imgs/idx_bg.webp) no-repeat;
        background-image: image-set(url(~/assets/imgs/idx_bg.webp) 1x, url(~/assets/imgs/idx_bg@2x.webp) 2x);
        background-size: cover;
        background-position: 100%;
      }
    }
    .cover-filter {
      &::after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
    .inner {
      padding-top: var(--app-shell-header-height);
      margin: auto;
      color: var(--app-color--white);
      text-align: center;
      perspective: 1000px;
      transform: translate3d(0, 0, 0);
      .banner-caption {
        font-size: var(--page-text--xl);
        font-weight: var(--app-font-weight--medium);
        line-height: 48px;
        color: var(--app-color--white);
      }
      .banner-caption--en {
        margin-bottom: var(--app-size--6x);
        font-size: var(--page-text--m);
        line-height: 28px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .section-aboutus {
    .inner {
      width: 100vw;
      max-width: 100vw;
      padding-inline-start: 0;
      padding-inline-end: 0;
      display: grid;
      grid-template: 'left right' 1fr / 1fr 1fr;
      grid-gap: 0 var(--page-gap);
      .left {
        grid-area: left;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        grid-area: right;
        justify-content: center;
        max-width: 28vw;
        padding-inline-end: var(--page-gap);
        padding-inline-start: var(--page-gap);
        .desc {
          font-size: var(--page-text--m);
          font-weight: var(--app-font-weight--normal);
        }
      }
    }
  }
  .section-bussines {
    .inner {
      .desc {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: var(--page-gap) var(--page-gap);
      }
    }
  }
  .section-advantages {
    .inner {
      .desc {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: var(--page-gap) var(--page-gap);
        > div {
          overflow: hidden;
        }
        .card {
          --card-title-text-size: var(--page-text--m);
          --card-description-text-size: var(--page-text--s);
        }
      }
    }
  }
  .section-cooperation {
    .inner {
      --pic-gap: 16px;
      .desc {
        display: flex;
        flex-direction: column;
        gap: var(--pic-gap);
        .row {
          display: flex;
          flex: 0;
          gap: var(--pic-gap);
          align-items: center;
          > div {
            height: 105px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            overflow: hidden;
            img {
              height: auto;
              display: block;
              width: 95%;
              max-height: fit-content;
              object-fit: contain;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1920px) {
    .section-banner {
      .section-banner-inner {
        max-width: 80vw;
      }
    }
    .section-aboutus {
      .section-aboutus-inner {
        .right {
          max-width: 28vw;
        }
      }
    }
  }
}
</style>
