let name_ = "JavaScript";
console.log(name_.toUpperCase()); // Output: "JAVASCRIPT"
console.log(name_.toLowerCase()); // Output: "javascript"

/* Real-Life Example: Formatting User Input
Imagine a user enters their email in mixed cases. We should convert it to lowercase for consistency. */

let userEmail = "User@Example.Com";
let formattedEmail = userEmail.toLowerCase();

console.log(formattedEmail);

/* trim() Method in JavaScript
The trim() method removes whitespace (spaces, tabs, newlines) from both the beginning and end of a string. */

let text = "   Hello, World!   ";
console.log(text.trim());


/* Example 2: Real-Life Use Case (User Input Validation)
When users enter their username or password, they may accidentally add spaces. trim() helps clean the input before saving it. */
let username = "   JohnDoe   ";
let cleanUsername = username.trim();

console.log(`Original: ${username}`);  
console.log(`Trimmed: ${cleanUsername}`);
