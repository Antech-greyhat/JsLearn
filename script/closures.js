// Lesson: Closures (functions that remember their scope)

// A closure is a function that "remembers" variables from where it was created
// even after that outer function has finished running

// This outer function creates and returns an inner function
function makeCounter() {
  // "count" lives inside makeCounter
  let count = 0;

  // The returned function still has access to "count" — that is the closure
  return function () {
    count = count + 1;
    return count;
  };
}

// Each call to makeCounter() gets its own private "count"
const counterA = makeCounter();
console.log("A:", counterA()); // 1
console.log("A:", counterA()); // 2
console.log("A:", counterA()); // 3

// This is a separate counter with its own independent count
const counterB = makeCounter();
console.log("B:", counterB()); // 1

// Closures let us build functions with pre-set values
function multiplyBy(factor) {
  // The inner function remembers "factor"
  return function (number) {
    return number * factor;
  };
}

const triple = multiplyBy(3);
const tenTimes = multiplyBy(10);

console.log("Triple 5:", triple(5));   // 15
console.log("Ten times 5:", tenTimes(5)); // 50

// Closures are useful for keeping data private and safe from outside changes
function createBankAccount(startingBalance) {
  let balance = startingBalance;

  return {
    deposit(amount) {
      balance = balance + amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(100);
console.log("After deposit:", account.deposit(50)); // 150
console.log("Balance:", account.getBalance());      // 150
