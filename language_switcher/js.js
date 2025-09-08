"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const danish = "da"; //Broytti navnið á hesum til locale, tí tað er tað, lærarin brúkti. Í mínum dømi æt variablin danish
const german = "de";

function switchLanguage(lang) {
  texts[lang].texts.forEach((item) => {
    document.querySelector(item.location).textContent = item.text;
  });
}

// Skift sprog når dropdown ændres
document.querySelector("#language").addEventListener("change", function (event) {
  switchLanguage(event.target.value);
});
// (e) stendur fyri event, so funktionen fær at vita, hvat hendir
// (e.target) er tað, sum hendir, tá brúkarin select dropdown)

// Sæt dansk som start
switchLanguage("da");

// //Fyri at fáa fatur á header í html
// // document.querySelector("header").textContent = "Mona";

// //Ein annar máti at tosa til header, her brúka vit variablar í querySelector
// // const qsl = "header";
// // document.querySelector(qsl).textContent = "Mona";

//Lærarans loysn, sindur av tí men droppaði at gera liðugt og fylgdi heldur við

// switchLanguage();
// function switchLanguage() {
//   texts[locale].texts.forEach((each) => {
//     console.log("each", each);
//     document.querySelector(each.location).textContent = each.text;
//   });
// }

// document.querySelector(".header").textContent = "Tekst at sætte ind";
