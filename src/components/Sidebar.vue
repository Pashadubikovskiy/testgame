<template>
  <div class="sidebar">
    <div class="sidebar__panel">
      <div class="sidebar__header">
        <span class="sidebar__shining"></span>
        <img src="../assets/images/test.png" alt="Chest Game">

      </div>
      <div class="sidebar__tip">
        1 игра = {{price}} $
      </div>
      <div class="sidebar__title">
        Вам доступно
      </div>
      <div class="sidebar__line">
        игр: <div class="gold myGames" ref="myGames">{{this.games}}</div>
      </div>


      <div class="sidebar__title">
        Покупка:
      </div>
      <div class="sidebar__line">
        игр: <span class="gold" ref="buyGames">{{buyGames}}</span>

        <div class="qty">
          <div class="qty__arrow qty__arrow--up" @click="addQty">
            <svg version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" width="11" height="6">
              <path d="m.98 5.68-.97-.85L5.5-.01l.97.85L.98 5.68Zm9.04 0L4.53.84l.97-.85 5.49 4.84-.97.85Z" style="fill:#fff"/>
            </svg>
          </div>
          <div class="qty__arrow qty__arrow--down" :class="{ disabled: !buyGames }" @click="removeQty">
            <svg version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" width="11" height="6" style="transform: scaleY(-1)">
              <path d="m.98 5.68-.97-.85L5.5-.01l.97.85L.98 5.68Zm9.04 0L4.53.84l.97-.85 5.49 4.84-.97.85Z" style="fill:#fff"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="sidebar__line">
        Сумма: <div class="gold" ref="totalPrice">{{totalPrice}}<span>$</span></div>
      </div>

      <myButton @click="buy">купить</myButton>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
export default {
  name: 'Sidebar',
  props: {
    games: Number
  },
  data(){
    return {
      // myGames: this.games,
      buyGames: 0,
      totalPrice: 0,
      price: 5,
    }
  },
  components: {
    myButton
  },
  methods: {
    updateTotalPrice() {
      this.totalPrice = this.buyGames * 5
    },
    addQty () {
      this.buyGames++;
      this.updateTotalPrice();
    },
    removeQty () {
      if (this.buyGames > 0) {
        this.buyGames--;
        this.updateTotalPrice();
      }
    },
    clearBuying () {
      this.totalPrice = 0;
      this.buyGames = 0;
    },
    buy () {
      let myGames = this.games;
      myGames += this.buyGames;
      this.$emit('myGames', myGames)
      this.clearBuying();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @function vw($px-vw, $base-vw: 1920) {
    @return ($px-vw / $base-vw) * 100vw;
  }
  .sidebar {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 4;
    width: vw(687);
    height: 100%;
    background: url("../assets/images/sidebar-bg.png");

    &__header {
      position: relative;
      text-align: center;
      margin-left: vw(-4);
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
      }
    }

    &__panel {
      margin: vw(225) 0 0 vw(24);
      padding: vw(24) vw(20) vw(46);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: vw(272);
      background: url('../assets/images/panel-bg.png') no-repeat center / cover;
      font-size: vw(15);
      line-height: vw(31);
      color: #bab6b6;
      font-family: "A Bremen Caps", sans-serif;
      overflow: hidden;
    }

    &__tip {
      position: relative;
      margin: vw(17) 0 vw(24);
    }

    &__line {
      display: flex;
      align-items: baseline;
    }

    &__shining {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(#dba30e, transparent);
      filter: blur(10);
      mix-blend-mode: color-dodge;
    }

    &__title {
      font-size: vw(18);
      line-height: vw(36);
      color: #ffffff;
      font-family: "A Bremen Caps", sans-serif;
      filter: drop-shadow(-4.015px 5.734px 1.5px rgba(31,32,32,0.4));

      .sidebar__line + & {
        margin-top: vw(42);
      }
    }
  }
  .gold {
    margin-left: auto;
    font-size: vw(30);
    color: #fec602;
    font-family: "A Bremen Caps", sans-serif;
    text-align: right;
    filter: drop-shadow(-4.015px 5.734px 1.5px rgba(31,32,32,0.4));

    span {
      font-size: vw(24);
      line-height: vw(30);
      color: #959392;
      font-family: "A Bremen Caps", sans-serif;
      text-align: right;
      filter: drop-shadow(-4.015px 5.734px 1.5px rgba(31,32,32,0.4));
      margin-left: vw(8);
    }
  }
  .myGames {
    margin-right: vw(21);
  }
  .qty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    align-self: center;

    &__arrow {
      height: fit-content;
      display: flex;
      padding: vw(3) 0 vw(3) vw(9);
      cursor: pointer;

      &.disabled {
        opacity: .5;
      }
    }
  }
  button {
    margin-top: vw(13);
  }
</style>
