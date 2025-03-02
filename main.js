// Team - A Section
let count = 0;

function updateCounterDisplay () {
    document.getElementById("counter-display").textContent = count;
}

function increase() {
    count++;
    updateCounterDisplay();
}

function decrease() {
    if (count > 0) {
        count--;
        updateCounterDisplay();
    } else {
        alert("Score cannot go below zero!");
    }
}

function reset() {
    count = 0;
    updateCounterDisplay();
}

function score() {
    const scorePrompt = prompt("Please enter the score you want to input.");
    const scoreNumber = parseInt(scorePrompt);

    if (isNaN(scoreNumber)) {
      alert("You cannot enter the score as a letter.");
    } else if (scoreNumber <= 0){
        alert("You cannot enter a negative score.");
    } else {
      document.getElementById("counter-display").textContent = scoreNumber;
    }
}

function teamName() {
    const namePrompt = prompt("Please enter the team name.");
    document.getElementById("change-team-name").textContent = namePrompt;
}

//Team - B Section

