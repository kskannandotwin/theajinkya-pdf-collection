// how do you create an object in javascript?

// Objects can be created using curly braces {}

let person = {
  name: "Alice",
  age: 20,
  occupation: "Developer",
};

// how do you access the properties of an object?

// properties can be accessed using dot notation or bracket notation

console.log(person.name);

// how do you add a new property to an existing object?

// add a property using dot natatin or bracket notation

person.country = "India";
person["email"] = "alice@gmail.com";
console.log(person);

// how do you delete a property from an object?

// use the delete operator to remove a property

delete person.occupation;
console.log(person);

// how do you check if an object contains a specific property?

// use the in operator or hasOwnProperty method

console.log("name" in person);
console.log(person.hasOwnProperty("age"));

// how can you iterate over the properties of an object?

// use for...in loop to iterate over object properties

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// how do you create a copy of an object?

// use Object.assign or spread syntax {...} to create a shallow copy

let copyOfPerson = Object.assign(person); // Object.assign({}, person)
console.log(copyOfPerson);

// how do you merge two objects?

// merge objects using Object.assign or spread syntax

let additionalInfo = { gender: "female", city: "Madurai" };
let mergedObjects = Object.assign(copyOfPerson, additionalInfo); // Object.assign({}, copyOfPerson, additionalInfo)
let anotherMerged = {
  ...copyOfPerson,
  ...additionalInfo
}
console.log(mergedObjects, anotherMerged);

// how do you find the number of properties in an object?

// use object.keys() to get an array of properties and then find its length.

let list = Object.keys(person);
console.log(list.length);

// how do you prevent modifications to an object?

// use Object.freeze() to make an object immutable

Object.freeze(person);