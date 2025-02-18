/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"


------------------------------------------------------------------------------------------------------------
*/

const rps = (p1, p2) => {
  const RockPaperScissors = {
    scissors: "paper",
    paper: "rock",
    rock: "scissors",
  };
  console.log(RockPaperScissors[p1], RockPaperScissors[p2]);
  return RockPaperScissors[p1] === p2
    ? "Player 1 won!"
    : p1 === RockPaperScissors[p2]
    ? "Player 2 won!"
    : "Draw!";
};
