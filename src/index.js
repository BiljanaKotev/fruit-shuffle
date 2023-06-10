document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start");
  const introContainer = document.getElementById("intro-container");
  const timer = document.getElementById("timer");
  const timerSpan = document.querySelector(".timer span");
  const gameboard = document.getElementById("gameboard");
  const matchedPairsContainer = document.getElementById("matched-pairs-container");
  const matchedPairsContainerSpan = document.querySelector(".matched-pairs-container span");
  const audioSuccess = new Audio("sounds/success-1-6297.mp3");
  const audioFailure = new Audio("sounds/failure-drum-sound-effect-2-7184.mp3");
  const fruitShuffle = document.getElementById("fruit-shuffle");
  const popUpYouWin = document.getElementById("pop-up");

  const cardsClicked = [];
  const cardsClickedId = [];

  // Game starts upon pressing the start button

  startBtn.addEventListener("click", () => {
    introContainer.style.display = "none";
    timer.style.display = "block";
    matchedPairsContainer.style.display = "block";
    fruitShuffle.style.display = "block";
    displayTimer();
    createBoard();
    shuffleCards();
    matchedPairedTotal();
  });

  let timerStart = 3;
  function displayTimer() {
    let interval = setInterval(function () {
      timerStart -= 1;
      timerSpan.textContent = timerStart;
      if (timerStart <= 0) {
        console.log("stop");
        clearInterval(interval);
        timer.style.display = "none";
        matchedPairsContainer.style.top = "100px";
      }
    }, 1000);
  }

  // setInterval(displayTimer, 1000);

  // let downloadTimer = setInterval(function () {
  //   timerStart--;
  // });

  // function timerCountdown() {
  //   if (timerStart < 0) {
  //     console.log("stop");
  //     clearInterval(timerStart);
  //   }
  // }

  //  if (timerStart <= 0) {
  //     clearInterval(downloadTimer);
  //   }
  // }, 1000);

  //  timer.style.display = "none";
  //  matchedPairsContainer.style.top = "100px";

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
    console.log(`${cardsClicked} card clicked`);
    cardsClickedId.push(cardId);
    console.log(`${cardsClickedId} card ID`);
    this.className = "fruit-card";
    this.setAttribute("src", cardsArray[cardId].img);
    if (cardsClicked.length === 2) {
      setTimeout(() => {
        isMatch();
        cardsClicked.length = 0;
      }, 1000);
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

  function youWin() {
    popUpYouWin.style.display = "block";

    gameover();
  }

  function gameover() {
    if (displayTimer()) {
      console.log("gameover");
    }
  }

  function playAudio(success, failure) {
    if (success) {
      success.play();
    } else if (failure) {
      failure.play();
    }
  }

  function restartGame() {}
});
