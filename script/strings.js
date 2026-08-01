// Lesson: Working with strings in JavaScript

// A string is just text wrapped in quotes
const fullName = "Ada Lovelace";

// .length tells us how many characters are in the string
console.log("Length:", fullName.length);

// .toUpperCase() and .toLowerCase() change the casing
console.log("Upper:", fullName.toUpperCase());
console.log("Lower:", fullName.toLowerCase());

// .indexOf() returns the position of a character, or -1 if not found
console.log("Position of 'L':", fullName.indexOf("L"));

// .includes() checks if the string contains some text
console.log("Has 'Ada'?", fullName.includes("Ada"));

// .slice() grabs a piece of the string using start and end positions
console.log("First name:", fullName.slice(0, 3));

// .replace() swaps the first match with new text
console.log("Replaced:", fullName.replace("Ada", "Grace"));

// .trim() removes extra spaces from the start and end
const messy = "   hello world   ";
console.log("Trimmed:", messy.trim());

// .split() breaks a string into an array using a separator
const words = fullName.split(" ");
console.log("Split into words:", words);

// Template literals let us insert values with ${} inside backticks
const age = 36;
console.log(`${fullName} is ${age} years old.`);

// Strings can be joined together using the + operator
const greeting = "Hello, " + fullName + "!";
console.log(greeting);
