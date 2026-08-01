// Lesson: Classes and objects

// A class is a blueprint for creating objects with the same shape
class Animal {
  // The constructor runs when we create a new object with "new"
  constructor(name, sound) {
    // "this" refers to the specific object being created
    this.name = name;
    this.sound = sound;
  }

  // Methods are functions that belong to the class
  speak() {
    return `${this.name} says ${this.sound}`;
  }
}

// "new" builds a fresh object from the blueprint
const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");

console.log(dog.speak());
console.log(cat.speak());

// A class can "extend" another to reuse and add behavior (inheritance)
class Dog extends Animal {
  constructor(name) {
    // "super" calls the parent Animal constructor
    super(name, "Woof");
  }

  // A subclass can add its own methods
  fetch() {
    return `${this.name} fetches the ball!`;
  }
}

const rex = new Dog("Rex");
console.log(rex.speak()); // inherited from Animal
console.log(rex.fetch()); // defined on Dog

// A subclass can override a parent method with its own version
class Cat extends Animal {
  constructor(name) {
    super(name, "Meow");
  }

  // This replaces the inherited speak() method
  speak() {
    return `${this.name} ignores you politely.`;
  }
}

const whiskers = new Cat("Whiskers");
console.log(whiskers.speak());
