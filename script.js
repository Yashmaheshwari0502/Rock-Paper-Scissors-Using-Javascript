let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultMessage = document.querySelector("#result-message");

const getRandomChoice = () => {
  const options = ["paper", "rock", "scissors"];
  const index = Math.floor(Math.random() * options.length);
  return options[index];
};

const showDraw = () => {
  resultMessage.textContent = "It's a draw! Try again.";
  resultMessage.style.backgroundColor = "#081828";
};

const showWinner = (playerWon, playerChoice, computerChoice) => {
  if (playerWon) {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    resultMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    resultMessage.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    resultMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    resultMessage.style.backgroundColor = "red";
  }
};

const playGame = (playerChoice) => {
  const computerChoice = getRandomChoice();

  if (playerChoice === computerChoice) {
    showDraw();
  } else {
    const playerWins =
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock");

    showWinner(playerWins, playerChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.getAttribute("id");
    playGame(playerChoice);
  });
});



// hello