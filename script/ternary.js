// Lesson: The ternary operator (a shortcut for if/else)

// The pattern is: condition ? valueIfTrue : valueIfFalse
const age = 20;

// A normal if/else that picks a message
let messageLong;
if (age >= 18) {
  messageLong = "You are an adult.";
} else {
  messageLong = "You are a minor.";
}
console.log("Long way:", messageLong);

// The exact same logic written with a ternary in one line
const messageShort = age >= 18 ? "You are an adult." : "You are a minor.";
console.log("Short way:", messageShort);

// Ternaries are great inside template literals
const temperature = 30;
console.log(`It is ${temperature > 25 ? "hot" : "cool"} today.`);

// They can also decide a value to store in a variable
const score = 72;
const passed = score >= 50 ? true : false;
console.log("Passed the test?", passed);

// Ternaries can be nested, but keep them simple so they stay readable
const hour = 14;
const partOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
console.log("Part of day:", partOfDay);
