// This script demonstrates how to throw an error in JavaScript when a specific condition is met.
function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
}


//throwing a custom error with a message
function validateNumber(input) {
  if (typeof input !== "number") {
    throw new TypeError("Expected a number, but received " + typeof input);
  }
  return input * 2;
}