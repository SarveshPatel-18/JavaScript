/* 👉 Adds a new child element to the end of a parent element.(Inside) */

let el = document.createElement("button");
el.innerText = "Click!"
console.log(el);

let div = document.querySelector("div");
// div.append(el);
// div.prepend(el) /* 3. Using prepend()
/*👉 Inserts the element at the beginning of the parent element */ 

// div.before(el)  /*4. Using insertBefore()
/* 👉 Inserts an element before a specific child element. */


div.after(el)

let btn = document.querySelector("button");

btn.style.backgroundColor = "Yellow";

let newHeading = document.createElement("h1")
newHeading.innerHTML = "<i> Hello im a new Heading </i>"

document.querySelector("body")
document.body.prepend(newHeading);

// Delete Element //

let para = document.querySelector("p")
para.remove(para)


/* 1. Using appendChild()*/
let parent = document.getElementById("container"); // Get parent element

// let newElement = document.createElement("p"); // Create new <p> element
// newElement.textContent = "This is a new paragraph."; // Add text content

parent.appendChild(newElement); // Append to parent