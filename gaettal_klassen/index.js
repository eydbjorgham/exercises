"use strict";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

const computerNum = Math.floor(Math.random() * 100) + 1;
console.log("computerNum", computerNum);

btn.addEventListener("click", klik_btn);
function klik_btn() {
  const brugerGuess = parseInt(input.value);
  console.log(typeof brugerGuess);
  console.log("brugerGuess", brugerGuess);
  let feedbackText;
  if (brugerGuess === computerNum) {
    feedbackText = "Det var for lavt :-( Prøv igen";
  } else if (brugerGuess > computerNum) {
    feedbackText = "Det var for højt :-( Prøv igen";
  } else {
    feedbackText = "Juhu du har gættet rigtigt :-)";
  }

  h2.textContent = feedbackText; //Fær tekstin frá js kotuni á HTML H2-taggið
  console.log(feedbackText);
}

//Í hesari kotuni konvertera vit við === og fáa ein feil,
// um vit ikki høvdu skrivað parseInt,
// tí === tjekkar líkheit og um typirnar eru tað sama og tað eru tær ikki her, her er tekstur og tal
