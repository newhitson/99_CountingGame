

class Card {
  constructor(suit,value) {
    this.suit = suit;
    this.value = value;
    this.name = this.value + " of " + this.suit
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
     this.suits = ['Heart','Diamond','Spade','Club'];
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

   takeTurn(count){

   };
 }

 class ComputerPlayer{
   constructor(startinghand){
     this.hand = startinghand
   }

   takeTurn(count){
     console.log(count);
     debugger;
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
  constructor(){
    this.deck = new Deck;
    this.count = 0;
    // this.humanPlayer = new HumanPlayer(this.deck.take(3));
    this.computer1 = new ComputerPlayer(this.deck.take(3));
    this.computer2 = new ComputerPlayer(this.deck.take(3));
    this.human = new HumanPlayer(this.deck.take(3));
    this.turnorder = [this.computer1,this.human, this.computer2 ];
    // this.humanPlayer,
  }

  startGame(){
    while(this.turnorder.length > 1){
      let currentPlayer = this.turnorder.pop()
      let play = currentPlayer.takeTurn(this.count)
      if (play === "bust") { console.log("busted");} else {
        switch (play.value) {
          case '4':
          console.log();
            this.turnorder.reverse();
            break;
          case 'J':
            console.log("jack");
            this.count = 99
            break;
          default:
        }
        this.count = this.count + play.gameValue()
        currentPlayer.hand.push(this.deck.take(1)[0])
        this.turnorder.unshift(currentPlayer)
      }
    }
  }

}
