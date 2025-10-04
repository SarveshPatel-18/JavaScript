
let friendsName = ["Ajeet","Aman","Arbaj","Aditya","Abhishek","Keshari","vikas","Kamal","Kunal","Amit","Ayansh"];

let cities = ["Gorakhpur","Deoria","Pune","Hydrabad","Agra","Jaunpur","Ambala"];

// console.log(friendsName.length);

// for (let i = 0; i < friendsName.length; i++) {
//     console.log(friendsName[i]);
// }


// With using For Of loops

for (let Name of friendsName) {
    console.log(Name);
}

for (const City of cities) {
    console.log(City.toUpperCase());
}