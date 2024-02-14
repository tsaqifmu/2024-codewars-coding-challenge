// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// 2 / 366

// Build a function that returns an array of integers from n to 1 where n>0

const reverseSeq = (n) => [...Array(n)].map((_, i) => n - i);

console.log(reverseSeq(2));
