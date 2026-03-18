// Initialize the empty array
let lunches = [];

// 1. Add to the end
function addLunchToEnd(arr, item) {
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return arr;
}

// 2. Add to the start
function addLunchToStart(arr, item) {
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return arr;
}

// 3. Remove from the end
function removeLastLunch(arr) {
  const removedItem = arr.pop();
  if (removedItem) {
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

// 4. Remove from the start
function removeFirstLunch(arr) {
  const removedItem = arr.shift();
  if (removedItem) {
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

// 5. Get a random lunch
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(`Randomly selected lunch: ${item}`);
  }
}

// 6. Show the full menu
function showLunchMenu(arr) {
  if (arr.length > 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}