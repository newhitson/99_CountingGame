const Card = require("./card");
const Deck = require("./deck");
const HumanPlayer = require("./human_player");
const ComputerPlayer = require("./computer_player")



class Game{
  constructor(ctx, canvasEl){
    this.deck = new Deck;
    this.count = 0;
    // this.humanPlayer = new HumanPlayer(this.deck.take(3));
    this.computer1 = new ComputerPlayer(this.deck.take(3));
    this.computer2 = new ComputerPlayer(this.deck.take(3));
    this.human = new HumanPlayer(this.deck.take(3));
    this.turnorder = [this.human, this.computer1, this.computer2 ];
    this.ctx = ctx;
    this.canvasEl = canvasEl;
    this.canvasEl.addEventListener("click", evt => this.clickOnCard(evt));
    // this.renderHand = this.renderHand.bind(this)
    // this.humanPlayer,
  }

  startGame(){
    this.renderHand(this.human.hand);
    this.takeTurn(this.turnorder[0])
  }


  takeTurn(player){
    this.turnorder.shift();
    if (player !== this.human )
      setTimeout(function(){ this.computerPlayerTurn(player); }.bind(this), 1000);
    }


  computerPlayerTurn(player){

    let playedCard = player.takeTurn(this.count);
    this.addToCount(playedCard);
    player.receiveCard(this.deck.take(1));
    this.turnorder.push(player)
    this.takeTurn(this.turnorder[0])
  }

  addToCount(card){
    console.log(card.value);
    let value;

    if (card.value === 'J') {
       value = 99 - this.count;
    } else {
       value = card.gameValue();
    }

    this.count = this.count + value
    this.ctx.font = '48px serif';
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.fillText(`${this.count}`, 470, 100);
    this.renderHand(this.human.hand)
  }


  renderHand(hand){
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
  }


  clickOnCard(event){
    var x = event.clientX;
    var y = event.clientY;

    if( (x>137 && y>530) && (x<232 && y<629) ){
      let playedCard = this.human.playCard(0,this.deck.take(1))
      this.addToCount(playedCard);
      this.renderHand(this.human.hand);
      this.turnorder.push(this.human);
      this.takeTurn(this.turnorder[0]);
    }
    if( (x>240 && y>530) && (x<336 && y<629) ){
      let playedCard = this.human.playCard(1,this.deck.take(1))
      this.addToCount(playedCard);
      this.renderHand(this.human.hand);
      this.turnorder.push(this.human);
      this.takeTurn(this.turnorder[0]);
      }
    if( (x>339 && y>530) && (x<437 && y<629) ){
      let playedCard = this.human.playCard(2,this.deck.take(1))
      this.addToCount(playedCard);
      this.renderHand(this.human.hand);
      this.turnorder.push(this.human);
      this.takeTurn(this.turnorder[0]);
      }

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


}
module.exports = Game;
