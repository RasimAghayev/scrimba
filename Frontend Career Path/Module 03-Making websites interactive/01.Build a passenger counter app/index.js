// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function increment() {
//   console.log("The button was clicked");
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// // Setting up the the race 🏎 🏎 🏎

// countdown()

// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎

// countdown()

// function myLogger() {
//     console.log(42)
// }

// myLogger()

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// // Create a function that logs out the sum of all the lap times
// function logLapTime() {
//   let totalTime = lap1 + lap2 + lap3;
//   console.log(totalTime);
// }

// console.log(totalTime);

// logLapTime();
// let lapsCompleted = 0;

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function incrementLap() {
//   lapsCompleted = lapsCompleted + 1;
// }

// incrementLap();
// incrementLap();
// incrementLap();

// console.log(lapsCompleted);
// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

// let count = 0;

// function increment() {
//   count = count + 1;
//   console.log(count);
// }
// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el"); // pass in arguments

console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}
