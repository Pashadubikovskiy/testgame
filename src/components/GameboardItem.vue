<template>
  <div class="gameboard-item">
    <div class="chest" ref="chest">

    </div>
  </div>
</template>

<script>
export default {
  name: 'GameboardItem',
}
</script>

<style scoped lang="scss">
@function vw($px-vw, $base-vw: 1920) {
  @return ($px-vw / $base-vw) * 100vw;
}
.gameboard-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: vw(161);
  height: vw(161);
  background: url("../assets/images/chest-bg.png") no-repeat center / cover;
  margin: vw(6);
  box-shadow: 1px 1px 3px rgba(255, 255, 255, .4);
  transition: .3s;

  .chest {
    width: vw(140);
    height: vw(140);
    margin-top: auto;
    background: url("../assets/images/chest/chest-gold.png") no-repeat left center / cover;
    cursor: pointer;
    transition: .3s;


    &:hover {
      opacity: .8;
    }
  }
}
</style>
