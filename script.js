// Write a function named add that takes two arguments and returns their sum.

function add(a, b) {
    return a + b;
}
const sum = add(10, 15);
console.log(sum);

// How does a function expression differ from a function declaration?

// function declaration
function hello() {
    console.log("Hello");
}

// function expression
const helloWorld = function() {
    console.log('Hello World');
};

// What is an Immediately Invoked Function Expression (IIFE) and provide an example?

(function() {
    console.log('Hello, this is IIFE');
})();

// Write a function square that returns the square of a number and use it to calculate the square of 4.

function square(num) {
    return num * num;
}
console.log(square(4));

// How can you create a function in JavaScript that remembers the state of variables from its last execution?
// What is closure?

function counter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
}
// above the closure example

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());

// What are default parameters in a function? Give an example.

function name(name = 'Guest') {
    return 'Hello ' + name;
}
console.log(name('Kannan'));
console.log(name());

// Write a function multiply that uses the rest
// parameter to take an arbitrary number of arguments and
// returns their product.

function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}
console.log(multiply(2, 3, 4, 5, 6));

// Explain arrow function syntax with an example.

const arrow = (a, b) => a + b;
console.log(arrow(10, 20));

// Write a function isEven that returns true if a
// number is even and false if it is not, using the ternary
// operator.

function isEven(num) {
    return num % 2 === 0 ? true : false;
}
console.log(isEven(10));
console.log(isEven(11));