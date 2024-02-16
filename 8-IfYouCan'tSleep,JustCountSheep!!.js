// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// 8 / 366

// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// * Solution 1
// const countSheep = (num) => {
//   let arr = "";
//   for (let i = 1; i <= num; i++) {
//     arr += i + " sheep...";
//   }
//   return arr;
// };

// * Solution 2
// const countSheep = (num) => {
//   return Array.from({ length: num })
//     .map((_, i) => i + 1 + " sheep...")
//     .join("");
// };

// * Solution 3
const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${++i} sheep...`).join("");

console.log(countSheep(3));
