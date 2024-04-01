<template>
  <div class="container">
    <div class="code" data-code="404">404</div>
    <div class="message">
      <h1>Ooops...</h1>
      <p>page not found</p>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/animate.scss' as *;
.container {
  --size--l: 30vmin;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  > div {
    width: 100%;
  }
  .code {
    position: relative;
    font-family: Consolas, Menlo-Bold, sans-serif;
    font-size: var(--size--l);
    font-weight: 900;
    line-height: 1;
    color: #eaeaea;
    text-transform: uppercase;
    letter-spacing: 6vmin;

    &::before {
      position: absolute;
      color: transparent;
      content: attr(data-code);
      background-image: linear-gradient(90deg, #4158d0 0%, #c850c0 30%, #ffcc70 66%, #56e28d 100%);
      background-clip: text;
      --webkit-backgroud-clip: text;
      --r: 31vmin;
      @include animation(spotlight, 10s linear infinite both, '') {
        0% {
          clip-path: ellipse(var(--r) var(--r) at 0 50%);
        }
        50% {
          clip-path: ellipse(var(--r) var(--r) at 100% 50%);
        }
        100% {
          clip-path: ellipse(var(--r) var(--r) at 0% 50%);
        }
      }
    }
  }
  .message {
    font-size: 5vmin;
    font-weight: 400;
    color: #cacaca;
    h1 {
      padding: 0;
      margin: 0;
      font-size: 10vmin;
      font-weight: 400;
    }
  }
}
</style>
