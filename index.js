// Initial scores
let homeScore = 0;
let guestScore = 0;

// Function to increase score
function increaseScore(team) {
  if (team === "home") {
    if (homeScore < 99) {
      homeScore += 1;
      document.getElementById("home-score").textContent = homeScore;
    } else {
      homeScore = 0;
    }
  } else if (team === "guest") {
    if (guestScore < 99) {
      guestScore += 1;
      document.getElementById("guest-score").textContent = guestScore;
    } else {
      guestScore = 0;
    }
  }
}

// Function to reset scores
function resetScores() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").textContent = homeScore;
  document.getElementById("guest-score").textContent = guestScore;
}
