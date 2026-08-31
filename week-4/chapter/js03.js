/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Chad Smith
     Date: 2026-08-31  

     Filename: js03.js
 */

// Days of the week
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

window.addEventListener("load", addWeekDays);

// Function to write weekday names into the calendar
function addWeekDays() {
  let i = 0; // initial counter value

  // reference the collection of heading cells
  let headingCells = document.getElementsByTagName("th");

  // write each of the seven days into a heading cell
  while (i < 7) {
    headingCells[i].innerHTML = weekDays[i];

    // increase the counter by 1
    i++;
  }
}
