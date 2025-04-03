const increaseScore = (team) => {
    const teamId = `score${team}`;
    const scoreElement = document.getElementById(teamId);

    let score = Number(scoreElement.innerHTML)
    scoreElement.innerHTML = ++score
};

const decreaseScore = (team) => {
    const teamId = `score${team}`;
    const scoreElement = document.getElementById(teamId);

    let score = +scoreElement.innerHTML;

    if (score > 0) {
        score--;
        scoreElement.innerHTML = score;
    } else {
        alert("Score cannot go below zero!")
    }
};

const setNamePrompt = (team) => {
    const name = prompt("Please enter the team name: ");

    if (name === null || name.trim() === "") {
        alert("You haven't entered any name!")
    } else {
        const teamId = `teamName${team}`;
        const teamNameElement = document.getElementById(teamId);
        teamNameElement.innerHTML = name;
    }
};

document.getElementById("resetButtonA").addEventListener("click", () => {
    document.getElementById("scoreA").innerHTML = 0;
    document.getElementById("teamNameA").innerHTML = "Team A";
});

document.getElementById("resetButtonB").addEventListener("click", () => {
    document.getElementById("scoreB").innerHTML = 0;
    document.getElementById("teamNameB").innerHTML = "Team B";
});

const setScorePrompt = (team) => {
  const score = prompt("Please enter the score you want to input: ");
  const scoreNum = Number(score);

  if (scoreNum < 0 || score === null || score.trim() === "" || !Number.isInteger(scoreNum)) {
    alert("Please enter a valid number.")
  } else {
    const teamId = `score${team}`;
    const scoreElement = document.getElementById(teamId);
    scoreElement.innerHTML = scoreNum;
  }
};
