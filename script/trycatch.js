// This script demonstrates how to use try-catch blocks in JavaScript to handle errors gracefully.
function processInput(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return input.toUpperCase();
}

try {
  console.log("Starting to process input...");
  const result = processInput(9);
  console.log("Processed result:", result);
} catch (error) {
  console.error("Error occurred:", error.message);
} finally {
  console.log("Finished processing input.");
}