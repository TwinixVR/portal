<template>
  <div class="container">
    <h3 class="error">ERROR</h3>
    <div :data-text="errorCode" class="code">
      {{ errorCode }}
      <div class="split"></div>
      <div class="code-clip" :data-text="errorCode">{{ errorCode }}</div>
    </div>
    <div class="message">Uh oh, there seems to be a problem.</div>
    <div class="action"><a @click="handleError">返回首页</a></div>
  </div>
</template>
<script setup lang="ts">
const errorCode = ref(500);
const emit = defineEmits<{
  (e: 'goBack'): void;
}>();
const handleError = () => {
  emit('goBack');
};
</script>
<style lang="scss" scoped>
.container {
  $color-1: magenta;
  $color-2: cyan;
  $color-bg: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: rgba(#fff, 0.25);
  // font-family: Consolas, Menlo-Bold, 'IBM Plex Mono';
  background: $color-bg;

  .error {
    position: relative;
    margin-bottom: 1rem;
    font-size: 5vmin;
    font-weight: 500;
    color: #c94d4d;
    text-transform: uppercase;
    letter-spacing: 0.075em;
    animation: pulse 4s infinite alternate;
    @keyframes pulse {
      from {
        opacity: 0.5;
      }
      50% {
        opacity: 0.5;
      }
    }
    &::before {
      position: absolute;
      bottom: 100%;
      left: 50%;
      width: 0.75rem;
      height: 50vh;
      margin-bottom: 0.75em;
      content: '';
      background: linear-gradient(to bottom, rgba(#fff, 0.1) 60%, transparent 100%);
      transform: translateX(-50%);
    }
  }
  .code {
    position: relative;
    font-size: 20vmin;
    line-height: 1;
    color: #fff;
    text-indent: 2vmin;
    letter-spacing: 2vmin;
    animation: blink 1.1s infinite steps(1);
    &::before,
    &::after {
      position: absolute;
      top: -1px;
      overflow: hidden;
      color: rgba(#fff, 0.8);
      content: attr(data-text);
      mix-blend-mode: hard-light;
      animation: dance 2s infinite steps(2);
    }
    &::before {
      left: 0.02vmin;
      z-index: 1;
      text-shadow: -0.6vmin 0 0 $color-1;
      filter: contrast(200%);
    }
    &::after {
      left: -0.03vmin;
      z-index: 2;
      text-shadow: 0.6vmin 0 0 $color-2;
      background-color: rgba($color-bg, 0.8);
      mix-blend-mode: darken;
      animation: dance 2s infinite reverse steps(1);
    }
    .split {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 0.2vmin;
      background-color: $color-bg;
      transform: translateX(-8vmin);
      animation: split 3s ease-out infinite;
    }
    %code-clip {
      position: absolute;
      top: 0;
      left: -2px;
      z-index: 10;
      overflow: visible;
      color: $color-bg;
      animation: glitch 1s steps(2, start) infinite;
    }
    .code-clip {
      clip-path: polygon(
        0% 0%,
        100% 0,
        100% 21%,
        0 21%,
        0 30%,
        100% 30%,
        100% 50%,
        0 50%,
        0 60%,
        100% 60%,
        100% 65%,
        0 65%,
        0 80%,
        100% 80%,
        100% 85%,
        0 85%,
        0% 0%
      );
      // position: absolute;
      // top: 0;
      // left: -2px;
      // z-index: 10;
      // color: $color-bg;
      // overflow: visible;
      // animation: glitch 1s steps(2, start) infinite;
      @extend %code-clip;
      &::before {
        left: 0.05em;
        z-index: 9;
        clip-path: polygon(
          0% 0%,
          100% 0,
          100% 22%,
          0 22%,
          0 29%,
          100% 29%,
          100% 51%,
          0 51%,
          0 59%,
          100% 59%,
          100% 66%,
          0 66%,
          0 79%,
          100% 79%,
          100% 86%,
          0 86%,
          0% 0%
        );
        color: #fff;
        content: attr(data-text);
        @extend %code-clip;
      }
    }

    @keyframes glitch {
      30% {
        left: 0;
      }
      to {
        left: 0;
      }
    }
    @keyframes dance {
      0% {
        height: 0%;
      }
      84%,
      94% {
        height: 10%;
      }
      85% {
        height: 70%;
      }
      90% {
        height: 20%;
      }
      100% {
        height: 100%;
      }
    }

    @keyframes blink {
      25% {
        text-shadow:
          -0.3vmin 0 0 $color-1,
          0.1vmin 0 0 $color-2;
      }
      75% {
        text-shadow:
          -0.6vmin 0 0 $color-1,
          0.6vmin 0 0 $color-2;
      }
    }
    @keyframes split {
      8% {
        top: 90%;
      }
      14% {
        top: 10%;
      }
      20% {
        top: 100%;
      }
      32% {
        top: 8%;
      }
      99% {
        top: 80%;
      }
    }
  }
  .message {
    font-size: 3vmin;
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    a {
      position: relative;
      color: #fff;
      text-align: initial;
      cursor: pointer;
      background-color: transparent;
      border: 0;
      box-shadow: 0 1px 0 0 currentColor;
      transition:
        box-shadow 0.25s cubic-bezier(0.5, 0, 0, 0.75),
        color 0.33s ease;

      &:hover {
        box-shadow: 0 2px 0 0 currentColor;
      }
    }
  }
}
</style>
