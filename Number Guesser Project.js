let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = random => {
  random = Math.floor(Math.random()*8)
  return random
}

const compareGuesses = (userGuess,computerGuess,secretTarget) => {
  if (Math.abs(userGuess - secretTarget) <= Math.abs(computerGuess - secretTarget)){
    return true;
  } else {
    return false;
  }
}

const updateScore = update => {
  if (update === 'human'){
    return humanScore++;
  }else if(update === 'computer'){
    return computerScore++;
  }
}

const advanceRound = () => {
  return currentRoundNumber++
}

updateScore('human');
console.log(humanScore);

updateScore('computer');
console.log(computerScore);

