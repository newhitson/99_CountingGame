class ComputerPlayer{
  constructor(startinghand){
    this.hand = startinghand
  }

  takeTurn(count){
    for (var i = 0; i < this.hand.length; i++) {
      if( ~~this.hand[i].gameValue() + count < 100 ) {
        let play = this.hand.splice(i,1)
        return play[0]
      }
    }
    return "bust"
  };
}
module.exports = ComputerPlayer;
