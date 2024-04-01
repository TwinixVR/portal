<template>
  <div class="container">
    <div class="error">
      <div class="box"></div>
      <h3 :data-text="errorText">{{ errorText }}</h3>
      <p>这里的情况有点 <span data-text="不稳定">不稳定</span></p>
      <p>我建议稍后再回来</p>
    </div>
    <div class="action"><a @click="handleError">返回首页</a></div>
  </div>
</template>
<script setup lang="ts">
const errorText = ref('ERROR 500');
const emit = defineEmits<{
  (e: 'goBack'): void;
}>();
const handleError = () => {
  emit('goBack');
};
</script>
<style lang="scss" scoped>
$color-1: magenta;
$color-2: cyan;

.container {
  display: grid;
  width: 100%;
  font-family: Silkscreen-Regular, Inconsolata, monospace;
  --text-1: 10vmin;
  --text-2: 3vmin;
  .error {
    position: relative;
    z-index: 2;
    padding: 20px;
    margin: auto;
    .box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #000;
      &::before,
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: ' ';
        box-shadow: inset 0px 0px 0px 1px #000;
        mix-blend-mode: multiply;
        animation: dance 2s infinite steps(1);
      }

      &::before {
        clip-path: polygon(0 0, 65% 0, 35% 100%, 0 100%);
        color: $color-1;
        box-shadow: inset 0px 0px 0px 1px currentColor;
      }

      &::after {
        clip-path: polygon(65% 0, 100% 0, 100% 100%, 35% 100%);
        color: $color-2;
        box-shadow: inset 0px 0px 0px 1px currentColor;
        animation-duration: 0.5s;
        animation-direction: alternate;
      }
    }
    h3 {
      position: relative;
      font-size: var(--text-1);
      font-weight: 500;
      text-transform: uppercase;
      animation: blink 1.3s infinite steps(1);

      &:before,
      &:after {
        position: absolute;
        top: -1px;
        left: 0;
        content: attr(data-text);
        mix-blend-mode: soft-light;
        animation: dance 2s infinite steps(2);
      }

      &::before {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        color: $color-1;
        animation: shiftright 200ms steps(2) infinite;
      }
      &::after {
        clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%);
        color: $color-2;
        animation: shiftleft 200ms steps(2) infinite;
      }
    }

    p {
      position: relative;
      margin-bottom: 8px;
      font-size: var(--text-2);
      span {
        position: relative;
        display: inline-block;
        font-weight: bold;
        color: #000;
        animation: blink 3s steps(1) infinite;

        &:before,
        &:after {
          position: absolute;
          top: -1px;
          left: 0;
          content: attr(data-text);
          mix-blend-mode: multiply;
        }

        &:before {
          clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
          color: $color-1;
          animation: shiftright 1.5s steps(2) infinite;
        }
        &:after {
          clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%);
          color: $color-2;
          animation: shiftleft 1.7s steps(2) infinite;
        }
      }
    }
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    a {
      position: relative;
      color: #000;
      text-align: initial;
      cursor: pointer;
      background-color: transparent;
      border: 0;
      box-shadow: 0 1px 0 0 currentColor;
      transition:
        box-shadow 0.25s cubic-bezier(0.5, 0, 0, 0.75),
        color 0.33s ease;
      --w: 0%;
      @property --w {
        syntax: '<length>';
        initial-value: 0%;
        inherits: false;
      }

      &::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: var(--w);
        height: 1px;
        content: ' ';
        background: linear-gradient(90deg, $color-1 50%, $color-2 50%) no-repeat;
        transition:
          width 0.3s,
          --w 0.3s;
        transform: translate(-50%);
      }
      &:hover {
        box-shadow: none;
        --w: 100%;
        &::after {
          height: 2px;
        }
      }
    }
  }
  @keyframes dance {
    0%,
    84%,
    94% {
      transform: skew(0deg);
    }
    85% {
      transform: skew(5deg);
    }
    90% {
      transform: skew(-5deg);
    }
    98% {
      transform: skew(3deg);
    }
  }
  @keyframes shiftleft {
    0%,
    87%,
    100% {
      transform: translate(0, 0) skew(0deg);
    }
    84%,
    90% {
      transform: translate(-8px, 0) skew(20deg);
    }
  }
  @keyframes shiftright {
    0%,
    87%,
    100% {
      transform: translate(0, 0) skew(0deg);
    }
    84%,
    90% {
      transform: translate(8px, 0) skew(20deg);
    }
  }
  @keyframes blink {
    0%,
    50%,
    85%,
    100% {
      color: #000;
    }
    87%,
    95% {
      color: transparent;
    }
  }
}
</style>
