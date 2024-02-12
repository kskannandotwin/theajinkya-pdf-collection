// Declare two variables, num1 and num2, and
// assign them numeric values. Add these two variables and
// store the result in a third variable named sum.

function addNumbers(a, b) {
    // let num = Number(a);
    let num = parseInt(a);
    return num + b;
}

const result = addNumbers('42', 8);
console.log(result);

// Create a function concatenateStrings that takes two arguments, a (a
// number) and b (a string). Convert a to a string, concatenate it with b, and return
// the result.

function concatenateStrings(a, b) {
    let string = String(a);
    let result = string + b;
    return result;
}

console.log(concatenateStrings(42, ' is the answer'));

// Create a function checkFalsy that takes a value as an argument.
// Convert the value to a boolean and return true if the converted value is falsy;
// otherwise, return false.

function checkFalsy(value) {
    let bool = Boolean(value);
    return !bool;
}

console.log(checkFalsy(''));

// Create a function multiplyByTwo that takes a string str containing an
// integer. Parse the integer from str, multiply it by 2, and return the result as a
// number.

function multiplyByTwo(str) {
    let strNum = parseInt(str) * 2;
    return strNum;
}

console.log(multiplyByTwo(50));