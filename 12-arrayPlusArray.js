// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// 12 / 366

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//* Solution 1
// const arrayPlusArray = (arr1, arr2) => {
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     sum += arr2[j];
//   }
//   return sum;
// };

//* Solution 2
// const arrayPlusArray = (arr1, arr2) =>
// [...arr1, ...arr2].reduce((a, b) => a + b);

//* Solution 3
// const arrayPlusArray = (arr1, arr2) =>
//   arr1.concat(arr2).reduce((a, b) => a + b);

//* Solution 4
const arrayPlusArray = (...arr) => [].concat(...arr).reduce((a, b) => a + b);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
