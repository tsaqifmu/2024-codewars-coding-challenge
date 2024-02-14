// https://www.codewars.com/kata/57f780909f7e8e3183000078
// 1 / 366
//Given a non-empty array of integers, return the result of multiplying the values together in order

const grow = (x) => (result = x.reduce((acc, cur) => acc + cur, 1));

console.log(grow([1, 2, 3, 4]));
