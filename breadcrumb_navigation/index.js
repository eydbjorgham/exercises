"use strict";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch" },
];

document.querySelector("button").addEventListener("click", () => {
  let lastIndex = bc.length - 1;
  bc.forEach((element, i) => {
    if (i < lastIndex) {
      document.querySelector("ul").innerHTML += `<a href="${element.link}">${element.name}</a> &nbsp / &nbsp`;
    } else {
      document.querySelector("ul").innerHTML += `${element.name}`;
    }
  });
});
