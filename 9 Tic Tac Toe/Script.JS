let button = document.querySelectorAll(".btn");
let reset = document.querySelector(".restart");
let playAgain = document.querySelector(".play");
let result = document.querySelector("#msg")
let decison = document.querySelector(".hide")
console.log(decison);

let turn_o = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const again = () => {
    turn_o = true;
    enbleGame();
    decison.classList.add("hide")
}

button.forEach((btn) => {
    btn.addEventListener("click",() => {
        // console.log("box is Clicked");/
        if (turn_o === true) {
            btn.innerText = "0"
            turn_o = false;
        }
        else {
            btn.innerText = "X"
            turn_o = true;
        }
        btn.disabled = true;

        checkWinner();
    });
});

const disableGame = () => {
    for (let box of button) {
        box.disabled = true;
    }
}


const enbleGame = () => {
    for (let box of button) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    result.innerText = `Congratulation winner Is ${winner}!`;
    decison.classList.remove("hide");
    disableGame();
}



const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = button[pattern[0]].innerText;
        let pos2Val = button[pattern[1]].innerText;
        let pos3Val = button[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);
                showWinner(pos1Val);

            }
        }
    };
};

playAgain.addEventListener("click", again);
reset.addEventListener("click", again);
