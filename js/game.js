const Card = require("./card");
const Deck = require("./deck");
const HumanPlayer = require("./human_player");
const ComputerPlayer = require("./computer_player")



class Game{
  constructor(ctx, canvasEl){
    this.deck = new Deck;
    this.count = 0;
    this.computer1 = new ComputerPlayer(this.deck.take(3), [150, 220]);
    this.computer2 = new ComputerPlayer(this.deck.take(3),[680, 220]);
    this.human = new HumanPlayer(this.deck.take(3));
    this.turnorder = [this.human, this.computer1, this.computer2 ];
    this.ctx = ctx;
    this.canvasEl = canvasEl;
    this.canvasEl.addEventListener("click", evt => this.clickOnCard(evt));
  }

  startGame(){
    this.renderGame();
    this.takeTurn(this.turnorder[0])
  }

  takeTurn(player){
    this.isGameOver();
    this.turnorder.shift();
    if (player !== this.human ) {
      setTimeout(function(){ this.computerPlayerTurn(player); }.bind(this), 1000); } else {
      }
    }

  isGameOver(){
    if (this.count > 99){
      this.ctx.font = '64px serif';
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.ctx.fillText(`You Lose`, 470, 100);
    }
  }

  computerPlayerTurn(player){
    let playedCard = player.takeTurn(this.count);
    if (playedCard !== "bust") {
      this.addToCount(playedCard);
      player.receiveCard(this.deck.take(1));
      this.turnorder.push(player)
      this.renderGame();
      this.takeTurn(this.turnorder[0])
    } else {
      player.receiveCard(this.deck.take(1));
      this.renderGame();
      this.takeTurn(this.turnorder[0])
    }
  }


  addToCount(card){
    console.log(card.value);
    let value;
    if (card.value === 'J') {
       value = 99 - this.count;
    } else {
       value = card.gameValue();
    }
    this.count = this.count + value;
  }

  renderGame(){
    this.renderCount();
    this.renderHand();
    this.renderPlayers();
  }


    renderPlayers(){
      this.turnorder.forEach((player) => {
        if (player !== this.human){
          let cardimg = new Image();
          cardimg.src = `./PNG/hand.png`
          cardimg.onload = function(){
            this.ctx.drawImage(cardimg,
                                player.location[0]
                                ,player.location[1]
                                ,cardimg.width * 0.15,
                                cardimg.height * 0.15);
          }.bind(this)
        }
      });
    }


  renderCount(){
    this.ctx.font = '48px serif';
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.fillText(`${this.count}`, 470, 100);
  }


  renderHand(){
      let cardimg = new Image();
      cardimg.src = `./PNG/${this.human.hand[0].name}.png`
      cardimg.onload = function(){
      this.ctx.drawImage(cardimg, 120 , 520 , cardimg.width * 0.15, cardimg.height * 0.15);
      }.bind(this);

      let cardimg2 = new Image();
      cardimg2.src = `./PNG/${this.human.hand[1].name}.png`
      cardimg2.onload = function(){
      this.ctx.drawImage(cardimg2, 222 , 520 , cardimg2.width * 0.15, cardimg2.height * 0.15);
      }.bind(this);

      let cardimg3 = new Image();
      cardimg3.src = `./PNG/${this.human.hand[2].name}.png`
      cardimg3.onload = function(){
      this.ctx.drawImage(cardimg3, 324 , 520 , cardimg3.width * 0.15, cardimg3.height * 0.15);
      }.bind(this);
  }


  clickOnCard(event){
    var x = event.clientX;
    var y = event.clientY;

    if( (x>137 && y>530) && (x<232 && y<629) ){
      let playedCard = this.human.playCard(0,this.deck.take(1))
      // this.canvasEl.removeEventListener("click", evt => this.clickOnCard(evt));
      this.addToCount(playedCard);
      this.renderGame();
      this.turnorder.push(this.human);
      this.takeTurn(this.turnorder[0]);
    }
    if( (x>240 && y>530) && (x<336 && y<629) ){
      let playedCard = this.human.playCard(1,this.deck.take(1))
      this.addToCount(playedCard);
      this.renderGame();
      this.turnorder.push(this.human);
      this.takeTurn(this.turnorder[0]);
      }
    if( (x>339 && y>530) && (x<437 && y<629) ){
      let playedCard = this.human.playCard(2,this.deck.take(1))
      this.addToCount(playedCard);
      this.renderGame();
      this.turnorder.push(this.human);
      this.takeTurn(this.turnorder[0]);
      }
  }



}
module.exports = Game;
