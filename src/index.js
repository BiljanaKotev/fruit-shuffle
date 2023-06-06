const startBtn = document.getElementById("start");
const introContainer = document.getElementById("intro-container");
const timer = document.getElementById("timer");
const timerSpan = document.querySelector(".timer span");
console.log(timerSpan);

startBtn.addEventListener("click", () => {
  introContainer.style.display = "none";
  timer.style.display = "block";
  let timerStart = 16;
  let downloadTimer = setInterval(function () {
    timerStart--;
    timerSpan.textContent = timerStart;
    if (timerStart <= 0) {
      clearInterval(downloadTimer);
      timer.style.display = "none";
    }
  }, 1000);
});
