/*

In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/

function rpsls(pl1,pl2){
 const Myobj={
   rock: ['lizard', 'scissors'],
   paper: ['rock', 'spock'],
   spock: ['rock', 'scissors'],
   lizard: ['paper', 'spock'],
   scissors: ['lizard', 'paper']
 };
  return (Myobj[pl1].includes(pl2)) ? "Player 1 Won!" : (Myobj[pl2].includes(pl1))?"Player 2 Won!":"Draw!";
}




