// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// 22 / 366

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//* Solution 1
// const removeExclamationMarks = (s) => {
//   let kata = [];

//   for (let i = 0; i <= s.length; i++) {
//     if (s[i] !== "!") {
//       kata.push(s[i]);
//     }
//   }
//   return kata.join("");
// };

//* Solution 2
// const removeExclamationMarks = (s) => s.split("!").join("");

//* Solution 3
const removeExclamationMarks = (s) => s.replace(/!/g, "");
