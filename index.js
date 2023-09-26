//game started
//game ended
const startButton = document.querySelector('#startButton');
const endButton = document.querySelector('#endGame');

const startGame = () => {
  console.log('Game has started.');
}

const endGame = () => {
  console.log('Game has ended.');
}

endGame

startButton.addEventListener('click', startGame);
endButton.addEventListener('click', endGame);