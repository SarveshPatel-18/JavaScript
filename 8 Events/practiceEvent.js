let Mode = document.querySelector("#Mode");
let currentMode = "Light";

Mode.addEventListener("click",() => {
    // console.log("try to Change the Mode");
    if(currentMode === "Light") {
        currentMode = "dark";
        // document.querySelector("body").style.backgroundColor = "Black";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("white");

    }
    else {
        currentMode = "Light";
        // document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").classList.add("white");
        document.querySelector("body").classList.remove("dark");
    }
    // console.log(currentMode);
});