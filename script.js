// Get the elements for hours, minutes, and seconds by their IDs
let Hours = document.getElementById("Hours");
let Minutes = document.getElementById("Minutes");
let Seconds = document.getElementById("Seconds");

// Set up a timer that updates the time every second
setInterval(() => {
  // Get the current time
  let currentTime = new Date();

  // Function to format time units (adds a leading zero if the unit is less than 10)
  function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
  }

  // Update the HTML content of the hours, minutes, and seconds elements
  Hours.innerHTML = formatTimeUnit(currentTime.getHours());
  Minutes.innerHTML = formatTimeUnit(currentTime.getMinutes());
  Seconds.innerHTML = formatTimeUnit(currentTime.getSeconds());
}, 1000);
