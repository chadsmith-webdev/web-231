"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Chad Smith
      Date: 2026-10-04 

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() {
  let firstnameBill = document.getElementById("firstnameBill");
  let firstnameShip = document.getElementById("firstnameShip");

  let lastnameBill = document.getElementById("lastnameBill");
  let lastnameShip = document.getElementById("lastnameShip");

  let address1Bill = document.getElementById("address1Bill");
  let address1Ship = document.getElementById("address1Ship");

  let address2Bill = document.getElementById("address2Bill");
  let address2Ship = document.getElementById("address2Ship");

  let cityBill = document.getElementById("cityBill");
  let cityShip = document.getElementById("cityShip");

  let countryBill = document.getElementById("countryBill");
  let countryShip = document.getElementById("countryShip");

  let codeBill = document.getElementById("codeBill");
  let codeShip = document.getElementById("codeShip");

  let stateBill = document.getElementById("stateBill");
  let stateShip = document.getElementById("stateShip");

  if (useShip.checked) {
    firstnameBill.value = firstnameShip.value;
    lastnameBill.value = lastnameShip.value;
    address1Bill.value = address1Ship.value;
    address2Bill.value = address2Ship.value;
    cityBill.value = cityShip.value;
    countryBill.value = countryShip.value;
    codeBill.value = codeShip.value;
    stateBill.selectedIndex = stateShip.selectedIndex;
  }
}
