let btn = document.querySelectorAll("button");

btn[0].addEventListener("click", () =>{
    console.log("Button Is Click");
}) 

// btn[0].addEventListener("click", () =>{
//     console.log("Button Is Click Againbtn");   //Removing by removeEventListener
// }) 


const Againbtn = () =>{
    console.log("Button Is Click - Againbtn");
}
btn[0].addEventListener("click", Againbtn)
btn[0].removeEventListener("click", Againbtn);



let box = document.getElementsByTagName("div");
// console.log(box);

box[0].addEventListener("dblclick", () => {
    console.log("The Div is Clicked")
    alert("The Div is Clicked 2 Time")
})
