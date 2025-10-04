let numbers = [1, 2, 3, 4];

numbers.forEach((element) => {
    console.log(element);
});
let doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4]


let names = ["alice", "bob", "charlie"];
let capitalizedNames = names.map(name => name.toUpperCase());

console.log(capitalizedNames.toString()); // Output: ["ALICE", "BOB", "CHARLIE"]
