const startBtn = document.getElementById("start");
const introContainer = document.getElementById("intro-container");
const timer = document.getElementById("timer");
const timerSpan = document.querySelector(".timer span");
console.log(timerSpan);

startBtn.addEventListener("click", () => {
  introContainer.style.display = "none";
  timer.style.display = "block";
  timerSpan.innerHTML = setInterval(() => {}, 1000);
});
