<template>
  <div class="container">
    <div class="code">404</div>
    <div class="message">
      <h1>Ooops...</h1>
      <p>page not found</p>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/animate.scss' as *;
@function multiple-shadow($length) {
  $value: 2px -1px 0 #000;
  @for $i from 2 through $length {
    $ho: $i * 2;
    $vo: -#{calc($ho / 2)};
    $col: hsl(0deg, 0%, $i * 2%);
    $value:
      $value,
      #{$ho}px #{$vo}px 0 $col;
  }
  @return $value;
}
.container {
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
    // background: #fff;
    position: relative;
    font-family: Consolas, Menlo-Bold, sans-serif;
    font-size: 30vmin;
    font-weight: 900;
    line-height: 1;
    text-shadow: multiple-shadow(8);
    letter-spacing: 5vmin;
    &::before {
      position: absolute;

      display: block;
      width: 100%;
      height: 100%;
      content: '';
      background-color: #673ab7;
      background-image: radial-gradient(closest-side at 50% 50%, #ffc107 100%, rgba(0, 0, 0, 0)),
        radial-gradient(closest-side at 50% 50%, #e91e63 100%, rgba(0, 0, 0, 0));
      background-repeat: repeat-x;
      background-position:
        -100vmin 20vmin,
        100vmin -25vmin;
      background-size: 40vmin 40vmin;
      mix-blend-mode: screen;
      @include animation(moving, 10s linear infinite both, to) {
        background-position:
          100vmin 20vmin,
          -100vmin -25vmin;
      }
    }
  }
  .message {
    font-family: Courgette, sans-serif;
    font-size: 5vmin;
    font-weight: 400;
    h1 {
      padding: 0;
      margin: 0;
      font-size: 10vmin;
      font-weight: 400;
    }
  }
}
</style>
