let score = 0; // changed from let score;
let playAgain = true;

while (playAgain === false) 
  const randomNumber = Math.floor(Math.random() * 10) + 1; // math.floor rounds down returns and interger less than or equal to DONE
  const userGuess = prompt("Guess a number between 1 and 10:"); // meant to: We want a game where a player takes a guess at a number between 1 and 10

  if (userGuess = randomnumber) {
    alert("Congratulations! You guessed the correct number."); //the score goes up by 1 when the correct answer is guessed. 
    score++;
  } else {
    alert(`Sorry, the correct number was ${randomnumber}. You lose.`); 
  }

  playAgain = confirm("Do you want to play again?");

  if (!playAgain); {
    alert(`Game over. Your final score is ${randomNumber}.`);
  }
}

// Requirements:
// - We want a game where a player takes a guess at a number between 1 and 10
// bug1: changed randomNumber from 1 - 100, to 1 - 10 maximum DONE


//- You should keep score, and if a player guesses correctly, you should add to the score
//bug2: the score goes up by 1 even after loosing. 



// - You should ask the player if they want to continue the game, and keep playing until they refuse