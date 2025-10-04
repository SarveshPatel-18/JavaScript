/* Qs. Create an array to store companies -> “Bloomberg” “Microsoft” “Uber” “Google” “IBM” “Netflix”

a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end */

let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

let Remove = company.shift();
console.log(`The Remove Company is ${Remove}`)

company.splice(1,1,"Ola");

company.push("Amazon");

console.log(company);
console.log(company.toString());