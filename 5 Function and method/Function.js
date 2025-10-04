function Myfunc() {
    console.log("Sarvesh");
    console.log("Sachin");
    console.log("Aditya");
    console.log("Aman");
}

Myfunc();

function isValidEmail(email) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false


// This function converts Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25)); // 77°F

// This function finds the largest number in an Array

function findMax(numbers) {
    return Math.max(...numbers);
}

console.log(findMax([10, 5, 8, 20, 3])); // 20


// 4️⃣ Check if a Number is Even or Odd 🔄

function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(10)); // Even
console.log(isEven(7));  // Odd

// 5️⃣ Fetch Data from an API (Asynchronous Function) 🌍
async function fetchUserData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
}

fetchUserData();
