class ComputerPlayer{
  constructor(startinghand, location){
    this.hand = startinghand
    this.location = location
  }

  takeTurn(count){
    for (var i = 0; i < this.hand.length; i++) {
      if( ~~this.hand[i].gameValue() + count < 100 ) {
        let play = this.hand.splice(i,1)
        console.log(play[0]);
        return play[0]
      }
    }
    return "bust"
  };
  receiveCard(card){
    this.hand.push(card[0])
  };


}
module.exports = ComputerPlayer;
