/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 627;
  canvasEl.height = 940;

  var ctx = canvasEl.getContext("2d");
  var game = new Game();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function () {
  function Card(suit, value) {
    _classCallCheck(this, Card);

    this.suit = suit;
    this.value = value;
    this.name = this.value + " of " + this.suit;
  }

  _createClass(Card, [{
    key: 'listItem',
    value: function listItem() {
      var el = document.createElement('li');
      el.innerText = this.name;
      return el;
    }
  }, {
    key: 'gameValue',
    value: function gameValue() {
      var gameValues = { 'A': 1, '2': 2, '3': 3, '4': 0, '5': 5, '6': 6, '7': 7, '8': 8, '9': 0,
        '10': -10, 'J': 0, 'Q': 10, 'K': 10 };
      return gameValues[this.value];
    }
  }]);

  return Card;
}();

var Deck = function () {
  function Deck() {
    _classCallCheck(this, Deck);

    this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.suits = ['Heart', 'Diamond', 'Spade', 'Club'];
    this.cards = [];

    for (var s = 0; s < this.suits.length; s++) {
      for (var v = 0; v < this.values.length; v++) {
        this.cards.push(new Card(this.suits[s], this.values[v]));
      }
    }
    this.cards = this.shuffle(this.cards);
  }

  _createClass(Deck, [{
    key: 'shuffle',
    value: function shuffle(a) {
      for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        var _ref = [a[j], a[i - 1]];
        a[i - 1] = _ref[0];
        a[j] = _ref[1];
      }
      return a;
    }
  }, {
    key: 'take',
    value: function take(n) {
      var taken = [];
      for (var i = 0; i < n; i++) {
        taken.push(this.cards.shift());
      }
      return taken;
      //returns cards in a array
    }
  }]);

  return Deck;
}();

var HumanPlayer = function () {
  function HumanPlayer(startinghand) {
    _classCallCheck(this, HumanPlayer);

    this.hand = startinghand;
  }

  _createClass(HumanPlayer, [{
    key: 'takeTurn',
    value: function takeTurn(count) {}
  }]);

  return HumanPlayer;
}();

var ComputerPlayer = function () {
  function ComputerPlayer(startinghand) {
    _classCallCheck(this, ComputerPlayer);

    this.hand = startinghand;
  }

  _createClass(ComputerPlayer, [{
    key: 'takeTurn',
    value: function takeTurn(count) {
      console.log(count);
      debugger;
      for (var i = 0; i < this.hand.length; i++) {
        if (~~this.hand[i].gameValue() + count < 100) {
          var play = this.hand.splice(i, 1);
          return play[0];
        }
      }
      return "bust";
    }
  }]);

  return ComputerPlayer;
}();

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.deck = new Deck();
    this.count = 0;
    // this.humanPlayer = new HumanPlayer(this.deck.take(3));
    this.computer1 = new ComputerPlayer(this.deck.take(3));
    this.computer2 = new ComputerPlayer(this.deck.take(3));
    this.human = new HumanPlayer(this.deck.take(3));
    this.turnorder = [this.computer1, this.human, this.computer2];
    // this.humanPlayer,
  }

  _createClass(Game, [{
    key: 'startGame',
    value: function startGame() {
      while (this.turnorder.length > 1) {
        var currentPlayer = this.turnorder.pop();
        var play = currentPlayer.takeTurn(this.count);
        if (play === "bust") {
          console.log("busted");
        } else {
          switch (play.value) {
            case '4':
              console.log();
              this.turnorder.reverse();
              break;
            case 'J':
              console.log("jack");
              this.count = 99;
              break;
            default:
          }
          this.count = this.count + play.gameValue();
          currentPlayer.hand.push(this.deck.take(1)[0]);
          this.turnorder.unshift(currentPlayer);
        }
      }
    }
  }]);

  return Game;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map