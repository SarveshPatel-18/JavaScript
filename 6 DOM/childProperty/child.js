let div = document.body.children[1]; // or document.querySelector("div");
console.log(div); // Logs the <div> element

let firstImg = div.children[0]; // First img
let secondImg = div.children[1]; // Second img
let heading = div.children[2]; // h1 element

// console.log(firstImg); // Logs first <img>
// console.log(secondImg); // Logs second <img>
// console.log(heading); // Logs <h1>

// console.log(div.firstChild); // Might log a text node (whitespace)
// console.log(div.firstElementChild); // Logs first <img>

// console.log(div.lastChild); // Might log a text node
// console.log(div.lastElementChild); // Logs <h1>

// 4. Looping Through All Children

// for (let child of div.children) {
//     console.log(child); // Logs each child element
// }
