## 99_CountingGame

### Background



99 is a nearly lost card game my dad's godmother learned from gypsies is Norway. It has been
a family road trip favorite for ever since I was a child.  I chose to make this game because I want to preserve and immortalize this game, for which I have found no other computer games made. It uses a standard Anglo-American playing card deck .  The game is played  as follows:

1) players are dealt a hand of 3 cards
2) They take turns playing a card, adding the total value of the card to a running total count and drawing a new card
3) You lose if you cannot play a card that would make the total greater than 99
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

**NB**: one of the main things you should be researching and deciding upon while you write this proposal is what technologies you plan to use.  Identify and create a plan of attack for the major technical challenges in your project.  It's okay if you don't have all the details of implementation fleshed out, but you should have a solid roadmap by Monday morning.

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.

`automata.js`: this script will handle the logic behind the scenes.  An Automata object will hold a `type` (hexagon, triangle, or square) and a 2D array of `Cell`s.  It will be responsible for doing neighbor checks for each `Cell` upon iteration and updating the `Cell` array appropriately.

`cell.js`: this lightweight script will house the constructor and update functions for the `Cell` objects.  Each `Cell` will contain a `type` (hexagon, triangle, or square) and an `aliveState` (`true` or `false`).

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Easel.js` API.  First, build out the `Cell` object to connect to the `Board` object.  Then, use `board.js` to create and render at least the square grid, ideally all 3 grid types.  Build in the ability to toggle the live/dead states on click for each cell.  Goals for the day:

- Complete the `cell.js` module (constructor, update functions)
- Render a square grid to the `Canvas` using `Easel.js`
- Make each cell in the grid clickable, toggling the state of the square on click
- Do the same for triangular and hexagonal grids

**Day 3**: Create the automata logic backend.  Build out modular functions for handling the different grid types along with their unique neighbor checks and rule sets.  Incorporate the automata logic into the `Board.js` rendering.  Goals for the day:

- Export an `Automata` object with correct type and handling logic
- Have a functional grid on the `Canvas` frontend that correctly handles iterations from one generation of the game to the next


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset, and shape type
- Have a styled `Canvas`, nice looking controls and title
- If time: include buttons on the side to toggle the color scheme of the cells


### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Glowy effects on magic cards
- [ ] Computer players who express displeasure when losing
- [ ] Computer players who gloat when they win   
- [ ] Different computer players (difficulty/personality)
- [ ] Different backgrounds
- [ ] New (not regulation) magic cards
- [ ] A model with game rules
