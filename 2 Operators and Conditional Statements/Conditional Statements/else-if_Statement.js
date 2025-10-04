let a = 45;
let b = 50;

if (a > b) {
    console.log("The num a Is greater");
}
else if (a < b) {
    console.log("The num b Is greater")
}
else {
    console.log("Both a and b are equal");
}


/* Real-Life Example of an else if Statement: Checking Traffic Light with Multiple Conditions
Imagine you're driving and need to decide whether to stop, slow down, or go based on the traffic light color. */

let trafficLight = "yellow"; // The current traffic light color

if (trafficLight === "red") {
  console.log("Stop! The light is red.");
  
} else if (trafficLight === "yellow") {
  console.log("Slow down! The light is yellow.");
  
} else if (trafficLight === "green") {
  console.log("Go! The light is green.");
  
} else {
  console.log("Invalid traffic light color.");
}
