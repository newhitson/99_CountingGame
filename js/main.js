const Game = require("./game");


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 627;
  canvasEl.height = 940;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
});
