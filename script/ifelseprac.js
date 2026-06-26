// Convert inputs to numbers right away using Number()
const marks1 = Number(prompt("Enter Marks one"));
const marks2 = Number(prompt("Enter Marks two"));
const marks3 = Number(prompt("Enter Marks three"));

const totalMarks = marks1 + marks2 + marks3;
const averageMarks = totalMarks / 3;

if (averageMarks >= 80) {
    console.log("you got grade A");
} else if (averageMarks >= 65) {
    console.log("you got grade B");
} else if (averageMarks >= 50) {
    console.log("you got grade C");
} else if (averageMarks >= 40) {
    console.log("you got grade D");
} else {
    console.log("you got grade F");
}