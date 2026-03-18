// 1. Define the function named maskEmail with the parameter email
function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  
  // Calculate asterisks: total username length minus the 2 characters we keep
  const mask = "*".repeat(username.length - 2);

  return firstChar + mask + lastChar + domain;
}

// 2. Outside the function, declare the variable named email
let email = "antech@example.com";

// 3. Log the output of calling the function
console.log(maskEmail(email));