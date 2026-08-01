// Lesson: Map and Set data structures

// A Set is a collection that only stores unique values (no duplicates)
const uniqueNumbers = new Set();

// .add() puts a value in the set
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(2); // this duplicate is ignored
uniqueNumbers.add(3);

console.log("Set contents:", uniqueNumbers);
console.log("Set size:", uniqueNumbers.size);

// .has() checks if a value exists in the set
console.log("Has 2?", uniqueNumbers.has(2));

// A quick trick: remove duplicates from an array using a Set
const withDuplicates = [1, 1, 2, 3, 3, 3, 4];
const deduped = [...new Set(withDuplicates)];
console.log("Deduped array:", deduped);

// A Map stores key-value pairs, and keys can be any type
const scores = new Map();

// .set() adds or updates a key-value pair
scores.set("Alice", 90);
scores.set("Bob", 85);
scores.set("Carol", 95);

// .get() reads the value for a key
console.log("Alice's score:", scores.get("Alice"));

// .has() checks if a key exists
console.log("Has Bob?", scores.has("Bob"));

// .size tells us how many pairs are stored
console.log("Number of players:", scores.size);

// We can loop over a Map's key-value pairs
for (const [player, score] of scores) {
  console.log(`${player} scored ${score}`);
}

// .delete() removes a key-value pair
scores.delete("Bob");
console.log("After deleting Bob:", scores.has("Bob"));
