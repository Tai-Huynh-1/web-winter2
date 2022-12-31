// JS has 5 main primitive types: strings, numbers, booleans, null and undefined
// = is used to assign values (assignment operator)
var myName = "Tai"; // string
let age = 10; // number
// var age2 = 20;
// const age3 = 30;
const email = "tai@gmail.com"; // string
var active = true; // boolean (true or false)
let membership; // undefined (variable has been declared, but no value has been assigned yet)
const date_created = null; // null as an empty value

let randomVariable = undefined;

// email = "anne@gmail.com"; // REASSIGNMENTS are not allowed with "const" declarations

// == and === are comparison operators
let age2 = "50"; // string
// console.log(age == age2); // true (10 == 50) => false; == will perform type conversion then compare value
// console.log(age === age2); // false; === checks type first, if different type then it throws false right away, === also WILL NOT perform type conversion

// console.log(1 == true);
// console.log(0 == false);

// RETURN TO THIS - abstract equality comparison algorithm
// console.log(null == false); // false
// console.log(undefined == false); // false
// console.log(undefined == null); // true if null or undefined is on one side then null or undefined has to be on other side to resolve to true
// console.log(null == undefined); // true
// console.log(null == null); // true

// let & var can be reassigned, const cannot be reassigned
// var can be declared more than once (with same variable name), let & const cannot be declared more than once

// accessing 'var' before initialization/declaration results in 'undefined' (HOISTING : seems like our variable (var) is brought to the top of the code and executed first, but it does not have a value assigned to it, JS assigns 'undefined')
// var & functions get hoisted
// 2 phases to executing JS: memory allocation & execution
// var nameA;
// console.log(nameA);
var nameA = "Dave";
// console.log(nameA);

// let & const does not get hoisted; need to declare/init variable first before using; otherwise program throws an error
let nameB = "Jack";
// console.log(nameB);

// // functions getting hoisted: ONLY works for functions declared using the 'function' keyword without storing inside of a variable let & const
// add(5, 10);
// function add(a, b) {
// 	console.log(a + b);
// }

// // anonymous functions getting stored in a variable
// // subtract(15, 8);
// const subtract = function (a, b) {
// 	console.log(a - b);
// };

// // arrow functions getting stored in a variable
// multi(5, 4);
// const multi = (a, b) => {
// 	console.log(a * b);
// };

// control flow of JS program
console.log("begin");

function add(a, b) {
	console.log("line 68", a + b);
	return a + b;
}

console.log("line 72", add(8, 7));

console.log("done");

// begin > line 68 15 > line 69: 15 or error
// begin > line 68: 15 > line 72: 15 > done || begin > undefined > done
// begin > line 69: 15 > line 72: 15 > done
// begin > done
// queue: first in first out (FIFO)
// stack: last in first out (stack files)

// [] >
// [index.js] >
// [index.js + line 65 console.log] >
// [index.js + line 72 console.log ] >
// [index.js + line 72 console.log + add()] >
// [index.js + line 72 console.log + add() + line 68 console.log] >
// [index.js + line 72 console.log + add()] >
// [index.js + line 72 console.log] >
// [index.js + line 74 console.log] >
// [index.js] >
// []
