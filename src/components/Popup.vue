<template>
  <div class="popup">
    <div class="popup__content">
      <div class="popup__text"><slot>Поздравляем! Вы выиграли</slot></div>

      <myButton @click="popupToggle(false)">вернуться</myButton>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
export default {
  name: 'Popup',
  props: {
    // msg: String
    gameEnd: Boolean
  },
  components: {
    myButton
  },
  methods: {
    popupToggle() {
      this.$emit('popupClose', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @function vw($px-vw, $base-vw: 1920) {
    @return ($px-vw / $base-vw) * 100vw;
  }
  .popup {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background: rgba(0,0,0,.3);
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: .3s;

    &.opened {
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    }

    &__content {
      background: url('../assets/images/dwarf-talks.png') no-repeat center/100% 100%;
      text-align: center;
      padding: 50px 50px 60px;
      font-size: 50px;
      line-height: initial;
      color: #333333;
      font-family: "A Bremen Caps", sans-serif;
      filter: drop-shadow(-3.441px 4.915px 5px rgba(1, 1, 1, 0.54));
      border-radius: 30px;
    }
  }
  button {
    margin-top: 25px;
  }
</style>
