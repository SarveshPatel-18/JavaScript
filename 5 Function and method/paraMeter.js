function Newfunc(msg, num) {
    console.log(msg,num);
}

Newfunc("I love Js",2000); // Argument

function sum() { 
    let a = Number(prompt("Enter the Number a: "))
    let b = Number(prompt("Enter the Number b: "))

    let sum = a+b;

    console.log(`The Sum of two num is ${sum}`);
}

sum();


function add(x,y) {
    s = x + y;
    return s;
    // console.log(x + y); // Unreachable code 
}

let value = add(5,4);
console.log(value);


function greet(name) {  // 'name' is a parameter
    console.log(`Hello, ${name}`);
}

greet("Sarvesh");