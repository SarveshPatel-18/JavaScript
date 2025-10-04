/* Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS. */

// let h2 = document.querySelector("h2");

// // console.dir(h2.innerText);

// h2.innerText = h2.innerText + "\nFrom Apna College Students"


/* Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them. */


let divs = document.querySelectorAll(".box")

let idx = 1;
for (div of divs) {
    div.innerText = `New Unique Value of Boxes ${idx}`;
    // console.log(element);
    idx++;
}


// console.dir(div[0]);
// div[0].innerText = div[0].innerText + "New Unique Value Box 1"

// div[1].innerText = div[1].innerText + "New Unique Value Box 2"

// div[2].innerText = div[2].innerText + "New Unique Value Box 3"