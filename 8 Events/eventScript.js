let btn = document.querySelectorAll("button");


btn[0].onclick = (evt) => {
    console.log("Button is Clicked!")
    // alert("Button is Clicked!")
    // console.log(evt.type);
    // console.log(evt.target);    // These are Event Object
    // console.log(evt.clientX, evt.clientY);
}

let box = document.querySelectorAll("div");
// console.log(box);

box[1].onmouseover = () => {
    console.log("you are inside ano div");
    // alert("you are inside ano div");
}