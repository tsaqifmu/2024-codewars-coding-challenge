// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// 23 / 366

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

//* Solution 1
// const monkeyCount = (n) =>([...Array(n)].map((_,i)=> ++i))

//* Solution 2
const monkeyCount = (n) => Array.from({ length: n }, (_, i) => ++i);
