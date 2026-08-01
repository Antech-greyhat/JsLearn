// Lesson: Array higher-order methods (map, filter, reduce)

// Our starting data: a list of products
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Webcam", price: 90, inStock: false },
];

// .map() creates a new array by transforming each item
const names = products.map(product => product.name);
console.log("All names:", names);

// .map() can build any shape we want, like a price with a currency symbol
const priceTags = products.map(product => `$${product.price}`);
console.log("Price tags:", priceTags);

// .filter() keeps only the items that pass a test
const available = products.filter(product => product.inStock);
console.log("In stock:", available);

// We can chain methods: filter first, then map the results
const affordableNames = products
  .filter(product => product.price < 100)
  .map(product => product.name);
console.log("Affordable items:", affordableNames);

// .reduce() boils an array down to a single value
// The first argument is the running total, the second is the current item
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total price of all products:", totalPrice);

// .find() returns the first item that matches, or undefined
const firstCheap = products.find(product => product.price < 50);
console.log("First cheap item:", firstCheap);

// .some() returns true if at least one item passes the test
console.log("Any item over $1000?", products.some(product => product.price > 1000));

// .every() returns true only if all items pass the test
console.log("Are all items in stock?", products.every(product => product.inStock));
