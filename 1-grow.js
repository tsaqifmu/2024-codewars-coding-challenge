// https://www.codewars.com/kata/57f780909f7e8e3183000078

// 1 / 366

//Given a non-empty array of integers, return the result of multiplying the values together in order

//* Solution 1
// const grow = (x) => {
//   let kata = 0;
//   for (let i = 0; i < x.length; i++) {
//     kata += x[i];
//   }
//   return kata;
// };

//* Solution 2
const grow = (x) => (result = x.reduce((acc, cur) => acc + cur));

console.log(grow([1, 2, 3, 4]));
