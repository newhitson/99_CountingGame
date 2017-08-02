

class Card {
  constructor(suit,value) {
    this.suit = suit;
    this.value = value;
    this.name = this.value + this.suit
  }
  listItem(){
    var el = document.createElement('li')
    el.innerText = this.name
    return el
  }
  gameValue(){
    const gameValues = {'A':1,'2':2,'3':3,'4':0,'5':5,'6':6,'7':7,'8':8,'9':0,
                        '10':-10,'J':0,'Q':10,'K':10}
    return gameValues[this.value]
  }

}


 class Deck {
   constructor(){
     this.values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
     this.suits = ['H','D','S','C'];
     this.cards = [];

     for (var s = 0; s < this.suits.length; s++) {
       for (var v = 0; v < this.values.length; v++) {
         this.cards.push( new Card( this.suits[s], this.values[v] ))
       }
     }
     this.cards = this.shuffle(this.cards);
  };

  shuffle(a) {
   for (let i = a.length; i; i--) {
       let j = Math.floor(Math.random() * i);
       [a[i - 1], a[j]] = [a[j], a[i - 1]];
   }
   return a;
 }

  take(n){
   let taken = [];
   for (var i = 0; i < n; i++) {
     taken.push(this.cards.shift());
   }
   return taken;
   //returns cards in a array
  }
 }

 class HumanPlayer{
   constructor(startinghand){
     this.hand = startinghand;
   }

   playCard(pos, newcard){
     let playedCard = this.hand.splice(pos,1, newcard[0])
     return playedCard
   };
 }

 class ComputerPlayer{
   constructor(startinghand){
     this.hand = startinghand
   }

   takeTurn(count){
     console.log(count);
     for (var i = 0; i < this.hand.length; i++) {
       if( ~~this.hand[i].gameValue() + count < 100 ) {
         let play = this.hand.splice(i,1)
         return play[0]
       }
     }
     return "bust"
   };
 }


class Game{
  constructor(ctx, canvasEl){
    this.deck = new Deck;
    this.count = 0;
    // this.humanPlayer = new HumanPlayer(this.deck.take(3));
    this.computer1 = new ComputerPlayer(this.deck.take(3));
    this.computer2 = new ComputerPlayer(this.deck.take(3));
    this.human = new HumanPlayer(this.deck.take(3));
    this.turnorder = [this.computer1, this.computer2 ];
    this.ctx = ctx;
    this.canvasEl = canvasEl;
    this.canvasEl.addEventListener("click", evt => this.showCoords(evt));
    // this.renderHand = this.renderHand.bind(this)
    // this.humanPlayer,
  }

  showCoords(event){
    var x = event.clientX;
    var y = event.clientY;

    if( (x>137 && y>530) && (x<232 && y<629) ){
      let playedCard = this.human.playCard(0,this.deck.take(1))
      console.log(playedCard);
      ;
    }
    if( (x>240 && y>530) && (x<336 && y<629) ){
      alert("card2 was clicked!");}
    if( (x>339 && y>530) && (x<437 && y<629) ){
      alert("card3 was clicked!");}

  }


  // startGame(){
  //   while(this.turnorder.length > 1){
  //     let currentPlayer = this.turnorder.pop()
  //     let play = currentPlayer.takeTurn(this.count)
  //     if (play === "bust") { console.log("busted");} else {
  //       switch (play.value) {
  //         case '4':
  //         console.log();
  //           this.turnorder.reverse();
  //           break;
  //         case 'J':
  //           console.log("jack");
  //           this.count = 99
  //           break;
  //         default:
  //       }
  //       this.count = this.count + play.gameValue()
  //       currentPlayer.hand.push(this.deck.take(1)[0])
  //       this.turnorder.unshift(currentPlayer)
  //       this.ctx.font = '48px serif';
  //       this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       this.ctx.fillText(`${this.count}`, 470, 100);
  //       this.renderHand();
  //     }
  //   }
  // }

  startGame(){
    this.renderHand(this.human.hand);
    console.log(this.human.hand);
  }




  renderHand(hand){
    console.log(hand.length);
      let cardimg = new Image();
      cardimg.src = `./PNG/${hand[0].name}.png`
      cardimg.onload = function(){
        this.ctx.drawImage(cardimg, 120 , 520 , cardimg.width * 0.15, cardimg.height * 0.15);
      }.bind(this);

      let cardimg2 = new Image();
      cardimg2.src = `./PNG/${hand[1].name}.png`
      cardimg2.onload = function(){
        this.ctx.drawImage(cardimg2, 222 , 520 , cardimg2.width * 0.15, cardimg2.height * 0.15);
      }.bind(this);

      let cardimg3 = new Image();
      cardimg3.src = `./PNG/${hand[2].name}.png`
      cardimg3.onload = function(){
        this.ctx.drawImage(cardimg3, 324 , 520 , cardimg3.width * 0.15, cardimg3.height * 0.15);
      }.bind(this);


    // let cardimg = new Image();
    // cardimg.src = './png/base.png'
    // cardimg.onload = function(){
    //   this.ctx.drawImage(cardimg, 0, 0);
    //
    // }.bind(this);

  }

}
module.exports = Game;
