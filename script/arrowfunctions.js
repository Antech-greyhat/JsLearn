// Lesson: Arrow functions in JavaScript

// A normal function uses the "function" keyword
function addNormal(a, b) {
  return a + b;
}

// An arrow function does the same thing with shorter syntax
const addArrow = (a, b) => {
  return a + b;
};

// If the function just returns one thing, we can drop the braces and "return"
const addShort = (a, b) => a + b;

console.log("Normal:", addNormal(2, 3));
console.log("Arrow:", addArrow(2, 3));
console.log("Short:", addShort(2, 3));

// With a single parameter, the parentheses are optional
const double = n => n * 2;
console.log("Double 5:", double(5));

// With no parameters, we still need empty parentheses
const sayHi = () => "Hi there!";
console.log(sayHi());

// Arrow functions are great as arguments to other functions
const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n * n);
console.log("Squared:", squared);
