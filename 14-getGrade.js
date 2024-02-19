// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// 14 / 366

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

//* Solution 1
// const getGrade = (s1, s2, s3) => {
//   let score = "";
//   if ((s1 + s2 + s3) / 3 >= 90) {
//     score = "A";
//   } else if ((s1 + s2 + s3) / 3 >= 80) {
//     score = "B";
//   } else if ((s1 + s2 + s3) / 3 >= 70) {
//     score = "C";
//   } else if ((s1 + s2 + s3) / 3 >= 60) {
//     score = "D";
//   } else score = "F";
//   return score;
// };

//* Solution 2
const getGrade = (...s) => {
  const average = s.reduce((acc, curr) => curr + acc) / s.length;
  return average >= 90
    ? "A"
    : average >= 80
    ? "B"
    : average >= 70
    ? "C"
    : average >= 60
    ? "D"
    : "F";
};

console.log(getGrade(95, 90, 93));
