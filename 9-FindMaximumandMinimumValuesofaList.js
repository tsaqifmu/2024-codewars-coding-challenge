// https://www.codewars.com/kata/577a98a6ae28071780000989

// 9 / 366

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

//* Solution 1
// const min = (list) => {
//   let minValue = list[0];
//   for (let i = 0; i < list.length; i++) {
//     minValue > list[i] && (minValue = list[i]);
//   }
//   return minValue;
// };

// const max = (list) => {
//   let maxValue = list[0];
//   for (let i = 0; i < list.length; i++) {
//     maxValue < list[i] && (maxValue = list[i]);
//   }
//   return maxValue;
// };

//* Solution 2
// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

//* Solution 3
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([5]));
