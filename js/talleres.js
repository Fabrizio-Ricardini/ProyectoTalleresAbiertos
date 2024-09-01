const countdownDate = new Date("2024-09-12T14:00:00").getTime();

const daysElement = document.getElementById("day");
const hoursElement = document.getElementById("hour");
const minutesElement = document.getElementById("min");
const secondsElement = document.getElementById("sec");
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}
const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();