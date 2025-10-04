let a = 10, b = 2, c = 8, d = 5, e = 7;

a += 10 // It means a = a + 4
b -= 10 // It means b = b - 4
c /= 4 // It means c = a / 4
d %= 4 // It means d = a %= 4
e **= 2 // It means e = a **= 4 Exponentiation

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);
console.log("d =", d);
console.log("e =", e);

// *** Some Real life Exmples --->

/* 👨‍🎓 1. छात्र की जानकारी स्टोर करना (Student Information Storage)
मान लीजिए, हमें किसी छात्र का नाम और कक्षा स्टोर करनी है। */

let studentName = "Ravi";   // छात्र का नाम असाइन किया
let studentClass = 10;     // छात्र की कक्षा असाइन की

console.log("Student Name:", studentName);  
console.log("Class", studentClass);  

// Output: 
// Student Name: Ravi
// Class 10


/* 🛒 2. ऑनलाइन शॉपिंग में डिस्काउंट (Shopping Discount Calculation)
मान लीजिए, एक प्रोडक्ट की कीमत ₹1,200 है, लेकिन उस पर ₹200 की छूट (Discount) मिल रही है। */

let originalPrice = 1200;   // असली कीमत
let discount = 200;         // छूट

let finalPrice = originalPrice - discount;  // अंतिम कीमत असाइन की
console.log(`After discount Price, ${finalPrice} Rs`);  

// Output: After discount Price 1000 Rs
