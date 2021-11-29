<template>
  <div class="gameboard" :class="{ notStarted: !this.started }">
    <GameboardItem v-for="i in 9" :key="'item-' + i"  @click="chestOpening" />
  </div>
</template>

<script>
import GameboardItem from './GameboardItem'

export default {
  name: 'Gameboard',
  props: {
    started: Boolean,
  },
  data(){
    return {
      counter: 0
    }
  },
  components: {
    GameboardItem
  },
  methods: {
    chestSuccess(chest) {
      chest.classList.add('success')
    },
    chestFailed(chest) {
      chest.classList.add('failed')
    },
    popupToggle(text, status) {
      this.$emit('finishedGame', text, status)
    },
    chestOpening(event) {
      if (this.started) {
        document.querySelectorAll('.gameboard-item').forEach((el)=>el.classList.add('disabled'))

        if (this.counter % 2) {
          this.chestFailed(event.target)

          setTimeout(function(){
          //  popup open
            this.popupToggle('Вы проиграли! Попробуйте ещё!', false)
          }.bind(this), 1300)
        } else {
          this.chestSuccess(event.target)

          setTimeout(function(){
          //  popup open
            this.popupToggle('Поздравляем! Вы выиграли!', true)
          }.bind(this), 1300)
        }
        this.counter++;
      }
    }
  }
}
</script>

<style lang="scss">
@function vw($px-vw, $base-vw: 1920) {
  @return ($px-vw / $base-vw) * 100vw;
}
@keyframes notStarted {
  100% {
    background-position: vw(-420);
  }
}
@keyframes chestSuccess {
  100% {
    background-position: vw(-280);
  }
}
@keyframes chestFailed {
  100% {
    background-position: vw(-280);
  }
}
.gameboard.notStarted .gameboard-item {
  @for $p from 1 through 9 {
    &:nth-of-type(#{$p}) .chest {
      animation: notStarted .5s alternate-reverse steps(3, end) #{(10 + $p)/9}s;
    }
  }
}
.gameboard-item .chest.success {
  background: url("../assets/images/chest/chest-gold.png") no-repeat left center / cover;
  animation: chestSuccess .2s steps(2, end) .7s forwards;
}
.gameboard-item .chest.failed {
  background: url("../assets/images/chest/chest-empty.png") no-repeat left center / cover;
  animation: chestFailed .2s steps(2, end) .7s forwards;
}

</style>
