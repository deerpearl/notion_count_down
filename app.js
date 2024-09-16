// script.js
let countdownInterval;

document.getElementById('start-button').addEventListener('click', startCountdown);
document.getElementById('reset-button').addEventListener('click', resetCountdown);

const popupModal = document.getElementById('popup-modal');
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
  popupModal.style.display = 'none';
});

function startCountdown() {
  const hoursInput = document.getElementById('hours').value || 0;
  const minutesInput = document.getElementById('minutes').value || 0;
  const secondsInput = document.getElementById('seconds').value || 0;

  let totalSeconds = parseInt(hoursInput) * 3600 + parseInt(minutesInput) * 60 + parseInt(secondsInput);

  if (totalSeconds <= 0) {
    alert("Please enter a valid countdown time.");
    return;
  }

  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      showPopup();
      return;
    }

    totalSeconds--;
    displayTime(totalSeconds);
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdownInterval);
  document.getElementById('countdown-display').textContent = "00:00:00";
  document.getElementById('hours').value = "";
  document.getElementById('minutes').value = "";
  document.getElementById('seconds').value = "";
}

function displayTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById('countdown-display').textContent =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function showPopup() {
  popupModal.style.display = 'flex';
}
