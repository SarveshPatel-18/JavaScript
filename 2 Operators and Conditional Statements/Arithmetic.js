let a = 15, b = 2;

console.log("sum =", a + b);

console.log("Subtraction =", a - b);

console.log("Multiplication =", a * b); 

console.log("Division =", a / b);

console.log("Remainder =", a % b);

console.log("Exponentiation =", a ** b);

// There are two types of Unary Operator
// 1. Increment

// console.log("Increment =", a + 1); 
//and we can also write a++ (Post Increment) for increment the value of a and after that i print console.log(a); 

// 2. Decrement

// console.log("Decrement =", a - 1);
//and we can also write a-- (Post Decrement) for Decrement the value of a and after that i print console.log(a);

console.log(++a); //(Pre Increment)
console.log(--a); //(Pre Decrement)

// Some Reallife Examples --->

//🚗 1. गाड़ी की स्पीड कैलकुलेशन (Speed Calculation)

let distance = 150; // किलोमीटर
let time = 3; // घंटे

let speed = distance / time; // स्पीड = दूरी ÷ समय
console.log("Car Speed:", speed, "km/h");  
// Output: Car Speed: 50 km/h


// 🍔 2. बिल का कुल योग (Total Bill Calculation)

let burgerPrice = 100; // 1 बर्गर की कीमत
let quantity = 3; // कितने बर्गर

let totalBill = burgerPrice * quantity; // कुल कीमत = कीमत × संख्या
console.log("Total Bill:", totalBill, "रुपये");  
// Output: Total Bill: 300 रुपये


// 🏏 3. क्रिकेट में स्ट्राइक रेट कैलकुलेशन (Strike Rate Calculation)

let runs = 75;
let ballsFaced = 50;

let strikeRate = (runs / ballsFaced) * 100; // स्ट्राइक रेट = (रन ÷ गेंदें) × 100
console.log("Strike Rate:", strikeRate);
// Output: Strike Rate: 150


// 💰 4. वेतन में बोनस जोड़ना (Salary Bonus Calculation)

let salary = 40000;
let bonus = 5000;

let totalSalary = salary + bonus; // कुल वेतन = वेतन + बोनस
console.log("Total Salary:", totalSalary, "रुपये");  
// Output: Total Salary: 45000 रुपये


// 🍕 5. दोस्तों में समान रूप से खाना बांटना (Dividing Food Among Friends)

let pizzaSlices = 10;
let friends = 4;

let slicesPerFriend = pizzaSlices / friends; // प्रत्येक दोस्त को मिलने वाले स्लाइस
let remainingSlices = pizzaSlices % friends; // बचा हुआ स्लाइस

console.log("Each friend gets:", slicesPerFriend, "slices");  
console.log("Remaining slices:", remainingSlices);  

// Output: Each friend gets: 2.5 slices
// Output: Remaining slices: 2


