let text = "JavaScript";
console.log(text.slice(4, 10));  // Output: "Script"
console.log(text.slice(-6, -1)); // Output: "Scrip"


let str = `0123456789`
console.log(str.slice(0,5)) //it is not include end index(5)

/*Real-Life Example: Extracting Book Titles in an Online Bookstore*/
let bookTitle = "The Alchemist - Paulo Coelho";
let titleOnly = bookTitle.slice(0, bookTitle.indexOf("-")).trim();  

console.log(titleOnly);  // Output: "The Alchemist"
