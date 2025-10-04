
let veggis = ["Tomato","potato","Mango","Litchi","Apple"];

veggis.push("Strawberry","Burger","Paneer");
console.log(veggis);


let deletedveg = veggis.pop();
console.log(veggis);
console.log(`the deleted veg is ${deletedveg}`);

for (let name of veggis) {
    console.log(name);
}