// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// 19 / 366

// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.

//* Solution 1
// const sumMix = (x) => {
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     sum += +x[i];
//   }
//   return sum;
// };

//* Solution 2
const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);

console.log(sumMix([9, 3, "7", "3"]));
