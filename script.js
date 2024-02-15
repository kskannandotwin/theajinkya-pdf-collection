// Write a program that calculates the area of a rectangle using the
// formula area = length × width. Prompt the user for the length and width of the
// rectangle.

let length = parseFloat(prompt("Enter the length of the rectangle:"));
let width = parseFloat(prompt("Enter the width of the rectangle:"));

let area = length * width;
console.log(`The area of the rectangle is ${area}`);

// Write a program that increments a variable by 5 using an assignment operator.

let number = 10;
number += 5;
console.log(`The updated value is ${number}`);

// Write a program that compares two numbers and determines if one
// is greater than or equal to the other.

let x = 10;
let y = 5;
let isGreaterOrEqual = x >= y;
console.log(`Is the first number ${x} greater than or equal to the second number ${y} ?`);
console.log(`Yes it is ${isGreaterOrEqual}`);

// Write a program that checks if a user is eligible for a discount. The
// user must be a student (hasStudentID) and the purchase amount must be greater
// than $50.

let hasStudentID = confirm('Do you have a student ID?');
let purchaseAmount = parseFloat(prompt('Enter the purchase amount'));

let isEligibleForDiscount = hasStudentID && purchaseAmount > 50;

if(isEligibleForDiscount) {
    console.log('You are eligible for discount');
} else {
    console.log('You are not eligible for discount');
}

// Write a program that calculates the square of a number using the unary operator.

let squareNumber = 2;
let square = squareNumber ** 2;
console.log(`The square of the number is ${square}.`);

// Write a program that determines if a user is an adult (age 18 or older)
// and outputs a message accordingly.

let age = 18;
let message = age >= 18 ? 'You are an adult' : 'You are not an adult';
console.log(message);

// Write a program that checks if a user is not logged in and prompts them to log in.

let isLoggedIn = confirm('Are you logged in?');
if(!isLoggedIn) {
    console.log('Please log in to access this feature.');
} else {
    console.log('You are logged in!');
}