<template>
  <button class="button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'myButton',
  props: {
    // text: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @function vw($px-vw, $base-vw: 1920) {
    @return ($px-vw / $base-vw) * 100vw;
  }
  button {
    font-size: vw(36);
    border: none;
    outline: none;
    /*line-height: 60px;*/
    color: #52311b;
    font-family: "A Bremen Caps", sans-serif;
    text-align: center;
    background: url('../assets/images/btn.png') no-repeat center / 100% 100%;
    min-width: vw(225);
    line-height: vw(61);
    text-transform: lowercase;
    padding: 0 vw(50);
    filter: drop-shadow(-4.015px 5.734px 1.5px rgba(31,32,32,0.4));
    cursor: pointer;
    transition: .3s;

    &:hover {
      opacity: .8;
    }

    &.disabled {
       filter: grayscale(1);
     }
  }

</style>
