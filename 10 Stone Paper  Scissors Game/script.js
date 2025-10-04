let userScore = 0;
let comScore = 0;


const choices = document.querySelectorAll(".choice");
let playMoves = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const getComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
  const randomIdx =   Math.floor(Math.random() * 3);
  return option[randomIdx]
};

const drawGame = () => {
    // console.log("Game is Draw!");
    playMoves.innerText = "Game is Draw, Play Again!"
    playMoves.style.backgroundColor = "yellow";
    playMoves.style.color = "black";
}

let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You win!!");
        playMoves.innerText = `You are Win ${userChoice} beats ${compChoice}`;
        playMoves.style.backgroundColor = "green";
        playMoves.style.color = "white";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else {
        // console.log("Computer is Win!!");
        playMoves.innerText = `Computer are Win ${compChoice} beats ${userChoice}`;
        playMoves.style.backgroundColor = "red";
        playMoves.style.color = "white";
        comScore++;
        compScorePara.innerText = comScore;
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
// console.log("Choices is clicked",userChoice);
playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    // console.log("User Choice = ", userChoice);
    const compChoice = getComputerChoice();
    // console.log("comt choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
         userWin = compChoice === "scissors" ? false : true;
        }
        else {
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
