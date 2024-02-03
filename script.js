// creating and accessing object properties

// create an object named car with properties make, model, and year.
// Then access and log the model property.

const car = {
  make: 'Maruti',
  model: '800',
  year: 1998
}
console.log(car.model);

// modifying object properties

// modify the year property of the car object to 2021.

car.year = 2021;

// deleting a property from an object

// remove the make property from the car object

delete car.make;

// iterating over object properties

// write a loop that logs all properties and their values of the car object.

for(let key in car) {
  console.log(key + ': ' + car[key]);
}

// checking property existence

// check if the car object has a property named model

console.log('model' in car);

// nested objects

// create an object person with properties name and address,
// where address is an object with properties street, city and zipcode.

let person = {
  name: 'Kannan',
  address: {
    street: 'maruthu pandiar',
    city: 'madurai',
    zipcode: 625022
  }
}

// copying an object

// create a shallow copy of the person object

let copyPerson = Object.assign(person);

// merging objects

// merge two objects, person and contactDetails(with properties
// email and phone) into a new object

let contactDetails = {
  email: 'dummy@gmail.com',
  phone: 5689475698
}

let mergedObjects = Object.assign(person, contactDetails);

// object keys and values

// get all keys and values from the person object separately and log them.

let keys = Object.keys(person);
let values = Object.values(person);
console.log(keys, values);