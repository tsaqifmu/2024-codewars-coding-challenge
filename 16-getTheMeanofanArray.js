// https://www.codewars.com/kata/563e320cee5dddcf77000158

// 16 / 366

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

//* Solution 1
// const getAverage = (marks) => {
//   let average = 0;
//   for (let i = 0; i < marks.length; i++) {
//     average += marks[i] / marks.length;
//   }
//   return Math.floor(average);
// };

//* Solution 2
const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, curr) => curr + acc) / marks.length);

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
