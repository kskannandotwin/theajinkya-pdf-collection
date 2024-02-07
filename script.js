// basic template literal

const name = 'Kannan';
const greeting = `Hello ${name}.`;
console.log(greeting);

// multiline strings

const multilineString = `
This is a multiline
string created with
template literals
`;
console.log(multilineString);

// expressions in template literals

const num1 = 5;
const num2 = 10;
const sum = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(sum);

// tagged template literals

function sampleTag(strings, ...values) {
  console.log(strings);
  console.log(values);
  return 'Processed result';
}
const value1 = 10;
const value2 = 20;
const result = sampleTag`The sum of ${value1} and ${value2} is ${value1 + value2}.`;
console.log(result);

// escaping character

const escaped = `This is a backtick: \` inside a template literal.`;
console.log(escaped);

// conditional rendering

const isLogged = false;
const statusMessage = `User is ${isLogged ? 'logged in' : 'logged out'}.`;
console.log(statusMessage);

// functionality with arrays and loops

const fruits = ['apple', 'banana', 'orange'];
const fruitList = `
<ul>
${fruits.map(fruit => `<li>${fruit}</li>`).join('')}
</ul>
`;
console.log(fruitList);
