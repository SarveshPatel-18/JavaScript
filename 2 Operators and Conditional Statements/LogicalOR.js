/* If at least one condition is true, it returns true.
If both conditions are false, it returns false. */

let a = 45, b = 55;



let cond1 = 45 > 55;
let cond2 = a === 70;

console.log("Cond1 || Cond2 = ", cond1 || cond2);

let isWeekend = true;
let isHoliday = false;

console.log("isWeekend || isHoliday=", isWeekend || isHoliday); // Output: true (because at least one is true)

let age = 50;

if (age < 18 || age > 60) {
    console.log("You are not eligible to vote.");
} else {
    console.log("You can vote.");
}
// Output: "You are not eligible to vote." (because age < 18 is true)

let username = "" || "Guest"; 
console.log(username); // Output: "Guest" (because "" is falsy)

console.log(false || 0 || "Hello" || 42); 
// Output: "Hello" (because it's the first true value)

// Some Real life Examples --->

/* 🎟 1. मूवी टिकट खरीदना (Movie Ticket Booking)
मान लीजिए, आप मूवी के लिए ऑनलाइन टिकट खरीदना चाहते हैं।
अगर आपके पास डेबिट कार्ड या क्रेडिट कार्ड है, तो आप टिकट खरीद सकते हैं। */

let hasDebitCard = false;
let hasCreditCard = true;

if (hasDebitCard || hasCreditCard) {
    console.log("You can buy Ticket! 🎟");
} else {
    console.log("You have not any option of Payment");
}

// Output: You can buy Ticket! 🎟

/*🚦 2. ट्रैफिक लाइट नियम (Traffic Light Rules)
मान लीजिए, सड़क पर आप केवल ग्रीन लाइट या येलो लाइट पर जा सकते हैं।

अगर ग्रीन लाइट जल रही है या येलो लाइट है, तो आप आगे बढ़ सकते हैं। */

let isGreenLight = false;
let isYellowLight = true;

if (isGreenLight || isYellowLight) {
    console.log("You Can Drive 🚗");
} else {
    console.log("Stop 🛑");
}

// Output: You Can Drive 🚗

/* 📚 4. स्कूल में परीक्षा पास करना (Passing Exam in School)
मान लीजिए, एक छात्र को परीक्षा पास करने के लिए Maths या Science में से किसी एक में पास होना जरूरी है। */

let passedMaths = false;
let passedScience = false;

if (passedMaths || passedScience) {
    console.log("Student is Passed in Exam 🎉");
} else {
    console.log("Student is failed 😢");
}

// Output: "Student is Passed in Exam 🎉"


