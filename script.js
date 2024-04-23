const timeDisplay = document.getElementById("time");
const dateDisplay = document.getElementById("date");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timerInterval;
let startTime;
let elapsedTime = 0;

function startTimer() {
 startTime = Date.now() - elapsedTime;
 timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
 const currentTime = Date.now();
 elapsedTime = currentTime - startTime;
 const formattedTime = formatTime(elapsedTime);
 timeDisplay.textContent = formattedTime;
}

function stopTimer() {
 clearInterval(timerInterval);
 elapsedTime = Date.now() - startTime;
}

function resetTimer() {
 clearInterval(timerInterval);
 elapsedTime = 0;
 timeDisplay.textContent = "00:00:00";
}

function formatTime(time) {
 const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
 const minutes = Math.floor((time / 1000 / 60) % 60).toString().padStart(2, "0");
 const hours = Math.floor((time / 1000 / 60 / 60) % 24).toString().padStart(2, "0");
 return `${hours}:${minutes}:${seconds}`;
}

function displayDateTime() {
 const now = new Date();
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 const formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);
 const formattedTime = now.toLocaleTimeString('en-US');
 timeDisplay.textContent = formatTime(elapsedTime);
 dateDisplay.textContent = `${formattedDate} ${formattedTime}`;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
setInterval(displayDateTime, 1000);
