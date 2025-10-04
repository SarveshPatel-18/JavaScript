/* Qs. Create a new button element. Give it a text “click me”, background color of red & text colorof white.
Insert the button as the first element inside the body tag. */

let create = document.createElement("button");
create.innerHTML = "Click me!";

create.style.backgroundColor = "red";
create.style.padding = "18px";
create.style.color = "white";

let body = document.querySelector("body");
body.prepend(create);



/* Qs. Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList. */

let p = document.querySelector("p");
p.setAttribute("class","createdClass");
p.classList.add("newcss");
// p.classList.remove("createdClass");

p.innerHTML = "Hello This is a New p tag created By JS!";

p.style.backgroundColor = "aquamarine";
p.style.color = "red";
p.style.height = "50px";
// p.style.justifyContent = "center"
p.style.textAlign = "center";
p.style.alignContent = "center";


// p.prepend(p);