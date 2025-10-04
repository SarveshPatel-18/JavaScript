// Practice Qs - 1

/* Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value. */

let gameNum = 18;

let userNum = prompt("Guess the number :");

while(userNum != gameNum) {
    userNum = prompt("You Guess wrong no guess again")
}
console.log("Cogratulations! You guess the right no");
