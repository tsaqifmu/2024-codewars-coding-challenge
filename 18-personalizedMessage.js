// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// 18 / 366

// Create a function that gives a personalized greeting.
// This function takes two parameters: name and owner.

//* Solution 1
const greet = (name, owner) => (owner === name ? "Hello boss" : "Hello guest");

console.log(greet("Greg", "Daniel"));
