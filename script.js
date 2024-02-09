// Declare two variables, num1 and num2, and
// assign them numeric values. Add these two variables and
// store the result in a third variable named sum.

let num1 = 5;
let num2 = 10;
const sum = num1 + num2;
console.log(sum);

// Create a variable greeting and assign it a string
// value. Then create another variable name and assign it a
// string. Concatenate these two variables and print the
// result.

let greeting = 'Hello';
let name = 'Kannan';
console.log(greeting  + ' ' + name);

// Declare a variable isValid and assign it a boolean
// value. Check if isValid is true, and if so, print "Valid".
// Otherwise, print "Invalid".

let isValid = true;
if(isValid) {
    console.log('Valid');
} else {
    console.log('Invalid');
}

// Write a JavaScript program to swap the values
// of two variables a and b.

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

// Create a variable undefinedVar without
// assigning any value to it. Print its value and data type.

let undefinedVar;
console.log(undefinedVar);
console.log(typeof undefinedVar);

// Declare a constant PI and assign it the value of
// 3.14. Attempt to reassign it to a different value and
// observe the result.

const PI = 3.14;
// PI = 314;
// console.log(PI); // make it error

// Create a variable nullVar and explicitly set its
// value to null. Print its type.

let nullVar = null;
console.log(typeof nullVar);

// Convert the string "123" into a number without
// using any built-in JavaScript

let string = '123';
let num = +string;
console.log(typeof num);

// Create an array with four different data types
// (string, number, boolean, and null), and print the array
// and its length.

let arr = ['hi', 123, true, null];
console.log(arr.length);

// Declare a variable count with a number value.
// Use the typeof operator to check its type, change the
// value to a string, and check its type again.

let count = 10;
console.log(typeof count);
count = count.toString();
console.log(count);
console.log(typeof count);