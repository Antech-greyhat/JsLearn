function isLeapYear(num) {
  // Check the conditions in order of most specific (400) to least specific (4)
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    return num + " is a leap year.";
  } else {
    return num + " is not a leap year.";
  }
}

// Declare the year variable
let year = 2024;

// Call the function and assign to result
let result = isLeapYear(year);

// Output the result
console.log(result);