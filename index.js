const startButton = document.querySelector('#startButton');
const endButton = document.querySelector('#endButton');
const circles = document.querySelectorAll('.circle'); //if you use circles, it'd be one circle only. USE BOOK not BOOKS
const scoreDisplay = document.querySelector('.score')



let score = 0;

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(getRndInteger(0, 6));

const clickCircle = (i) => {
  console.log('the circle was clicked.', i);
  score += 10
  scoreDisplay.textContent = score
}


//variable name we created is circle. 
circles.forEach((circle, i) => {
  circle.addEventListener('click', () => clickCircle(i));
})

const startGame = () => {
  console.log('Game has started.');
}

const endGame = () => {
  console.log('Game has ended.');
}

startButton.addEventListener('click', startGame);
endButton.addEventListener('click', endGame);