(function(t){function e(e){for(var a,r,i=e[0],o=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},c={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"019f":function(t,e,n){},"07e3":function(t,e,n){"use strict";n("019f")},"0ff0":function(t,e,n){},"1f20":function(t,e,n){},"222d":function(t,e,n){t.exports=n.p+"img/dwarf3.84131384.png"},2416:function(t,e,n){"use strict";n("852d")},3221:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(t,e,n,c,s,r){var i=Object(a["m"])("Game"),o=Object(a["m"])("Popup");return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["f"])(i,{onGameEnded:r.finishGame,onGameStarted:r.startGame,onBuyingGames:r.buyingGames,started:this.started,currentText:this.currentText,dwarfTexts:this.dwarfTexts,games:this.games},null,8,["onGameEnded","onGameStarted","onBuyingGames","started","currentText","dwarfTexts","games"]),Object(a["f"])(o,{class:Object(a["g"])({opened:s.gameEnd}),gameEnd:s.gameEnd,onPopupClose:r.closePopup},{default:Object(a["o"])((function(){return[Object(a["e"])(Object(a["n"])(s.popupText),1)]})),_:1},8,["class","gameEnd","onPopupClose"])],64)}n("d3b7"),n("159b");var s=n("b3cc"),r=n.n(s),i=n("9d64"),o=n.n(i),u={class:"game"},d={class:"left-wall"},l=Object(a["d"])("img",{src:r.a,alt:"torch",class:"torch"},null,-1),f={class:"fire"},b={class:"game-container"},m=Object(a["d"])("img",{alt:"Chests logo",src:o.a,class:"game-logo"},null,-1),p=Object(a["d"])("div",{class:"game-container__tip"}," Для игры Вам необходимо купить попытки, а затем нажать кнопку “ИГРАТЬ” ",-1);function h(t,e,n,c,s,r){var i=Object(a["m"])("Particle"),o=Object(a["m"])("Gameboard"),h=Object(a["m"])("Dwarf"),O=Object(a["m"])("Sidebar");return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["d"])("div",u,[Object(a["d"])("div",d,[l,Object(a["d"])("div",f,[(Object(a["h"])(),Object(a["c"])(a["a"],null,Object(a["k"])(50,(function(t){return Object(a["f"])(i,{key:"item-"+t})})),64))])]),Object(a["d"])("div",b,[m,Object(a["f"])(o,{started:n.started,onFinishedGame:r.finishGame},null,8,["started","onFinishedGame"]),p]),Object(a["f"])(h,{started:this.started,myGames:this.games,currentText:this.currentText,onStartGame:r.startGame},null,8,["started","myGames","currentText","onStartGame"])]),Object(a["f"])(O,{games:this.games,onMyGames:r.buyingGames},null,8,["games","onMyGames"])],64)}n("a9e3");var O={class:"particle"};function j(t,e,n,c,s,r){return Object(a["h"])(),Object(a["c"])("div",O)}var g={name:"Particle",props:{}},v=(n("d9fc"),n("6b0d")),y=n.n(v);const _=y()(g,[["render",j],["__scopeId","data-v-14d1bc8e"]]);var G=_;function w(t,e,n,c,s,r){var i=Object(a["m"])("GameboardItem");return Object(a["h"])(),Object(a["c"])("div",{class:Object(a["g"])(["gameboard",{notStarted:!this.started}])},[(Object(a["h"])(),Object(a["c"])(a["a"],null,Object(a["k"])(9,(function(t){return Object(a["f"])(i,{key:"item-"+t,onClick:r.chestOpening},null,8,["onClick"])})),64))],2)}var T={class:"gameboard-item"},x={class:"chest",ref:"chest"};function P(t,e,n,c,s,r){return Object(a["h"])(),Object(a["c"])("div",T,[Object(a["d"])("div",x,null,512)])}var S={name:"GameboardItem"};n("e813");const B=y()(S,[["render",P],["__scopeId","data-v-73bc3ac4"]]);var k=B,E={name:"Gameboard",props:{started:Boolean},data:function(){return{counter:0}},components:{GameboardItem:k},methods:{chestSuccess:function(t){t.classList.add("success")},chestFailed:function(t){t.classList.add("failed")},popupToggle:function(t,e){this.$emit("finishedGame",t,e)},chestOpening:function(t){this.started&&(document.querySelectorAll(".gameboard-item").forEach((function(t){return t.classList.add("disabled")})),this.counter%2?(this.chestFailed(t.target),setTimeout(function(){this.popupToggle("Вы проиграли! Попробуйте ещё!",!1)}.bind(this),1300)):(this.chestSuccess(t.target),setTimeout(function(){this.popupToggle("Поздравляем! Вы выиграли!",!0)}.bind(this),1300)),this.counter++)}}};n("ab42");const C=y()(E,[["render",w]]);var L=C,$=n("9165"),I=n.n($),q=function(t){return Object(a["j"])("data-v-62b77fa1"),t=t(),Object(a["i"])(),t},M={class:"sidebar"},Q={class:"sidebar__panel"},D=q((function(){return Object(a["d"])("div",{class:"sidebar__header"},[Object(a["d"])("span",{class:"sidebar__shining"}),Object(a["d"])("img",{src:I.a,alt:"Chest Game"})],-1)})),A={class:"sidebar__tip"},F=q((function(){return Object(a["d"])("div",{class:"sidebar__title"}," Вам доступно ",-1)})),J={class:"sidebar__line"},Z=Object(a["e"])(" игр: "),N=q((function(){return Object(a["d"])("div",{class:"sidebar__title"}," Покупка: ",-1)})),z={class:"sidebar__line"},Y=Object(a["e"])(" игр: "),H={class:"qty"},K=q((function(){return Object(a["d"])("svg",{version:"1.2",baseProfile:"tiny-ps",xmlns:"http://www.w3.org/2000/svg",width:"11",height:"6"},[Object(a["d"])("path",{d:"m.98 5.68-.97-.85L5.5-.01l.97.85L.98 5.68Zm9.04 0L4.53.84l.97-.85 5.49 4.84-.97.85Z",style:{fill:"#fff"}})],-1)})),R=[K],U=q((function(){return Object(a["d"])("svg",{version:"1.2",baseProfile:"tiny-ps",xmlns:"http://www.w3.org/2000/svg",width:"11",height:"6",style:{transform:"scaleY(-1)"}},[Object(a["d"])("path",{d:"m.98 5.68-.97-.85L5.5-.01l.97.85L.98 5.68Zm9.04 0L4.53.84l.97-.85 5.49 4.84-.97.85Z",style:{fill:"#fff"}})],-1)})),V=[U],W={class:"sidebar__line"},X=Object(a["e"])(" Сумма: "),tt={class:"gold",ref:"totalPrice"},et=q((function(){return Object(a["d"])("span",null,"$",-1)})),nt=Object(a["e"])("купить");function at(t,e,n,c,s,r){var i=Object(a["m"])("myButton");return Object(a["h"])(),Object(a["c"])("div",M,[Object(a["d"])("div",Q,[D,Object(a["d"])("div",A," 1 игра = "+Object(a["n"])(s.price)+" $ ",1),F,Object(a["d"])("div",J,[Z,Object(a["d"])("div",{class:"gold myGames",ref:"myGames"},Object(a["n"])(this.games),513)]),N,Object(a["d"])("div",z,[Y,Object(a["d"])("span",{class:"gold",ref:"buyGames"},Object(a["n"])(s.buyGames),513),Object(a["d"])("div",H,[Object(a["d"])("div",{class:"qty__arrow qty__arrow--up",onClick:e[0]||(e[0]=function(){return r.addQty&&r.addQty.apply(r,arguments)})},R),Object(a["d"])("div",{class:Object(a["g"])(["qty__arrow qty__arrow--down",{disabled:!s.buyGames}]),onClick:e[1]||(e[1]=function(){return r.removeQty&&r.removeQty.apply(r,arguments)})},V,2)])]),Object(a["d"])("div",W,[X,Object(a["d"])("div",tt,[Object(a["e"])(Object(a["n"])(s.totalPrice),1),et],512)]),Object(a["f"])(i,{onClick:r.buy},{default:Object(a["o"])((function(){return[nt]})),_:1},8,["onClick"])])])}var ct={class:"button"},st=Object(a["e"])("Button");function rt(t,e,n,c,s,r){return Object(a["h"])(),Object(a["c"])("button",ct,[Object(a["l"])(t.$slots,"default",{},(function(){return[st]}),!0)])}var it={name:"myButton",props:{}};n("fc84");const ot=y()(it,[["render",rt],["__scopeId","data-v-2ca61094"]]);var ut=ot,dt={name:"Sidebar",props:{games:Number},data:function(){return{buyGames:0,totalPrice:0,price:5}},components:{myButton:ut},methods:{updateTotalPrice:function(){this.totalPrice=5*this.buyGames},addQty:function(){this.buyGames++,this.updateTotalPrice()},removeQty:function(){this.buyGames>0&&(this.buyGames--,this.updateTotalPrice())},clearBuying:function(){this.totalPrice=0,this.buyGames=0},buy:function(){var t=this.games;t+=this.buyGames,this.$emit("myGames",t),this.clearBuying()}}};n("68eb");const lt=y()(dt,[["render",at],["__scopeId","data-v-62b77fa1"]]);var ft=lt,bt=n("222d"),mt=n.n(bt),pt=function(t){return Object(a["j"])("data-v-030ec864"),t=t(),Object(a["i"])(),t},ht={class:"dwarf",ref:"dwarf"},Ot=pt((function(){return Object(a["d"])("img",{class:"dwarf__image",src:mt.a,alt:"dwarf"},null,-1)})),jt=pt((function(){return Object(a["d"])("div",{class:"dwarf__face"},null,-1)})),gt=pt((function(){return Object(a["d"])("div",{class:"dwarf__axe"},null,-1)})),vt=pt((function(){return Object(a["d"])("div",{class:"dwarf__shoulder"},null,-1)})),yt=pt((function(){return Object(a["d"])("div",{class:"dwarf__hand"},null,-1)})),_t={class:"dwarf__talks"},Gt=Object(a["e"])("Играть");function wt(t,e,n,c,s,r){var i=Object(a["m"])("myButton");return Object(a["h"])(),Object(a["c"])("div",ht,[Ot,jt,gt,vt,yt,Object(a["d"])("div",_t,Object(a["n"])(n.currentText),1),Object(a["f"])(i,{class:Object(a["g"])({disabled:!n.myGames||n.started}),onClick:r.startGame},{default:Object(a["o"])((function(){return[Gt]})),_:1},8,["class","onClick"])],512)}var Tt={name:"Dwarf",props:{started:Boolean,myGames:Number,currentText:String},data:function(){return{playing:this.started,playingProcess:!1}},components:{myButton:ut},mounted:function(){this.animateDwarf()},methods:{animateDwarf:function(){var t=this;this.$refs.dwarf.classList.add("animated"),setInterval((function(){t.$refs.dwarf.classList.remove("animated"),setTimeout((function(){return t.$refs.dwarf.classList.add("animated")}),1e3)}),7e3)},startGame:function(){var t=this.myGames;t-=1,this.playing=!0,this.playingProcess=!0,this.$emit("startGame",this.playing,t)}}};n("d078");const xt=y()(Tt,[["render",wt],["__scopeId","data-v-030ec864"]]);var Pt=xt,St={name:"Game",props:{started:Boolean,dwarfTexts:Object,games:Number,currentText:String},emits:["gameStarted","buyingGames","gameEnded"],data:function(){return{}},components:{Particle:G,Gameboard:L,Sidebar:ft,Dwarf:Pt},methods:{startGame:function(t,e){this.$emit("gameStarted",t,e)},buyingGames:function(t){this.$emit("buyingGames",t)},finishGame:function(t,e){this.$emit("gameEnded",t,e)}}};n("bd06");const Bt=y()(St,[["render",h]]);var kt=Bt,Et={class:"popup"},Ct={class:"popup__content"},Lt={class:"popup__text"},$t=Object(a["e"])("Поздравляем! Вы выиграли"),It=Object(a["e"])("вернуться");function qt(t,e,n,c,s,r){var i=Object(a["m"])("myButton");return Object(a["h"])(),Object(a["c"])("div",Et,[Object(a["d"])("div",Ct,[Object(a["d"])("div",Lt,[Object(a["l"])(t.$slots,"default",{},(function(){return[$t]}),!0)]),Object(a["f"])(i,{onClick:e[0]||(e[0]=function(t){return r.popupToggle(!1)})},{default:Object(a["o"])((function(){return[It]})),_:1})])])}var Mt={name:"Popup",props:{gameEnd:Boolean},components:{myButton:ut},methods:{popupToggle:function(){this.$emit("popupClose",!1)}}};n("07e3");const Qt=y()(Mt,[["render",qt],["__scopeId","data-v-7dac966b"]]);var Dt=Qt,At={name:"App",components:{Game:kt,Popup:Dt},data:function(){return{gameEnd:!1,popupText:"",games:0,started:!1,dwarfTexts:{default:"Вскрывай сундуки из моей сокровищницы! Ищи несметные богатства!",buyMore:"Покупай больше попыток! Сегодня тебе повезёт!",zeroGames:"Я уверен, следующий сундук будет полон золота! Попробуй ещё!",selectToBuy:" Сначала заплати за игру!  Меня не проведёшь!",goodJob:"Ты всё делаешь правильно! Выбирай сундук и испытай удачу!"},currentText:""}},methods:{finishGame:function(t){this.gameEnd=!0,this.popupText=t},startGame:function(t,e){this.started=t,this.games=e,this.currentText=this.dwarfTexts.goodJob},buyingGames:function(t){this.games=t,this.currentText=t>0?this.dwarfTexts.buyMore:this.dwarfTexts.selectToBuy},closePopup:function(t){this.gameEnd=t,document.querySelectorAll(".success, .failed").forEach((function(t){return t.classList.remove("success","failed")})),document.querySelectorAll(".gameboard-item").forEach((function(t){return t.classList.remove("disabled")})),this.started=!1,0===this.games&&(this.currentText=this.dwarfTexts.zeroGames)}},mounted:function(){this.currentText=this.dwarfTexts.default}};n("2416");const Ft=y()(At,[["render",c]]);var Jt=Ft;Object(a["b"])(Jt).mount("#app")},"5ba4":function(t,e,n){},"68eb":function(t,e,n){"use strict";n("3221")},7785:function(t,e,n){},"852d":function(t,e,n){},"8f9a":function(t,e,n){},9165:function(t,e,n){t.exports=n.p+"img/test.e70b0c9b.png"},"9d64":function(t,e,n){t.exports=n.p+"img/logo.a6f2cd47.png"},ab42:function(t,e,n){"use strict";n("7785")},b3cc:function(t,e,n){t.exports=n.p+"img/torch.cb3a6726.png"},bd06:function(t,e,n){"use strict";n("8f9a")},d078:function(t,e,n){"use strict";n("1f20")},d9fc:function(t,e,n){"use strict";n("5ba4")},e813:function(t,e,n){"use strict";n("edff")},edff:function(t,e,n){},fc84:function(t,e,n){"use strict";n("0ff0")}});
//# sourceMappingURL=app.01585ea5.js.map