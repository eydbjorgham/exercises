"use strict";
let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

addEventlistenersToButtons();
function addEventlistenersToButtons() {
  rockBtn.addEventListener("click", rockClick);
  paperBtn.addEventListener("click", paperClick);
  scissorsBtn.addEventListener("click", scissorsClick);
}

function rockClick() {
  //   console.log("ROCK");
  reset();
  userChoice = "rock";
  computerGuess();
}
function paperClick() {
  //   console.log("PAPER");
  reset();
  userChoice = "paper";
  computerGuess();
}
function scissorsClick() {
  //   console.log("SCISSORS");
  reset();
  userChoice = "scissors";
  computerGuess();
}

function computerGuess() {
  const choice_arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choice_arr[randomNum]; // Hetta er endin av kotuni fyri at fáa ein tilfeldigan stein, saks og pappír. Av tí at vit brúktu array so kota vit tað uppa hendan mátan.
  console.log("computerChoice", computerChoice);
  //   console.log(userChoice);
  //   computerChoice = "paper";
  animationStarter();
}

function animationStarter() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", animationEnd);
  player2.addEventListener("animationend", animationEnd);
}

function animationEnd() {
  // Evaluation + fjerne classer (animation end eventlistener)
  //Afgørelse af resultat
  player1.classList.remove("shake");
  player1.classList.add(userChoice);

  player2.classList.remove("shake");
  player2.classList.add(computerChoice);

  player1.addEventListener("animationend", showResultScreen);
  player2.addEventListener("animationend", showResultScreen);

  //En anden mindre skrøbelig kode fra underviseren, fordi den første løsning er betinget af CSS, og um man arbeiður fleiri saman so kunnu fólk fara inn og broyta navn á 'class' eller CSS
  //if (userChoice==="rock") {
  //  player1.classList.add("rock")
  //} else if (userChoice==="paper"){
  //  player1.classList.add("paper")
  //  } else {
  //    player1.classList.add("scissors")}

  //if (computerChoice==="rock") {
  //  player2.classList.add("rock")
  //} else if (computerChoice==="paper") {
  //  player2.classList.add("paper")
  //} else (computerChoice==="scissors") {
  //  player2.classList.add("scissors")
  //}
}

function showResultScreen() {
  // If else skal standa her, og hetta er mín fyrsta loysn
  if (userChoice === computerChoice) {
    draw.classList.remove("hidden");
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")) {
    win.classList.remove("hidden");
  } else {
    lose.classList.remove("hidden");
  }
}

function reset() {
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");
}
