class HumanPlayer{
  constructor(startinghand){
    this.hand = startinghand;
    this.score = 0;
  }

  playCard(pos, newcard){
    let playedCard = this.hand.splice(pos,1, newcard[0])
    return playedCard[0]
  };
}



module.exports = HumanPlayer;
