// Create a function that receives a callback and invokes it with a message.

function useCallback(callback) {
    callback('Callback function invoked');
}
const displayMessage = (message) => console.log(message);
useCallback(displayMessage);

// Implement a higher-order function that takes a function and a number,
// then applies the function to the number.

function applyFunction(operation, value) {
    return operation(value);
}
const squareFunction = (num) => num * num;
console.log(applyFunction(squareFunction, 4));

// Implement a recursive function to calculate the factorial of a number.

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));