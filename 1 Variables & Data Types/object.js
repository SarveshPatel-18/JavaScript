
let student = {
    FullName : "Sarvesh Patel",
    class : "BCA 3rd Year",
    age : 20,
    cgpa : 8.2,
    isPass : true,
}

console.log (student);
console.log(student["age"]);
console.log(student.class);
console.log (typeof(student));

student["age"] += 5;    //  ====> it is use for updation in age object 
console.log(student.age);

student ["FullName"] = "Sachin";
console.log(student["FullName"]);

console.log(student);

