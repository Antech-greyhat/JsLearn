// this script defines two animal objects, tiger and elephant, with properties such as species, age, and isEndangered. It also includes functions to get the species and age of an animal, add a habitat property, update the age, remove the endangered status, check if the animal has a habitat property, and get any property by name. The functions are then called with the tiger and elephant objects to demonstrate their functionality. it uses dot notation to access and modify properties of the animal objects and bracket notation to access properties dynamically based on the property name passed as an argument.
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};
console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));