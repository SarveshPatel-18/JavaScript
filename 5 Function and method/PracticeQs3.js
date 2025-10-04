// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let stuMarks = [45,94,95,67,87,65,32,97,99,100];

let ninetyPlus = stuMarks.filter(num => num > 90);

console.log(`The 90+ Student marks are ${ninetyPlus}`);


/* Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array. */

let numberN = Number(prompt("Enter the Number: "));

let arr = [1];

for (let i = 1; i <= numberN; i++) {
    arr[i-1] = i;
}
console.log(arr);

let allNumSum = arr.reduce((total, sum) => total + sum)
let multiply = arr.reduce((total, multiply) => total * multiply)

console.log(`The multiply of all number is ${allNumSum}`)
console.log(`The multiply of all number is ${multiply}`)