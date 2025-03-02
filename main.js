// Team - A SectionF
let count = 0;

function updateCounterDisplay () {
    document.getElementById("counter-display-a").textContent = count;
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
      document.getElementById("counter-display-a").textContent = scoreNumber;
    }
}

function teamName() {
    const namePrompt = prompt("Please enter the team name.");
    document.getElementById("change-team-name-a").textContent = namePrompt;
}

//Team - B Section
function updateCounterDisplay2 () {
    document.getElementById("counter-display-b").textContent = count;
}

function increase2() {
    count++;
    updateCounterDisplay2();
}

function decrease2() {
    if (count > 0) {
        count--;
        updateCounterDisplay2();
    } else {
        alert("Score cannot go below zero!");
    }
}

function reset2() {
    count = 0;
    updateCounterDisplay2();
}

function score2() {
    const scorePrompt = prompt("Please enter the score you want to input.");
    const scoreNumber = parseInt(scorePrompt);

    if (isNaN(scoreNumber)) {
      alert("You cannot enter the score as a letter.");
    } else if (scoreNumber <= 0){
        alert("You cannot enter a negative score.");
    } else {
      document.getElementById("counter-display-b").textContent = scoreNumber;
    }
}

function teamName2() {
    const namePrompt = prompt("Please enter the team name.");
    document.getElementById("change-team-name-b").textContent = namePrompt;
}
