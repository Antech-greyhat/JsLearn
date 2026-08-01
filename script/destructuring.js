// Lesson: Destructuring and the spread operator

// Destructuring pulls values out of an object into their own variables
const user = { name: "Kwame", age: 28, city: "Nairobi" };

// Instead of user.name and user.age, we grab them in one line
const { name, age } = user;
console.log("Name:", name);
console.log("Age:", age);

// We can rename while destructuring using a colon
const { city: location } = user;
console.log("Location:", location);

// Arrays destructure by position instead of by key
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log("First color:", first);
console.log("Second color:", second);

// The rest operator (...) collects the leftover items into an array
const [head, ...tail] = colors;
console.log("Head:", head);
console.log("Tail:", tail);

// The spread operator (...) copies items out of an array
const moreColors = [...colors, "yellow", "purple"];
console.log("More colors:", moreColors);

// Spread also works to merge objects together
const defaults = { theme: "light", fontSize: 14 };
const settings = { ...defaults, fontSize: 16 };
console.log("Merged settings:", settings);

// Destructuring is handy in function parameters too
function describe({ name, age }) {
  return `${name} is ${age} years old.`;
}
console.log(describe(user));
