
class ToyotaCar {
    constructor () {
        console.log("creating new object");
    }
    start () {
        console.log("Start");
        
    }
    stop () {
        console.log("Stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar(); // New (it is a keyword to create object through classes)
fortuner.setBrand("fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("lexus");

console.log(lexus);