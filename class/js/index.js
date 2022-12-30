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

// RETURN TO THIS
// console.log(Boolean(null));
console.log(null == false);
console.log(undefined == false);
console.log(undefined == null);
