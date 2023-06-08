document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start");
  const introContainer = document.getElementById("intro-container");
  const timer = document.getElementById("timer");
  const timerSpan = document.querySelector(".timer span");
  const gameboard = document.getElementById("gameboard");
  const matchedPairsContainer = document.getElementById("matched-pairs-container");
  const matchedPairsContainerSpan = document.querySelector(".matched-pairs-container span");
  const audio = new Audio("sounds/success-1-6297.mp3");
  console.log(audio);

  const cardsClicked = [];
  const cardsClickedId = [];

  // Game starts upon pressing the start button

  startBtn.addEventListener("click", () => {
    introContainer.style.display = "none";
    timer.style.display = "block";
    matchedPairsContainer.style.display = "block";
    let timerStart = 21;
    let downloadTimer = setInterval(function () {
      timerStart--;
      timerSpan.textContent = timerStart;
      if (timerStart <= 0) {
        clearInterval(downloadTimer);
        timer.style.display = "none";
        matchedPairsContainer.style.top = "100px";
      }
    }, 1000);
    createBoard();
    shuffleCards();
    matchedPairedTotal();
    playAudio();
  });

  // Cards are created and rendered

  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("data-id", i);
      card.setAttribute("src", "images/fuschia-bg.jpg");
      card.setAttribute("alt", "images of different fruits");
      card.addEventListener("click", flipCard);
      gameboard.appendChild(card);
      card.className = "back-of-card";
      card.style.borderRadius = "5px";
    }
    gameboard.classList.toggle("active");
  }

  function shuffleCards() {
    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
  }

  function flipCard() {
    const cardId = this.getAttribute("data-id");

    cardsClicked.push(cardsArray[cardId].name);
    cardsClickedId.push(cardId);
    this.className = "fruit-card";
    this.setAttribute("src", cardsArray[cardId].img);
    if (cardsClicked.length === 2) {
      setTimeout(isMatch, 500);
    }
  }

  function isMatch() {
    // assigned variables to empty array
    const firstCardId = cardsClickedId[0];
    const secondCardId = cardsClickedId[1];
    console.log(firstCardId);
    console.log(secondCardId);
    // cardsClickedId.length = 0;
    cardsClicked.length = 0;

    if (cardsArray[firstCardId].name === cardsArray[secondCardId].name) {
      alert("Match");
      cardsClickedId.length = 0;
    } else {
      const firstCardElement = document.querySelector(`[data-id="${firstCardId}"]`);
      const secondCardElement = document.querySelector(`[data-id="${secondCardId}"]`);
      cardsClickedId.length = 0;

      firstCardElement.src = "images/fuschia-bg.jpg";
      secondCardElement.src = "images/fuschia-bg.jpg";
    }
  }

  function matchedPairedTotal() {
    matchedPairsContainerSpan.innerContext += 0;
  }

  function playAudio() {
    audio.play();
  }

  function gameover() {}
  function restartGame() {}
});
