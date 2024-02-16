// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// 11 / 366

// Let's play! You have to return which player won! In case of a draw return Draw!.

//* Solution 1
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
//   if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
//   if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
//   return "Player 2 won!";
// };

//* Solution 2
const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };
  return p1 === p2
    ? "Draw!"
    : rules[p1] === p2
    ? "Player 1 won!"
    : "Player 2 won!";
};

console.log(rps("scissors", "paper"));
