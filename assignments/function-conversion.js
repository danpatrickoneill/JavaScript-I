// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => console.log("Function was invoked!");

myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = (x) => x;

console.log(anotherFunction(123));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (num1, num2) => num1 + num2;

console.log(add(23, 53));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (num1, num2) => num1 - num2;

console.log(subtract(1000, 7));


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const triple = (arr) => arr.map( (num) => num * 3 );

console.log(triple([1,2,3,4]))