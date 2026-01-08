"use strict" // Treat all JS code as newer Version

// alert (3 + 2) // we are using nodejs , not browser

//number = 2 to the power 53 Big int value
// 2^53 -1

// ex 9007199254740991

// Data Types in JS  Primitive Data Types
// 1. Number (used to represent both integer and floating point numbers)
// 2. String (used to represent sequence of characters)
// 3. Boolean (used to represent logical entities - true or false)
// 4. Null (used to represent intentional absence of any object value)
// 5. Undefined (used to represent variable that has not been assigned a value)
// 6. Symbol (used to represent unique identifiers)
// 7. BigInt (used to represent whole numbers larger than 2^53 -1)


// 1. Number
let name = "Yogesh" // String
let age = 21 // Number
let isLoggedIn = false // Boolean
console.log(typeof age) // to check the data type of variable
console.log(name);
console.log(age);
console.log(isLoggedIn);

//obect Data Types
// 1. Object (used to store collections of data and more complex entities)
// 2. Array (a special type of object used to store ordered collections of values)
// 3. Function (used to represent reusable blocks of code)

// Object
let person = {
    name: "Yogesh",
    age: 21,
    isLoggedIn: true
}
// console.log(typeof null); // bug in js it shows object but it is null
console.log(typeof person);
console.log(person);

console.log(typeof undefined); // undefined


