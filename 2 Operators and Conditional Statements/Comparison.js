let a = 30, b = '30'; // it is automatically convert String --> Number

console.log(a == b)

console.log(a != b)

console.log(a >= b)

console.log(a === b) // It is strictly check the value and datatype 

// *** Some Real Life Example -->

/* 📚 1. स्कूल में पास/फेल चेक करना (Pass/Fail in Exam)
अगर किसी छात्र को परीक्षा में पास होने के लिए कम से कम 35 अंक चाहिए, तो हम >= (greater than or equal to) ऑपरेटर से चेक कर सकते हैं। */

let marks = 40;  // छात्र के अंक

if (marks >= 35) {
    console.log("🎉 Student is Passed");
} else {
    console.log("😢 Student is failed");
}

// Output: 🎉 Student is Passed

/* 💰 2. सैलरी तुलना (Salary Comparison)
अगर दो व्यक्तियों की सैलरी की तुलना करनी हो, तो > (greater than) और < (less than) का उपयोग करेंगे। */

let salaryA = 50000;  // व्यक्ति A की सैलरी
let salaryB = 60000;  // व्यक्ति B की सैलरी

if (salaryA > salaryB) {
    console.log("💰 व्यक्ति A की सैलरी ज्यादा है।");
} else if (salaryA < salaryB) {
    console.log("💰 व्यक्ति B की सैलरी ज्यादा है।");
} else {
    console.log("💼 दोनों की सैलरी बराबर है।");
}

// Output: 💰 व्यक्ति B की सैलरी ज्यादा है।

