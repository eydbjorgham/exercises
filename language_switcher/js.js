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
const danish = "da";
const german = "de";

function switchLanguage(lang) {
  texts[lang].texts.forEach((item) => {
    document.querySelector(item.location).textContent = item.text;
  });
}

// Skift sprog når dropdown ændres
document.querySelector("#language").addEventListener("change", function (e) {
  switchLanguage(e.target.value);
});
// (e) stendur fyri event, so funktionen fær at vita, hvat hendir
// (e.target) er tað, sum hendir, tá brúkarin select dropdown)

// Sæt dansk som start
switchLanguage("da");

//Fyri at fáa fatur á header í html
// document.querySelector("header").textContent = "Mona";

//Ein annar máti at tosa til header, her brúka vit variablar í querySelector
// const qsl = "header";
// document.querySelector(qsl).textContent = "Mona";
