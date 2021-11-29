<template>
  <div class="dwarf" ref="dwarf">
    <img class="dwarf__image" src="../assets/images/dwarf3.png" alt="dwarf">
    <div class="dwarf__face"></div>
    <div class="dwarf__axe"></div>
    <div class="dwarf__shoulder"></div>
    <div class="dwarf__hand"></div>
    <div class="dwarf__talks">
      {{currentText}}
    </div>

    <myButton :class="{ disabled: !myGames || started}" @click="startGame">Играть</myButton>
  </div>
</template>

<script>
import myButton from './myButton'
export default {
  name: 'Dwarf',
  props: {
    started: Boolean,
    myGames: Number,
    currentText: String,
  },
  data() {
    return {
      playing: this.started,
      playingProcess: false,
    }
  },
  components: {
    myButton
  },
  mounted: function () {
    this.animateDwarf()
  },
  methods: {
    animateDwarf: function () {
      this.$refs.dwarf.classList.add('animated')
      setInterval(()=> {
        this.$refs.dwarf.classList.remove('animated')
        setTimeout(()=> this.$refs.dwarf.classList.add('animated'), 1000)
      }, 7000)
    },
    startGame: function () {
      let newGames = this.myGames;
      newGames-= 1;
      this.playing = true;
      this.playingProcess = true;
      this.$emit('startGame', this.playing, newGames)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@function vw($px-vw, $base-vw: 1920) {
  @return ($px-vw / $base-vw) * 100vw;
}
@keyframes face {
  100% {
    background-position: 100%;
  }
}

@keyframes shoulder {
  100% {
    background-position: 100%;
  }
}

@keyframes axe {
  100% {
    background-position: 100%;
  }
}

@keyframes hand {
  100% {
    background-position: 100%;
  }
}

  .dwarf {
    margin-top: vw(92);
    width: vw(320);
    display: flex;
    align-items: flex-start;
    /* justify-content: center; */
    z-index: 2;
    position: relative;
    padding-top: vw(29);
    padding-left: vw(15);

    &:before {
      content: '';
      position: absolute;
      left: 66%;
      top: 60%;
      width: vw(660);
      height: vw(796);
      transform: translate(-50%, -50%);
      background: url("../assets/images/dwarf-shadow.png") no-repeat center / cover;
      z-index: 0;
    }

    &__image {
      width: vw(411);
      z-index: 1;
    }

    &__face {
      position: absolute;
      left: vw(155);
      top: vw(65);
      width: vw(89);
      height: vw(97);
      background-image: url("../assets/images/face/face.png");
      background-size: cover;
      background-position: left center;
      background-repeat: no-repeat;
      z-index: 3;

      .animated & {
        animation: face 5s steps(13, end) 1s;
      }
    }

    &__shoulder {
      position: absolute;
      left: vw(235);
      top: vw(131);
      width: vw(103);
      height: vw(69);
      z-index: 4;
      background-image:url("../assets/images/shoulder/shoulder.png") ;
      background-size: cover;
      background-position: left center;
      background-repeat: no-repeat;

      .animated & {
        animation: shoulder .3s steps(5, end) 3s;
      }
    }

    &__axe {
      position: absolute;
      left: vw(91);
      top: vw(225);
      width: vw(161);
      height: vw(133);
      background-image: url("../assets/images/axe/axe.png");
      background-size: cover;
      background-position: left center;
      background-repeat: no-repeat;
      z-index: 5;

      .animated & {
        animation: axe .3s steps(6, end) 2.2s;
      }
    }

    &__hand {
      position: absolute;
      left: vw(104);
      top: vw(151);
      width: vw(99);
      height: vw(73);
      background-image: url("../assets/images/hand/hand.png");
      background-size: cover;
      background-position: left center;
      background-repeat: no-repeat;
      z-index: 4;

      .animated & {
        animation: hand .3s steps(7, end) 1s;
      }
    }

    &__talks {
      position: absolute;
      background: url('../assets/images/dwarf-talks.png') no-repeat center/100% 100%;
      top: vw(304);
      width: vw(310);
      padding: vw(37) vw(5) vw(34);
      box-sizing: border-box;
      left: vw(-3);
      z-index: 6;
      /* transform: translateX(-50%); */
      text-align: center;
      font-size: vw(21);
      line-height: vw(22);
      color: #333333;
      font-family: "A Bremen Caps", sans-serif;
      filter: drop-shadow(-3.441px 4.915px 5px rgba(1,1,1,0.54));

      &:before {
        content: '';
        background: url('../assets/images/dwarf-pretalks.png') no-repeat center / 100% 100%;
        display: block;
        position: absolute;
        width: 100%;
        height: vw(118);
        top: vw(-116);
        left: 0;
      }
    }

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 60%;
      width: 100%;
      height: 50%;
      background: radial-gradient(black 10%, transparent 70%);
      display: block;
      transform: translate(-50%, -50%);
      opacity: 0.9;
      z-index: 5;
    }
  }
  button {
    position: absolute;
    top: vw(534);
    left: vw(30);
    z-index: 7;
  }
</style>
