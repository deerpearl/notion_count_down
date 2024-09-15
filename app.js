// app.js
const countdownContainer = document.getElementById('countdown-container');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Set a future date for countdown (example: New Year's Eve)
const countdownDate = new Date('Dec 31, 2024 23:59:59').getTime();

// Update the countdown every second
const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000)) / 1000);

    // Output the results
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    // If the countdown is finished, display text
    if (distance < 0) {
        clearInterval(interval);
        countdownContainer.innerHTML = '<h1>Countdown Ended</h1>';
    }
}, 1000);
