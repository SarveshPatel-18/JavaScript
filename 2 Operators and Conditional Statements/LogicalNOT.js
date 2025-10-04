// Logical Operator
// Converts true to false and false to true.

let a = 5;
let b = 8;
 
console.log ("!(5 > 8) = ", !(a > b));

// Some Real life Examples --->

/* 📚 1. होटल में डिस्काउंट (Restaurant Discount Eligibility)
अगर कोई व्यक्ति मेम्बर नहीं है, तो उसे डिस्काउंट नहीं मिलेगा। */

let isMember = false;

if (!isMember) {
    console.log("❌ आपको कोई डिस्काउंट नहीं मिलेगा।");
} else {
    console.log("🎉 आपको डिस्काउंट मिलेगा!");
}

// Output: ❌ आपको कोई डिस्काउंट नहीं मिलेगा।


/*💼 2. नौकरी के लिए आवेदन (Job Application Check)
अगर किसी व्यक्ति के पास डिग्री नहीं है, तो वह नौकरी के लिए आवेदन नहीं कर सकता। */

let hasDegree = false;

if (hasDegree) {
    console.log("❌ आप नौकरी के लिए आवेदन नहीं कर सकते।");
} else {
    console.log("💼 आप नौकरी के लिए आवेदन कर सकते हैं!");
}

// Output: ❌ आप नौकरी के लिए आवेदन नहीं कर सकते।
