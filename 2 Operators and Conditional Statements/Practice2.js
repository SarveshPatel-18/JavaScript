let stuScore = prompt("Enter your Score (0-100)");
// let Grade;

if(stuScore >= 90 && stuScore <= 100) {
    console.log("The student Grade is a");
}

else if(stuScore >= 70 && stuScore <= 89) {
    console.log("The student Grade is B");
}

else if(stuScore >= 60 && stuScore <= 69) {
    console.log("The student Grade is c");
}

else if(stuScore >= 50 && stuScore <= 59) {
    console.log("The student Grade is d");
}

else if (stuScore >= 0 && stuScore <= 49) {
    console.log("The student Grade is F");
}