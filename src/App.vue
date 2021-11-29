<template>
  <Game @gameEnded="finishGame" @gameStarted="startGame" @buyingGames="buyingGames" :started="this.started" :currentText="this.currentText" :dwarfTexts="this.dwarfTexts" :games="this.games"/>
  <Popup :class="{opened: gameEnd}" :gameEnd="gameEnd" @popupClose="closePopup">{{popupText}}</Popup>
</template>

<script>
import Game from './components/Game.vue'
import Popup from './components/Popup.vue'

export default {
  name: 'App',
  components: {
    Game,
    Popup
  },
  data(){
    return {
      gameEnd: false,
      popupText: '',
      games: 0,
      started: false,
      dwarfTexts: {
        default: "Вскрывай сундуки из моей сокровищницы! Ищи несметные богатства!",
        buyMore: "Покупай больше попыток! Сегодня тебе повезёт!",
        zeroGames: "Я уверен, следующий сундук будет полон золота! Попробуй ещё!",
        selectToBuy: " Сначала заплати за игру!  Меня не проведёшь!",
        goodJob: "Ты всё делаешь правильно! Выбирай сундук и испытай удачу!"
      },
      currentText: ''
    }
  },
  methods: {
    finishGame(text){
      this.gameEnd = true;
      this.popupText = text;
    },
    startGame(status, gameItems){
      this.started = status;
      this.games = gameItems;

      this.currentText = this.dwarfTexts.goodJob;
    },
    buyingGames(qty){
      this.games = qty;
      if(qty > 0) {
        this.currentText = this.dwarfTexts.buyMore;
      } else {
        this.currentText = this.dwarfTexts.selectToBuy;
      }
    },
    closePopup(status) {
      this.gameEnd = status;
      document.querySelectorAll('.success, .failed').forEach((el)=>el.classList.remove('success', 'failed'))
      document.querySelectorAll('.gameboard-item').forEach((el)=>el.classList.remove('disabled'))
      this.started = false;

      if (this.games === 0) {
        this.currentText = this.dwarfTexts.zeroGames;
      }
    }
  },
  mounted(){
    this.currentText = this.dwarfTexts.default
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "A Bremen Caps";
  src: local("A Bremen Caps"),
  url(assets/fonts/A_BREMENCAPS_REGULAR.TTF) format("truetype");
}
body {
  margin: 0;
}
.disabled {
  pointer-events: none;
}
#app {
  background: url("assets/images/app-bg.png") no-repeat center / cover;
  height: 100vh;
  width: 100vw;
}
</style>
