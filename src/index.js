const startBtn = document.getElementById("start");
const introContainer = document.getElementById("intro-container");
const timer = document.getElementById("timer");
const timerSpan = document.querySelector(".timer span");
const gameboard = document.getElementById("gameboard");

const cardsClicked = [];
const cardsClickedId = [];

// Game starts upon pressing the start button

startBtn.addEventListener("click", () => {
  introContainer.style.display = "none";
  timer.style.display = "block";
  let timerStart = 3;
  let downloadTimer = setInterval(function () {
    timerStart--;
    timerSpan.textContent = timerStart;
    if (timerStart <= 0) {
      clearInterval(downloadTimer);
      timer.style.display = "none";
    }
  }, 1000);
  createBoard();
});

// Cards are created and rendered

function createBoard() {
  for (let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("data-id", i);
    card.setAttribute("src", "images/blackImg.jpg");
    card.addEventListener("click", flipCard);
    gameboard.appendChild(card);
    card.className = "back-of-card";
    card.style.borderRadius = "5px";
  }
  gameboard.classList.toggle("active");
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  // adds the name property from the cardsArr identified by card ID to the cardsChosen array
  cardsClicked.push(cardsArray[cardId].name);
  cardsClickedId.push(cardId);
  this.className = "fruit-card";
  this.setAttribute("src", cardsArray[cardId].img);
  if (cardsClicked.length === 2) {
    setTimeout(isMatch, 500);
  }
}

function isMatch() {
  const firstCardId = cardsClickedId[0];
  const secondCardId = cardsClickedId[1];

  if (cardsArray[firstCardId].name === cardsArray[secondCardId].name) {
    alert("Match");
  } else {
    const firstCardElement = document.querySelector(`[data-id="${firstCardId}"]`);
    const secondCardElement = document.querySelector(`[data-id="${secondCardId}"]`);

    firstCardElement.src = "images/blackImg.jpg";
    secondCardElement.src = "images/blackImg.jpg";
  }
  cardsClicked.length = 0;
  cardsClickedId.length = 0;
  console.log(cardsClicked);
  console.log(cardsClickedId);
}
function shuffleCards() {}

function matchedPairedTotal() {}
function gameover() {}
function restartGame() {}
