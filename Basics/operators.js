// ******************Operations / Operators***************

// There are 5 types of operators

let value = 5
let negValue = -value

// console.log(negValue);


//^ (Arthmetic Operators)--->  +, -, /, *, %, **

// let a = 23
// let b = 10

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);

// console.log(a / b);
// console.log(a % b);

// console.log(3 * 3 * 3 * 3);
// console.log(3 ** 4);
// console.log(5 ** 4);


//^  (Assignment Operator)--->  =, +=, -=, /=, *=
// let a = 10
// a = 24
// a += 24 //34
// a -= 24 //-14

// console.log(a);


//^  (++) inc +1 / (--) dec -1
// let a = 10
// console.log(a++);
// console.log(a--);
// console.log(++a);
// console.log(--a);


// 1. Relational Operator 2. Conditional Operator  3.Compression Operator
//^  ==, >=, <=, >, <, !=  (boolean - true / false)


// let a = 10
// let b = 10

// console.log(a == b); // t
// console.log(a >= b); // t
// console.log(a <= b); // t
// console.log(a < b);  // f
// console.log(a > b);  // f
// console.log(a != b); // f


// ^  and - &&, or - ||, not - !

// con-1    &&   con-2     --> t/f
// t        &&   t         --> t
// t        &&   f         --> f
// f        &&   t         --> f
// f        &&   f         --> f

// console.log(10 == 10 && 10 > 20);

// con-1    ||   con-2     --> t/f
// t        ||   t         --> t
// t        ||   f         --> t
// f        ||   t         --> t
// f        ||   f         --> f

console.log(10 == 10 || 10 > 20);

console.log(! 10 == 10);
console.log(! (10 == 10 && (! (20 > 20))));


console.log(10 == '10');
console.log(10 === '10');
console.log(10 === 10);

console.log(10 !== '10');
