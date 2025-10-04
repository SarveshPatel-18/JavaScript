// it is use for Array and String 

let str = "Sarvesh";
let size = 0;

for ( let val of str) { // iterator -> characters
    console.log(val);
    size++
}
console.log("String Size =" ,size);



let books = "book1";

for (let i of books) {
    console.log(i);
}