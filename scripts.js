const options = document.querySelectorAll('.options');
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
  option.addEventListener('click', function () {
    const playerSelection = this.value;

    const computerOptions = ['Rock', 'Paper', 'Scissors'];
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
    document.getElementById('result').innerHTML = 'Its a Tie!';
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')
  ) {
    playerScore++;
    document.getElementById(
      'result',
    ).innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    document.getElementById(
      'result',
    ).innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore() {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}
