"use strict";

document.querySelector("select").addEventListener("change", changeColour);

function changeColour() {
  const valgtTema = document.querySelector("select").value;
  document.querySelector("body").dataset.theme = valgtTema;
  console.log(valgtTema);
}
