
let employee = {
  calTax() {
    console.log("Tax rate is 10%");
  } 
}

let karanArjun = {
    salary : 50000,
    calTax() {
        console.log("Tax rate is 30%");
    }
};

let karanArjun2 = {
    salary : 50000,
};

let karanArjun3 = {
    salary : 50000,
    calTax() {
        console.log("Tax rate is 20%");
    }
};

let karanArjun4 = {
    salary : 50000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

console.log(karanArjun4.calTax());
console.log(karanArjun3.calTax());