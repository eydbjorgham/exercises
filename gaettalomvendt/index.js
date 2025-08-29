"use strict";

const btnStart = document.querySelector(".buttonStart");
const btnHigh = document.querySelector(".buttonHigh");
const btnLow = document.querySelector(".buttonLow");
const btnWin = document.querySelector(".buttonWin");
btnHigh.addEventListener("click", guessHigh);
btnLow.addEventListener("click", guessLow);
btnWin.addEventListener("click", guessWin);
const h2 = document.querySelector("h2");

let computerChoice;

let min = 0;
let max = 100;

btnStart.addEventListener("click", startSpillet);
function startSpillet() {
  computerChoice = Math.floor((min + max) / 2);
  h2.textContent = computerChoice;
}

function guessHigh() {
  max = computerChoice;
  //h2.textContent = computerChoice;
  startSpillet();
}

function guessLow() {
  min = computerChoice;
  //h2.textContent = computerChoice;
  startSpillet();
}

function guessWin() {
  h2.textContent = "You won kind sir";
  min = 0;
  max = 100;
  resetGame();
}

function resetGame() {
  computerChoice = 0;
}
