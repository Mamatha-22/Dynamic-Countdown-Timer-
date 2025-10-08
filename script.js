let countdownInterval;

document.getElementById('start-btn').addEventListener('click', () => {
  const input = document.getElementById('event-date').value.trim();

  // Check if user selected a date
  if (!input) {
    alert('Please select a date and time!');
    return;
  }

  // Convert input into a Date object
  let targetDate = new Date(input);

  // If time is missing (NaN), add 00:00:00 as default
  if (isNaN(targetDate.getTime())) {
    targetDate = new Date(`${input}T00:00:00`);
  }

  // Check again if valid date
  if (isNaN(targetDate.getTime())) {
    alert('Invalid date! Please select a valid date and time.');
    return;
  }

  // Clear any previous countdowns
  clearInterval(countdownInterval);
  document.getElementById('message').textContent = '';

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    // When countdown finishes
    if (diff <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      document.getElementById('message').textContent = "🎉 Time's up!";
      return;
    }

    // Time calculations
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Update display
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }, 1000);
});
