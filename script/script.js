
let isPlaying = false;


let globalOne = 0;
let globalTwo = 0;
let currentPlayer = 1;
let round = 0;


const playerOneIcon = document.getElementById('player-one-icon');
const playerTwoIcon = document.getElementById('player-two-icon');

const holdButton = document.getElementById('hold-btn');
const rollButton = document.getElementById('roll-btn');
const dice = document.getElementById('dice');

const playerOneScore = document.getElementById('player-one-score');
const playerTwoScore = document.getElementById('player-two-score');
const playerOneCurrent = document.getElementById('player-one-score-current');
const playerTwoCurrent = document.getElementById('player-two-score-current');


dice.addEventListener('click', () => roll());

// Reset all score and randomize player order.
function newGame() {
  reset();
  let playerBegin = Math.floor(Math.random() * 2);

  currentPlayer = playerBegin + 1;
  setIconPlayer();
}


// roll function randomize numbers play animation and add numbers to round
function roll() {
  if (!isPlaying)
    return;


  let diceNumber = Math.floor(Math.random() * 6) + 1;

  showDiceImg(diceNumber);

  if (diceNumber != 1) {
    round += diceNumber;
    playDiceAnimation('dice-animation')

    if (currentPlayer == 1) {
      playerOneCurrent.textContent = round;
    } else {
      playerTwoCurrent.textContent = round
    }

    return;
  }

  playDiceAnimation('dice-animation--loose')
  switchPlayer();
}


// hold function get rounder score and add to player, check if global score >= 100 for Win
function hold() {
  if (!isPlaying || round == 0)
    return;

  if (currentPlayer == 1) {
    globalOne += round;
    playerOneScore.textContent = globalOne;

    if (globalOne >= 100) {
      isPlaying = false;
      disableButtons();
      showWin(1);
    }

  } else {
    globalTwo += round;
    playerTwoScore.textContent = globalTwo;

    if (globalTwo >= 100) {
      isPlaying = false;
      disableButtons();
      showWin(2);
    }
  }
  switchPlayer();
}



function showDiceImg(number) {
  dice.src = `images/dice/dice_${number}.png`;
}


// Switch player and add red icon
function switchPlayer() {
  round = 0;
  playerOneCurrent.textContent = '0';
  playerTwoCurrent.textContent = '0';

  if (currentPlayer != 2) {
    currentPlayer++;
  } else {
    currentPlayer = 1;
  }

  setIconPlayer();
}


function setIconPlayer() {
  playerOneIcon.classList.remove('red-point');
  playerTwoIcon.classList.remove('red-point');
  (currentPlayer == 1) ? playerOneIcon.classList.add('red-point') : playerTwoIcon.classList.add('red-point');
}

function playDiceAnimation(name) {
  isPlaying = false;
  dice.parentElement.classList.add(name);
  setTimeout(() => {
    dice.parentElement.classList.remove(name);
    isPlaying = true;
  }, "500");
}


function reset() {
  playerOneCurrent.textContent = '0';
  playerOneScore.textContent = '0';
  playerTwoCurrent.textContent = '0';
  playerTwoScore.textContent = '0';
  playerOneIcon.classList.remove('red-point');
  playerTwoIcon.classList.remove('red-point');
  globalOne = 0;
  globalTwo = 0;
  round = 0;
  holdButton.classList.remove('hidden');
  rollButton.classList.remove('hidden');
  dice.parentElement.classList.remove('hidden');

  isPlaying = true;
}


function disableButtons() {
  holdButton.classList.add('hidden');
  rollButton.classList.add('hidden');
  dice.parentElement.classList.add('hidden');
}