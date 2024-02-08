// declaration and initialization

var globalVar = 10; // global scope
let localVar = 'Hello'; // block scope
const pi = 3.14; // block-scoped constant

// variable naming rules

var myVar;
var _privateVar = 'secret';
var $money;

// data types

var num = 42; // number
var str = 'Hello'; // string
var bool = true; // boolean
var arr = [1, 2, 3]; // array
var obj = { name: 'John', age: 30 }; // object

// assignment

var x = 5;
var name = 'Alice';

// reassignment

var x = 5;
x = 10; // reassignment is allowed

let y = 20;
y = 30; // reassignment is allowed

const z = 42;
// z = 50; // cannot

// scope

var globalVar = 'I am global'; // global scope

function myFunction() {
    var localVar = 'I am local'; // function scope
    console.log(localVar); // accessible here
};

myFunction();
console.log(globalVar); // accessible here

if(true) {
    let blockVar = 'I am block scoped'; // block scope
    console.log(blockVar); // accessible here
}
// console.log(blockVar); // not accessible here because of this is block scope

// hoisting

console.log(hoistedVar); // undefined
var hoistedVar;

// destructuring

const person = { firstName: 'John', lastName: 'Doe'};
const {firstName, lastName} = person;
console.log(firstName);

