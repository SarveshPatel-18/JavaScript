let marks = [45,58,78,98,84];

console.log(marks);
console.log(marks[3]);
console.log(marks[3]=100); // We can change the Value of Array Using this Property

console.log(marks);

console.log(marks.length);

let heroName = ["Sarvesh","Sachin","Alex","Jhonny"];
console.log(heroName);
console.log(heroName[2]="Aman"); // String is Only Change in array Because Array is Mutable.
console.log(heroName);
console.log(typeof(heroName));


// Real Life Example of an Array

let shoppingCart = ["Apple", "Banana", "Orange"];

// Adding an item to the cart
shoppingCart.push("Mango");  
console.log (shoppingCart);

// Removing the last item
// shoppingCart.pop();  

// Checking if a specific item is in the cart
console.log(shoppingCart.includes("Banana")); // true

// Looping through the cart
shoppingCart.forEach(item => console.log(item));
