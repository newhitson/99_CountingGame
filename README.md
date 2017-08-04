## Ninety Nine

[live](https://newhitson.github.io./)

#### About
Ninety Nine is a nearly lost card game my dad's godmother learned from gypsies is Norway. I want to preserve and immortalize this game, for which I have found no other computer games made. I build this game with vanilla JavaScript and some help from my friends Webpack, HTML5 and CSS3.

-note if you have any relation to this game pease contact me I want to hear about your experience.

#### Instructions
Ninety Nine is a turn based card game that you play with 2 other computer players

1) players are dealt a hand of 3 cards
2) They take turns playing a card, adding the total value of the card to a running total count and drawing a new card
3) They lose if you cannot play a card that would make the total more that Ninety Nine.
4) there are 4 magic cards
  -[ ] 4: Play order is reversed
  -[ ] 9: PASS
  -[ ] 10: subtracts 10 from the Count
  -[ ] J: Sets the count to 99  


#### Taking Turns in an asynchronous Environment
I learned that putting turn logic inside a while loop wouldn't work as well JavaScript as did in Ruby games.  I'm proud of this control flow logic that lets a computer take its turn slow enough for a human to see whats happening but when its a human players turn it waits for a click event.

  ```Javascript
  takeTurn(player){
    this.turnorder.shift();
    if (player !== this.human ) {
      setTimeout(function(){ this.computerPlayerTurn(player); }.bind(this), 1000); } else {
        this.canvasEl.addEventListener("click",this.clickOnCard);
      }
    }


  ```


#### Architecture and Technologies
- Vanilla Javascript for game logic
- HTML5 Canvas for rendering and graphics
- Webpack to bundle and serve scripts
- CSS3 for formatting and style points


#### Future Features

- [ ] Fire works if you win/ slime if you loose?
- [ ] Glowy effects on magic cards
- [ ] Make it clearer with who's turn it is
- [ ] Computer players express displeasure when losing
- [ ] Computer players gloats when they win   
- [ ] Different computer players (difficulty/personality)
- [ ] Different backgrounds
- [ ] New (not regulation) magic cards
- [ ] A model with game rules
