<template>
  <div class="game">
    <div class="left-wall">
      <img src="../assets/images/torch.png" alt="torch" class="torch">
      <div class="fire">
        <Particle v-for="i in 50" :key="'item-' + i" />
      </div>
    </div>

    <div class="game-container">
      <img alt="Chests logo" src="../assets/images/logo.png" class="game-logo">
      <Gameboard
          :started="started"
          @finishedGame="finishGame"
      />
      <div class="game-container__tip">
        Для игры Вам необходимо купить попытки,
        а затем нажать кнопку “ИГРАТЬ”
      </div>
    </div>

    <Dwarf
        :started="this.started"
        :myGames="this.games"
        :currentText="this.currentText"
        @startGame="startGame"
    />
  </div>
  <Sidebar
      :games="this.games"
      @myGames="buyingGames"
  />
</template>

<script>
import Particle from './Particle'
import Gameboard from './Gameboard'
import Sidebar from './Sidebar'
import Dwarf from './Dwarf'
export default {
  name: 'Game',
  props: {
    started: Boolean,
    dwarfTexts: Object,
    games: Number,
    currentText: String
  },
  emits: ['gameStarted','buyingGames', 'gameEnded' ],
  data () {
    return {
    }
  },
  components: {
    Particle,
    Gameboard,
    Sidebar,
    Dwarf
  },
  methods: {
    startGame(gameStarted, buyingGames){
      this.$emit('gameStarted', gameStarted, buyingGames)

      document.querySelectorAll('.chest').forEach((el)=> {
        el.classList.add('opacity');
      })
      setTimeout(()=> {
        document.querySelectorAll('.chest').forEach((el)=> {
          el.classList.remove('opacity');
        })
      }, 500)
    },
    buyingGames(qty){
      this.$emit('buyingGames', qty)
    },
    finishGame(text, status){
      this.$emit('gameEnded', text, status)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @function vw($px-vw, $base-vw: 1920) {
    @return ($px-vw / $base-vw) * 100vw;
  }
  .game {
    background: url("../assets/images/game-bg.png") no-repeat top / 100% 100%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    height: 100vh;

    &-logo {
      width: vw(302);
    }

    &-container {
      width: vw(530);
      margin-left: vw(380);
      padding-top: vw(120);
      z-index: 8;

      &__tip {
        font-size: vw(16);
        line-height: vw(20);
        color: #ffffff;
        font-weight: 400;
        font-family: "PT Sans", sans-serif;
        text-align: center;
        filter: drop-shadow(0 0 16px #1f2020);
        max-width: vw(310);
        margin: vw(10) auto auto;
      }
    }

    &:after {
      content: '';
      position: absolute;
      right: 0;
      width: vw(900);
      background: linear-gradient(
              270deg, black 80%, transparent);
      top: 0;
      height: 100%;
      z-index: 0;
      opacity: .8;
    }
  }
  .left-wall {
    position: absolute;
    top: 0;
    left: 0;
    background: url("../assets/images/wall.png") no-repeat top / cover;
    height: 100%;
    width: vw(212);
  }
  .torch {
    width: vw(375);
    object-fit: cover;
    height: vw(600);
    object-position: top right;
    position: absolute;
    top: vw(215);
  }
  .fire {
    filter: blur(0.03em);
    -webkit-filter: blur(0.03em);
    position: absolute;
    top: vw(170);
    width: vw(200);
    height: vw(300);
    left: vw(55);
    opacity: .4;
  }
  .particle {
    @for $p from 1 through 50 {
      &:nth-of-type(#{$p}) {
        animation-delay: 1s * random();
        left: calc((100% - 5em) * #{($p - 1)/50});
      }
    }
  }
</style>
