////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

//ADDED SOME GLOBALS
var chooseMessage = "Please choose either 'rock', 'paper', or 'scissors'.";
var allMoves = ['', 'rock', 'paper', 'scissors'];

function getInput() {
    console.log(chooseMessage);
    return prompt(chooseMessage);
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput().toLowerCase();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (allMoves.indexOf(playerMove) === allMoves.indexOf(computerMove)) {
        winner = "tie";
    }
    else if ((allMoves.indexOf(playerMove) - allMoves.indexOf(computerMove) + 3) % 3 === 1) {
      winner = "player";
    }
    else if ((allMoves.indexOf(playerMove) - allMoves.indexOf(computerMove) + 3) % 3 === 2) {
      winner = "computer";
    }
    else {
        winner = "no winner";
    }

    return winner;
}

function playToX(max) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < max && computerWins < max) {

      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      var winner = getWinner(playerMove, computerMove);
      var winMessage;

      if (winner === "player") {
        winMessage = "Player won this round!";
        playerWins += 1;
      }
      else if (winner === "computer") {
        winMessage = "Computer won this round!";
        computerWins += 1;
      }
      else if (winner === "tie") {
        winMessage = "Tie round!";
      }
      else {
          winMessage = chooseMessage;
      }

      var playMessage = "Player played " + playerMove + "!" + "\nComputer played " + computerMove + "!";
      var scoreMessage = "Player " + playerWins + " | " + computerWins + " Computer\n";

      console.log(playMessage + "\n" + winMessage + "\n" + scoreMessage);
      alert(playMessage + "\n" + winMessage + "\n" + scoreMessage);
    }
    console.log("Game Over");
    return [playerWins, computerWins];
}

playToX(prompt("Play to how many wins?"));
