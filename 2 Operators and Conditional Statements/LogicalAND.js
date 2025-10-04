//Logical and (&&) Operator

let a = 45, b = 55;

let cond1 = 45 < 55;
let cond2 = a === 45;

console.log("Cond1 && Cond2 = ", cond1 && cond2);

let cond_1 = 45 > 55;
let cond_2 = a === 45;

console.log("Cond_1 && Cond_2 = ", cond_1 && cond_2); // it is return false because one cond is not true

// ---> Some Real life Example <---

/* 📚 1. ड्राइविंग लाइसेंस के लिए पात्रता (Driving License Eligibility)
किसी व्यक्ति को ड्राइविंग लाइसेंस तभी मिलेगा जब:
✔ उसकी उम्र 18 साल या उससे ज्यादा हो।
✔ उसने ड्राइविंग टेस्ट पास कर लिया हो। */

let age = 20;
let passedTest = true;

if (age >= 18 && passedTest) {
    console.log("🚗 आपको ड्राइविंग लाइसेंस मिलेगा!");
} else {
    console.log("❌ आप ड्राइविंग लाइसेंस के योग्य नहीं हैं।");
}

// Output: 🚗 आपको ड्राइविंग लाइसेंस मिलेगा!


/* 🏏 2. क्रिकेट में सेंचुरी बोनस (Cricket Century Bonus)
अगर किसी खिलाड़ी को बोनस मिलना है, तो:
✔ उसने 100+ रन बनाए हों।
✔ उसकी स्ट्राइक रेट 120 से ज्यादा हो। */

let runs = 105;
let strikeRate = 130;

if (runs >= 100 && strikeRate > 120) {
    console.log("🏏 आपको सेंचुरी बोनस मिलेगा!");
} else {
    console.log("😔 कोई बोनस नहीं मिलेगा।");
}

// Output: 🏏 आपको सेंचुरी बोनस मिलेगा!


