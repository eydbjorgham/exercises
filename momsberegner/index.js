"use strict";

momsBeregn("100");

function momsBeregn(beloeb, moms = 0.25) {
  console.log(`Beløbet er:  ${beloeb * (1 + moms)}`);
}

//Underviserens måde at lave opgaven

function momsBeregner(beloeb, moms) {
  console.log(beloeb + (beloeb * moms) / 100);
}

momsBeregner(200, 25);
