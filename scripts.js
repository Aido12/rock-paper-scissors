const options = document.querySelectorAll('.options');
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
  option.addEventListener('click', function () {
    const playerSelection = this.value;

    const computerOptions = ['rock', 'paper', 'scissors'];
    const computerSelection = computerOptions[Math.floor(Math.random() * 3)];

    updateMoves(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    updateScore();
  });
});

function updateMoves(playerSelection, computerSelection) {
  document.getElementById(
    'player-move',
  ).src = `./images/${playerSelection}.png`;
  document.getElementById(
    'computer-move',
  ).src = `./images/${computerSelection}.png`;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    document.getElementById('result').innerHTML = 'Its a Tie';
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')
  ) {
    playerScore++;
    document.getElementById(
      'result',
    ).innerHTML = `You win ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    document.getElementById(
      'result',
    ).innerHTML = `You lose ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore() {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}
