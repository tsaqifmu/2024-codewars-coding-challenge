// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// 15 / 366

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

//* Solution 1
// const sumArray = (array) => {
//   if (array == null) return 0;
//   if (array.length <= 2) return 0;

//   array.sort((a, b) => a - b);

//   let sum = 0;
//   for (let i = 1; i < array.length - 1; i++) {
//     sum += array[i];
//   }
//   return sum;
// };

//* Solution 2
const sumArray = (array) =>
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => curr + acc, 0)
    : 0;

console.log(sumArray([5, 3, 5, 6]));
