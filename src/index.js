const startBtn = document.getElementById("start");
const introContainer = document.getElementById("intro-container");
const timer = document.getElementById("timer");
const timerSpan = document.querySelector(".timer span");
const gameboard = document.getElementById("gameboard");

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

// Cards are created and displayed

function createBoard() {
  for (let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("data-id", i);
    card.setAttribute("src", "images/blackImg.jpg");
    card.addEventListener("click", flipCard);
    gameboard.appendChild(card);
    card.className = "fruit-card";
    card.style.borderRadius = "5px";
  }
  gameboard.classList.toggle("active");
}

function shuffleCards() {}

function flipCard() {}

function matchedPairedTotal() {}
function gameover() {}
function restartGame() {}
