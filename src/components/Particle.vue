<template>
  <div class="particle"></div>
</template>

<script>
export default {
  name: 'Particle',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @function vw($px-vw, $base-vw: 1920) {
    @return ($px-vw / $base-vw) * 100vw;
  }
  .particle {
    animation: rise 1s ease-in infinite;
    background-image: radial-gradient(rgb(255, 80, 0) 20%, rgba(255, 80, 0, 0) 70%);
    border-radius: 50%;
    mix-blend-mode: screen;
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: vw(170);
    height: vw(170);
  }
  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(0) scale(1);
    }
    25% {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateY(-10em) scale(0);
    }
  }
</style>
