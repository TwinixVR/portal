<template>
  <div class="page-index">
    <div class="section section-banner">
      <div class="section-banner-inner">
        <h1 class="banner-caption banner-caption--en">
          Provide professional solutions for <br />artificial intelligence, digital twins, metaverse, and 3D
          visualization applications
        </h1>
        <h1 class="banner-caption">提供专业的人工智能、数字孪生、元宇宙、三维可视化应用解决方案</h1>
      </div>
    </div>
    <div class="section section-aboutus">
      <div class="section-aboutus-inner">
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
      <div class="section-bussines-inner">
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
        </div>
      </div>
    </div>
    <div class="section section-advantages">
      <div class="section-advantages-inner">
        <h1 class="title">公司优势</h1>
        <div class="subtitle">Company advantages</div>
        <div class="desc"></div>
      </div>
    </div>
    <div class="section section-cooperation">
      <div class="section-cooperation-inner">
        <h1 class="title">合作机构</h1>
        <div class="subtitle">Cooperation institutions</div>
        <div class="desc"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Card } from '#components';
</script>
<style lang="scss">
.page-index {
  --page-text--xl: 36px;
  --page-text--l: 30px;
  --page-text--m: 20px;
  --page-text--s: 18px;
  --page-content-width: 85vw;
  scroll-margin-top: var(--app-shell-header-height);
  background-color: #f5f5f5;
  .section {
    .title {
      font-size: var(--page-text--xl);
      font-weight: var(--app-font-weight--medium);
      color: var(--app-color--black);
    }
    .subtitle {
      font-size: var(--page-text--m);
      font-weight: var(--app-font-weight--normal);
      color: rgba(0, 0, 0, 0.5);
    }
  }
  & > .section:not(:first-child) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .section-banner {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    height: 85vh;
    padding: 0 var(--app-size--3x);
    background: url(~/assets/imgs/idx_bg.webp) 100% no-repeat;
    background-color: #002638;
    background-image: image-set(url(~/assets/imgs/idx_bg.webp) 1x, url(~/assets/imgs/idx_bg@2x.webp) 2x);
    background-size: cover;
    .section-banner-inner {
      padding-top: var(--app-shell-header-height);
      margin: auto;
      color: var(--app-color--white);
      text-align: center;
      .banner-caption {
        font-size: var(--page-text--xl);
        font-weight: var(--app-font-weight--medium);
        line-height: 48px;
        color: var(--app-color--white);
      }
      .banner-caption--en {
        margin-bottom: calc(var(--app-size--1x) * 6);
        font-size: var(--page-text--m);
        line-height: 28px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .section-aboutus {
    .section-aboutus-inner {
      display: grid;
      grid-template: 'left right' 1fr / 1fr 1fr;
      grid-gap: 0 48px;
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
        padding-inline-end: calc(var(--app-size--1x) * 8);
        .desc {
          margin-top: 48px;
          font-size: var(--page-text--m);
          font-weight: var(--app-font-weight--normal);
        }
      }
    }
  }
  @media screen and (max-height: 500px) {
    .section-banner {
      min-height: 500px;
      background-size: 100%;
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
