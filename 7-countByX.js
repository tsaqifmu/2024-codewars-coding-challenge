// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// 7 / 366

// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// * Solution 1
// const countBy = (x, n) => {
//   const z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// };

// * Solution 2
// const countBy = (x, n) => {
//   return Array.from({ length: n }).map((_, i) => x * (i + 1));
// };

// * Solution 3
const countBy = (x, n) => [...Array(n)].map((_, i) => x * ++i);

console.log(countBy(2, 5));
