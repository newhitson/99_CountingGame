## 99_CountingGame

### Background



99 is a nearly lost card game my dad's godmother learned from gypsies is Norway. It has been
a family road trip favorite for ever since I was a child. I want to preserve and immortalize this game, for which I have found no other computer games made. It uses a standard Anglo-American playing card deck .  The game is played  as follows:

1) players are dealt a hand of 3 cards
2) They take turns playing a card, adding the total value of the card to a running total count and drawing a new card
3) You lose if you cannot play a card that would make the total less than 100
4) there are 4 magic cards
  -[ ] 4: value is 0 and play order is reversed
  -[ ] 9: value is 0, AKA PASS
  -[ ] 10: subtracts 10 from the Count
  -[ ] J: Sets the count to 99  

There are some variations on the way 99 is played.  But this is how my family plays so it is the one true way to play the game.  

### Functionality & MVP  

The game of 99 will require :

- [ ] Card, HumanPlayer, ComputerPlayer, Game, and View classes
- [ ] A human player who can pick a card in there hand to play and receive new cards from the deck
- [ ] Artificial Intelligence (bent on defeating human)

In addition, this project will include:

- [ ] A production Readme

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn,
and the About modal.  Game controls will include Start, Stop, and Reset buttons as well as a slider to control the speed.  On the left, three clickable shapes will be used to toggle between the types of grids available.  On the right, there will be three (or more) clickable gradient-filled rectangles used to toggle between color schemes (see Bonus Features).  Additionally, a drop-down will be added to the Controls to toggle between different rule sets (again, see Bonus Features).

![wireframes](images/js_wireframe.jpeg)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`view.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.

`game.js`: this script will handle the logic behind the scenes.


### Implementation Timeline

**Day 1**: write the bluk of underlining logic and set up enviroment

  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Write the basic game logic
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Finish up the underlining game logic and  Learn to use Easel

Dedicate this day to learning the `Easel.js` API.  Card object to connect to the `game` object.  Then, use `board.js` to create and render at least the hand .  Build in the ability to toggle the face up/ facedown states o  Goals for the day:

- Render a square grid to the `Canvas` using `Easel.js`
- Render sweet background with players
- get cards to render on the screen
- some basic animation with cards moving around

**Day 3**: Get to UI elements to a working level and install the user controls

- Play a card
- give up buttons
- background players
- Instructions



**Day 4**: Style the frontend, making it polished and professional.

- Have a styled `Canvas`, nice looking controls and title
- Smooth out the animation on the cards, add visual effects to the robot players


### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Fire works if you win/ slime if you loose?
- [ ] Glowy effects on magic cards
- [ ] Computer players who express displeasure when losing
- [ ] Computer players who gloats when they win   
- [ ] Cards that cant be played get greyed out
- [ ] Different computer players (difficulty/personality)
- [ ] Different backgrounds
- [ ] New (not regulation) magic cards
- [ ] A model with game rules
