// https://www.codewars.com/kata/5556282156230d0e5e000089

// 6 / 366

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

// * Solution 1
// const DNAtoRNA = (dna) =>
//   dna
//     .split("")
//     .map((x) => (x === "T" ? "U" : x))
//     .join("");

// * Solution 2
// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

// * Solution 3
// const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// * Solution 4
const DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA("GCAT"));
