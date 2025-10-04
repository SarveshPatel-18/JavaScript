let fullName = "Sarvesh Patel";
let age = 45;
let price = 456.45;
let x = null;
let y = undefined;
let ishandsome = true;
const PI = 3.14;
let z = BigInt(456);
let d = Symbol("Hello")

// console.log("fullName");
console.log(fullName);
console.log(age);
console.log(x);
console.log(Math.floor(price));
console.log(typeof(PI));

console.log(typeof(undefined));
console.log(typeof(ishandsome));

console.log(z);
console.log(typeof(z));

console.log (d);
console.log (typeof(d));

{
    let a = 84;
    console.log (a); //it is a Block
}

{
    let a = 87;
    console.log (a); //it is another block so thats why we can redeclared the same variable is let a 
}