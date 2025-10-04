 /* Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class. */

let marks_of_student = [85,97,44,37,76,60];
let sum = 0;

for (const value of marks_of_student) {
    console.log(value);
    sum += value;
}

console.log("sum = ", sum);

let average = sum/marks_of_student.length;

console.log(`Averge marks of class is ${average}`);
