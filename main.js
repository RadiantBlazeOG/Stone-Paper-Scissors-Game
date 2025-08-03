let choice = document.querySelectorAll(".choice");
let user = document.querySelector("#you");
let computer = document.querySelector("#computer");
let scoreboard = document.querySelectorAll(".scoreboard");

let userScore = 0;
let computerScore = 0;

const randomComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.random() * choices.length;
  return choices[Math.floor(randomIndex)];
};

choice.forEach((box) => {
  box.addEventListener("click", function () {
    const yourChoice = box.querySelector("img").alt;
    const computerChoice = randomComputerChoice();
    scoreboard.forEach((score) => {
      score.innerText = `You chose: ${yourChoice} & Computer chose: ${computerChoice}`;
    });

     if (yourChoice === computerChoice) {
      scoreboard.forEach((score) => {
        score.innerText = "It's a tie!";
        score.style.backgroundColor = "#1b263b"
      });
    } else if (
      (yourChoice === "Rock" && computerChoice === "Scissors") ||
      (yourChoice === "Paper" && computerChoice === "Rock") ||
      (yourChoice === "Scissors" && computerChoice === "Paper")
    ) {
      userScore++;
      user.innerText = `You ${userScore}`;
      scoreboard.forEach((score) => {
        score.innerText = `You win! ${yourChoice} beats ${computerChoice}`;
        score.style.backgroundColor = "green";
      });
    } else {
      computerScore++;
      computer.innerText = `Computer ${computerScore}`;
      scoreboard.forEach((score) => {
        score.innerText = `You lose! ${computerChoice} beats ${yourChoice}`;
        score.style.backgroundColor = "red";
      });
    }
  });
});


  