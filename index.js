import { DATA } from "./modules/data.js";
import { loadData } from "./events/loadData.js";
import { getTaxRate } from "./events/getTaxRate.js";

/* set data to dom */
let tbody = document.querySelector("tbody");
loadData(tbody, DATA);

/* set event listener for getting tax rate */
let button = document.querySelector("button");
button.addEventListener("click", function (e) {
  e.preventDefault;
  loadData(tbody, getTaxRate(DATA));
  // let test = document.querySelector('tbody tr')
  // for (let value of test.children) {
  //   console.log(value.innerText);
  //   value.innerText == 135 ? console.log(typeof value.innerText) : console.log('nothing')
  // };
});

/* ********************************************************************* EVENTS ******************************************************************** */

/**
 * set tax rate, brutto price and sign for transactions within eu to dom
 *
 */
// function getTaxRate() {
//   let items = document.querySelectorAll("tbody tr");
//   for (let i = 0; i < items.length; i++) {
//     for (let key in items[i].children) {
//       if (
//         euChecked(items[i].children[0].innerText) &&
//         euChecked(items[i].children[1].innerText) &&
//         items[i].children[0].innerText === items[i].children[1].innerText
//       ) {
//         items[i].children[3].innerText = taxChecked(1) + " %";
//         items[i].children[4].innerText = bruttoEstimated(
//           taxChecked(1),
//           parseFloat(items[i].children[2].innerText)
//         );
//         items[i].children[5].innerText = "X";
//       } else if (
//         euChecked(items[i].children[0].innerText) &&
//         euChecked(items[i].children[1].innerText)
//       ) {
//         items[i].children[3].innerText = taxChecked(3) + " %";
//         items[i].children[4].innerText = bruttoEstimated(
//           taxChecked(3),
//           parseFloat(items[i].children[2].innerText)
//         );
//         items[i].children[5].innerText = "X";
//       } else if (
//         (euChecked(items[i].children[0].innerText) &&
//           !euChecked(items[i].children[1].innerText)) ||
//         (!euChecked(items[i].children[0].innerText) &&
//           euChecked(items[i].children[1].innerText)) ||
//         (!euChecked(items[i].children[0].innerText) &&
//           !euChecked(items[i].children[1].innerText) &&
//           items[i].children[0].innerText !== items[i].children[1].innerText)
//       ) {
//         items[i].children[3].innerText = taxChecked(3) + " %";
//         items[i].children[4].innerText = bruttoEstimated(
//           taxChecked(3),
//           parseFloat(items[i].children[2].innerText)
//         );
//       } else if (
//         items[i].children[0].innerText === "CH" &&
//         items[i].children[1].innerText === "CH"
//       ) {
//         items[i].children[3].innerText = taxChecked(2) + " %";
//         items[i].children[4].innerText = bruttoEstimated(
//           taxChecked(2),
//           parseFloat(items[i].children[2].innerText)
//         );
//       }
//     }
//   }
// }
