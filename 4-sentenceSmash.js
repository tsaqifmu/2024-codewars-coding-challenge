// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// 4 / 366

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//* Solution 1
const smash = (words) => {
  let sentence = "";

  for (let i = 0; i < words.length; i++) {
    sentence += words[i];
    i != words.length - 1 && (sentence += " ");
  }
  return sentence;
};

//* solution 2
// const smash = (words) => words.join(" ");

console.log(smash(["hello", "world", "paijo"]));
