// Lesson: Promises and async/await

// A Promise represents a value that will be ready later, not right now
// This function returns a promise that resolves after a short delay
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    // setTimeout fakes a slow network request
    setTimeout(() => {
      if (id > 0) {
        // resolve() means the promise succeeded
        resolve({ id: id, name: "User " + id });
      } else {
        // reject() means the promise failed
        reject("Invalid user id");
      }
    }, 500);
  });
}

// Using .then() to handle a successful promise, and .catch() for errors
fetchUser(1)
  .then(user => console.log("Got user with .then():", user))
  .catch(error => console.log("Error:", error));

// async/await is a cleaner way to work with the same promise
// The "async" keyword lets us use "await" inside the function
async function showUser(id) {
  try {
    // "await" pauses until the promise resolves, then gives us the value
    const user = await fetchUser(id);
    console.log("Got user with await:", user);
  } catch (error) {
    // A rejected promise is caught here, just like a thrown error
    console.log("Caught error:", error);
  }
}

showUser(2);
showUser(-1);
