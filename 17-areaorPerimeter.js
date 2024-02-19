// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// 17 / 366

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

//* Solution 1
// const areaOrPerimeter = (l, w) => {
//   if (l == w) {
//     return l * w;
//   } else {
//     return 2 * l + 2 * w;
//   }
// };

//* Solution 2
const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

console.log(areaOrPerimeter(6, 10));
