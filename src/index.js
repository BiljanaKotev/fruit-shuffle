document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("body");

  // Buttons
  const startBtn = document.getElementById("start");
  const scoreBtn = document.getElementById("score-btn");
  const scoresHomeBtn = document.querySelector(".scores-home-btn");
  const startOverBtn = document.getElementById("start-over-btn");
  const popUpBtn = document.getElementById("pop-up-btn");
  const popUpReturnBtn = document.querySelector(".pop-up-return-btn");

  const scoresContainer = document.querySelector(".scores-container");
  const introContainer = document.getElementById("intro-container");
  const introContainerParagraphs = document.querySelectorAll(".intro-container > p");

  // Timer
  const timer = document.getElementById("timer");
  const timerSpan = document.querySelector(".timer span");

  const backgroundImgContainer = document.querySelector(".bg-img-container");
  const gameboard = document.getElementById("gameboard");
  const matchedPairsContainer = document.getElementById("matched-pairs-container");
  const matchedPairsContainerSpan = document.querySelector(".matched-pairs-container span");
  const fruitShuffle = document.getElementById("fruit-shuffle");
  const popUpYouWin = document.getElementById("pop-up");
  const popUpScore = document.querySelector(".pop-up-score-container > h2");
  const popUpInput = document.querySelector(".pop-up-score-container > input");
  console.log(popUpInput);
  const gameoverImg = document.getElementById("gameover-img");
  const footer = document.querySelector(".footer");

  // Audio
  const audioSuccess = new Audio("sounds/success.mp3");
  const audioFailure = new Audio("sounds/failure.mp3");
  const audioGameover = new Audio("sounds/gameover.mp3");
  const audioYouWin = new Audio("sounds/win.mp3");

  const cardsClicked = [];
  const cardsClickedId = [];

  // Game starts upon pressing the start button

  startBtn.addEventListener("click", () => {
    startGame();
  });

  scoreBtn.addEventListener("click", () => {
    for (let i = 0; i < introContainerParagraphs.length; i++) {
      introContainerParagraphs[i].style.display = "none";
    }
    startBtn.style.display = "none";
    scoreBtn.style.display = "none";
    scoresContainer.style.display = "block";
    footer.style.display = "none";
  });

  scoresHomeBtn.addEventListener("click", () => {
    for (let i = 0; i < introContainerParagraphs.length; i++) {
      introContainerParagraphs[i].style.display = "block";
    }
    scoresContainer.style.display = "none";
    startBtn.style.display = "block";
    scoreBtn.style.display = "block";
    footer.style.display = "block";
  });

  function startGame() {
    introContainer.style.display = "none";
    timer.style.display = "block";
    matchedPairsContainer.style.display = "block";
    fruitShuffle.style.display = "block";
    footer.style.display = "none";
    // backgroundImgContainer.classList.toggle("active");
    displayTimer();
    createBoard();
    shuffleCards();
    matchedPairedTotal();
  }

  let interval;
  function displayTimer() {
    timerStart = 40;
    timerSpan.textContent = timerStart;
    interval = setInterval(function () {
      timerStart -= 1;
      timerSpan.textContent = timerStart;
      if (timerStart <= 0) {
        clearInterval(interval);
        timer.style.display = "none";

        gameover();
      }
    }, 1000);
  }

  // Cards are created dynamically and rendered

  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("data-id", i);
      card.setAttribute("src", "images/fuschia-bg.jpg");
      card.setAttribute("alt", "back of card color fuschia");
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

  //

  function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsClicked.push(cardsArray[cardId].name);
    cardsClickedId.push(cardId);
    this.className = "fruit-card";
    this.setAttribute("src", cardsArray[cardId].img);
    if (cardsClicked.length === 2) {
      setTimeout(() => {
        isMatch();
        cardsClicked.length = 0;
      }, 500);
    }
  }

  function isMatch() {
    const firstCardId = cardsClickedId[0];
    const secondCardId = cardsClickedId[1];
    const firstCardElement = document.querySelector(`[data-id="${firstCardId}"]`);
    const secondCardElement = document.querySelector(`[data-id="${secondCardId}"]`);

    if (cardsArray[firstCardId].name === cardsArray[secondCardId].name) {
      playAudio(audioSuccess);
      matchedPairedTotal();
      cardsClickedId.length = 0;
    } else {
      playAudio(audioFailure);
      firstCardElement.src = "images/fuschia-bg.jpg";
      secondCardElement.src = "images/fuschia-bg.jpg";
      cardsClickedId.length = 0;
    }
  }

  let matchedPair = 0;

  function matchedPairedTotal() {
    if (cardsClicked.length === 2) {
      matchedPairsContainerSpan.innerText = matchedPair += 1;

      if (matchedPair === cardsArray.length / 2) {
        youWin();
      }
    }
  }

  let gameWon = false;

  function youWin() {
    popUpYouWin.style.display = "block";
    backgroundImgContainer.style.display = "none";
    gameboard.style.display = "none";
    matchedPairsContainer.style.display = "none";
    timer.style.display = "none";
    gameWon = true;
    popUpBtn.classList.toggle("active");
    popUpScore.innerText = `${matchedPair} points`;
    playAudio(audioYouWin);
  }

  // function gameover() {
  //   if (timerStart <= 0 && !gameWon) {
  //     gameboard.style.display = "none";
  //     matchedPairsContainer.style.display = "none";
  //     backgroundImgContainer.style.display = "none";
  //     body.classList.toggle("active");
  //     gameoverImg.classList.toggle("active");
  //     startOverBtn.classList.toggle("active");
  //     playAudio(audioGameover);
  //   }
  // }

  function playAudio(success, failure, youWin, gameover) {
    if (success) {
      success.play();
    } else if (failure) {
      failure.play();
    } else if (gameover) {
      gameover.play();
    } else if (youWin) {
      youWin.play();
    }
  }

  startOverBtn.addEventListener("click", () => {
    location.reload();
  });

  popUpBtn.addEventListener("click", () => {
    location.reload();
  });
});
