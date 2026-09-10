/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Chad Smith 
      Date: 2026-09-05  

      Filename: project03-01.js
*/

/* Create an application that calculates the total cost of items selected from a lunch menu using a for loop and an if statement as part of the program code. The cost of each menu item is stored in the value attribute of an input control on a web form.
 */

let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("change", calcTotal);
}

function calcTotal() {
  let orderTotal = 0;

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  document.getElementById("billTotal").textContent = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
