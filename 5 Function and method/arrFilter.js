// Example 1: Filtering Even Numbers

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5, 6]


// let array = [37,54,73,86,5,237,64]

// let oddNum = array.filter((oddNum) => {
//     return oddNum % 2 != 0;
// });

// console.log(oddNum);

let mixedArray = [0, "hello", "", null, undefined, 42, false, "JavaScript"];

let truthyValues = mixedArray.filter(Boolean);

console.log(truthyValues); // Output: ["hello", 42, "JavaScript"]

