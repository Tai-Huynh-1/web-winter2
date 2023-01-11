// copying and comparing values in JS
// JS: copy & compare by reference vs by value

let a = 5;
let b = a; // copy by value (only applies to primitive values: string, boolean, null, undefined, number)
let c = 5;

// console.log(a === b); // 5 === 5 => true
// console.log(b === c); // 5 === 5 => true
// console.log(a === c); // 5 === 5 => true

// a = 10;
// console.log("a", a);
// console.log("b", b);
// console.log(a === b); // 10 === 5 => false (Neha)
// console.log(b === c); // 5 === 5 => true

let arrA = [a]; // memory location arrA = XXX123
// copy with objects or arrays, then it's copy by reference (memory address of the array)
let arrB = arrA; // memory location arrB = arrA = XXX123 (arrB is the same array as arrA) - we are not creating a new array
let arrC = [a]; // arrC is NOT a copy, but rather a new/separate array with different memory address arrC = 789ANZ

// console.log("arrA", arrA); // [5]
// console.log("arrB", arrB); // [5]
// console.log("arrC", arrC); // [5]
// console.log("arrA === arrC", arrA === arrC); // [5] === [5] => false; comparing identity or the memory address of the 2 arrays
// console.log("arrA === arrB", arrA === arrB); // [5] === [5] => true; comparing identity, and they have same memory address
// ABC123 === ABC123
// 910 Waverly Ave. Ca 95888 === 910 Waverly Ave. Ca 95888

// arrB.push(100);
// console.log("arrA === arrB after pushing 100", arrA === arrB); // [5, 100] === [5, 100] => true
// arrA.push(500);
// console.log("arrA === arrB after pushing 500", arrA === arrB); // [5, 100, 500] === [5, 100, 500] => true

// cache or caching (RAM) (fast, less space) vs persistent memory (slow, bigger space)
// cache invalidation & stale data

// arrays: [], can contain all sorts of data inside of it: [true, false, 100, 'string', [], {}, [[[]]], null]
// arrays are sensitive to their order (index)
const arrZ = [1, 2, 2, 2, 2, 3, 4, 5, 5, 10, 100, 100];
// arrZ = "sdfsd" // PROBLEM - reassignment of arrZ

// READ on array
// console.log(arrZ[5]);

// WRITE to array
// arrZ[12] = true;
// console.log(arrZ);

// UPDATE to array
// arrZ[0] = "string";
// console.log(arrZ);

// DELETE
// const poppedItem = arrZ.pop();
// // console.log(arrZ);
// console.log("popped", poppedItem);

// cover other array methods
// OTHER UPDATES
// arrZ.push(600, 5000); // adds to the end of the array
// console.log(arrZ);

// ADD TO BEGINNING
// arrZ.unshift(100);
// console.log(arrZ);
// arrZ.shift();
// console.log(arrZ);

// console.log(7 + 5);
// console.log(7 - 5);
// console.log(7 * 5);
// console.log(7 / 5);
// console.log(7 % 7); // returns the remainder of a division

// let z = 0;
// z += 15; // => z = z + 15 (indicate how much to increment by)
// z++; // => z + 1
// z -= -1; // => z = z - (-1)
// console.log(z);
// z -= 50;
// z--;
// console.log(z);

// floats (decimals)
// console.log(7.5 * 6.6);

// strings
const name1 = "Tai";
// console.log("Hello world, my name is " + name1); // string concatenation (adding strings to build longer strings)
const num = 3;
let myStr = "I have " + num + " dog"; // "I have 3 dog"
// console.log(myStr.length); // String.length is a property, NOT a method, therefore no need to invoke it
// console.log(myStr[0]); // I
// console.log(myStr[myStr.length - 2]); // o
// console.log(myStr.split(" "));
// console.log(myStr.split("").concat([" ", "H"]).join(""));

// string immutibility
// myStr[7] = 5;
// console.log(myStr);

function add(a, b) {
	return a + b;
}

console.log(add(10, 5));

function greet(name) {
	console.log("Hello world! My name is " + name);
}

// call / invoke a function - we use ()
greet("Jack");
