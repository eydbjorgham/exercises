"use strict";

document.querySelector("select").addEventListener("change", changeColour);

function changeColour() {
  const valgtTema = document.querySelector("select").value; //Her siga vit virðið frá valdu select knappunum
  document.querySelector("body").dataset.theme = valgtTema; //Her siga vit temaðið skal vera skift alt eftir hvat fyri virðið verður valt
  console.log(valgtTema);
}
