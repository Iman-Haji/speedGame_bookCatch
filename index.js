const startButton = document.querySelector('#startButton');
const endButton = document.querySelector('#endButton');
const circles = document.querySelectorAll('.circle'); //if you use circles, it'd be one circle only. USE BOOK not BOOKS
const scoreDisplay = document.querySelector('.score')

//global variables 
let score = 0;
let timer;
let gamePace = 100; //you can change it, the lower the faster
let active = 0;
let rounds = 0;

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//console.log(getRndInteger(0, 3));

const clickCircle = (i) => {
  if (i !== active) {
    return endGame()
  }
  rounds--
  score += 10
  scoreDisplay.textContent = score
}

//variable name we created is circle. 
circles.forEach((circle, i) => {
  circle.addEventListener('click', () => clickCircle(i));
})
//console.log('Game has started.');

const enableEvents = () => {
  circles.forEach(circle => {
    circle.style.pointerEvents = "auto";
  })
}

const startGame = () => {
  if (rounds >= 3) {
    return endGame()
  }

  enableEvents();
  const newActive = pickNew(active);

  circles[newActive].classList.toggle('active')
  circles[active].classList.remove('active')

  active = newActive;

  timer = setTimeout(startGame, 1000, gamePace)

  gamePace -= 10
  rounds++
  function pickNew(active) {
    const newActive = getRndInteger(0, 3);
    if (newActive !== active) {
      return newActive
    }
    return pickNew(active);
  }
}

const endGame = () => {
  console.log('Game has ended.');
  clearTimeout(timer);
  resetGame();
}

const resetGame = () => {
  window.location.reload()
}

startButton.addEventListener('click', startGame);
endButton.addEventListener('click', endGame);