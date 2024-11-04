// Initial scores
let homeScore = 0;
let guestScore = 0;

// Function to increase score
function increaseScore(team) {
    if (team === "home") {
        homeScore += 1;
        document.getElementById("home-score").textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 1;
        document.getElementById("guest-score").textContent = guestScore;
    }
}

// Function to reset scores
function resetScores() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
}
