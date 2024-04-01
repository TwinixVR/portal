<template>
  <div ref="containerRef" class="container">
    <div data-code="404" class="code">404</div>
    <div class="message">
      <h1>Uh, Ohh...</h1>
      <p>页面不见了😭</p>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useEventListener } from '@vueuse/core';
const containerRef = ref<HTMLElement>();
useEventListener(containerRef, 'mousemove', (evt) => {
  const { clientX, clientY } = evt;
  containerRef.value.style?.setProperty('--x', `${clientX}px`);
  containerRef.value.style?.setProperty('--y', `${clientY}px`);
});
</script>
<style lang="scss" scoped>
.container {
  --x: 80vmin;
  --y: 30vmin;
  --r: 20vmin;
  --color: #011718;

  --color-bg: #000000f7;
  --color-a: rgba(0, 0, 0, 0);
  --color-b: rgba(0, 0, 0, 0.5);
  @property --x {
    syntax: '<length>';
    inherits: false;
    initial-value: 80vmin;
  }
  @property --y {
    syntax: '<length>';
    inherits: false;
    initial-value: 30vmin;
  }
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Silkscreen-Bold', 'Roboto', sans-serif;
  font-family: Consolas, Menlo-Bold, sans-serif;
  color: var(--color);
  text-align: center;
  background: url('~/assets/imgs/bg-a.webp') no-repeat left top;
  perspective: 1200px;
  > div {
    width: 100%;
  }

  &::before {
    position: absolute;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
    background-image: radial-gradient(
      var(--r) circle at var(--x) var(--y),
      var(--color-a) 0,
      var(--color-b) 60%,
      var(--color-bg)
    );
    background-repeat: no-repeat;
    box-shadow: 0 0 0 9999em var(--color-bg);
    transition:
      --x 0.3s ease-in-out,
      --y 0.3s ease-in-out;
  }
  .code {
    position: relative;
    font-size: 30vmin;
    font-weight: 900;
    text-shadow:
      -5px 5px 0px rgba(0, 0, 0, 0.7),
      -10px 10px 0px rgba(0, 0, 0, 0.4),
      -15px 15px 0px rgba(0, 0, 0, 0.2);

    letter-spacing: 5vmin;
  }
  .message {
    font-family: 'Silkscreen-Bold', sans-serif;
    font-size: 5vmin;
    font-weight: 400;
    h1 {
      padding: 0;
      margin: 0;
      font-size: 10vmin;
      font-weight: 400;
      color: #222;
      text-shadow: -5px 5px 0px rgba(0, 0, 0, 0.7);
    }
    p {
      font-weight: bold;
      // color: #dedede;
      text-shadow: -3px 3px 0px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
