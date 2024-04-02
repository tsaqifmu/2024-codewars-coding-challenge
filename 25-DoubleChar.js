// https://www.codewars.com/kata/56b1f01c247c01db92000076

// 24 / 366

// Given a string, you have tGiven a string, you have to return a string in which each character (case-sensitive) is repeated once.o return a string in which each character (case-sensitive) is repeated once.

//* Solution 1
const doubleChar = (str) =>
  str
    .split("")
    .map((_) => _ + _)
    .join("");
