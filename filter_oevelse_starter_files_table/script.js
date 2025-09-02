"use strict";

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; //rydder tabellen så den kun viser det propertie der bliver kaldt
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}

//Filtrering med eldrevne biler
function filterElDrevne() {
  return vehicles.filter(function (vehicles) {
    if (vehicles.isElectric === true) {
      return true;
    } else {
      return false;
    }
  });
}

//Filtrering medd mere end 2 sæder
function filterMereEnd2() {
  return vehicles.filter(function (vehicles) {
    if (vehicles.passengers >= 2) {
      return true;
    } else {
      return false;
    }
  });
}

//Filtrering af Jonas' biler
function filterJonas() {
  return vehicles.filter(function (vehicles) {
    if (vehicles.isElectric === true && vehicles.ownedBy === "Jonas") {
      return true;
    } else {
      return false;
    }
  });
}

//Filtrering med rugbrødsdrevne biler
function filterRugbrød() {
  return vehicles.filter(function (vehicles) {
    if (vehicles.fuel === "Rugbrød" && vehicles.passengers > 1) {
      return true;
    } else {
      return false;
    }
  });
}

//Så knapper virker
document.getElementById("btnAlle").onclick = function () {
  showTheseVehicles(vehicles);
};
document.getElementById("btnEl").onclick = function () {
  showTheseVehicles(filterElDrevne());
};
document.getElementById("btnMereEnd2").onclick = function () {
  showTheseVehicles(filterMereEnd2());
};
document.getElementById("btnJonas").onclick = function () {
  showTheseVehicles(filterJonas());
};
document.getElementById("btnRugbrød").onclick = function () {
  showTheseVehicles(filterRugbrød());
};
