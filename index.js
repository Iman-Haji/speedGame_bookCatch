const startButton = document.querySelector('#startButton');
const endButton = document.querySelector('#endButton');
const circles = document.querySelectorAll('.circle'); //if you use circles, it'd be one circle only. USE BOOK not BOOKS
const scoreDisplay = document.querySelector('.score');
const modal = document.querySelector('.modal');
const messageUser = document.querySelector('.modalMessageForUser');
const scoreForModal = document.querySelector('#scoreForModal');


//the global variables 
let score = 0;
let timer;
let gamePace = 1200; //you can change it, the lower the faster
let active = 0;
let rounds = 0;


const backgroundMusic = new Audio();
backgroundMusic.src = "./music/adaytoremember.mp3"


//random number for the buttons
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//console.log(getRndInteger(0, 3));

const clickCircle = (i) => {

  if (i !== active) {
    return endGame()
  }
  rounds--;
  score += 10;
  scoreDisplay.textContent = score;
}

//variable name we created is circle. 
circles.forEach((circle, i) => {
  circle.addEventListener('click', () => clickCircle(i));
});
//console.log('Game has started.');

const enableEvents = () => {
  circles.forEach((circle) => {
    circle.style.pointerEvents = "auto";
  });
};

//game starts
function startGame() {
  startButton.classList.add('none');
  endButton.classList.remove('none');
  if (rounds >= 3) {
    return endGame();
  }

  /*const startGame = () => {
    if (rounds >= 3) {
      return endGame();
    }*/

  //added
  //let startGameSound = new Audio('');
  //myAudio.play();

  enableEvents();

  const newActive = pickNew(active);
  circles[newActive].classList.toggle('active');
  circles[active].classList.remove('active');
  timer = setTimeout(startGame, gamePace);
  gamePace -= 18;
  rounds++;
  //active = newActive;
  //active = newActive;

  timer = setTimeout(startGame, 1000, gamePace)

  gamePace -= 10;
  rounds++;

  function pickNew(active) {
    const newActive = getRndInteger(0, 3);

    if (newActive !== active) {
      return newActive;
    }
    return pickNew(active);
  }
  startButton.classList.add('none');
}



const endGame = () => {
  clearTimeout(timer);
  //resetGame();
  showModal();
  if (score < 20) {
    //add a game over type music
  } else if (score >= 20 && score < 40) {
    // try again music
  } else {
    //add a music for cheering
  }
  startButton.classList.add('none');
  endButton.classList.add('none');
};

const resetGame = () => {
  window.location.reload();
}


function showModal() {
  modal.classList.toggle('visible') //CSS
  scoreForModal.textContent = score;
  if (score < 20) {
    scoreForModal.textContent = `${score}`;
    messageUser.textContent = `At least we'll be safe from you getting a sale on all your books.`
  } else if (score >= 20 && score < 40) {
    scoreForModal.textContent = `${score}`;
    messageUser.textContent = `Okay, finally. Good for you, bad for us.`
  } else {
    scoreForModal.textContent = `${score}`;
    messageUser.textContent = `Alright, stop. Enough. You'll steal all the books we own...please...`
  }
}

startButton.addEventListener('click', startGame);
endButton.addEventListener('click', endGame);