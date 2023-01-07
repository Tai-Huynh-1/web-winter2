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
console.log("arrA", arrA); // [5]
console.log("arrB", arrB); // [5]
console.log("arrC", arrC); // [5]
console.log("arrA === arrC", arrA === arrC); // [5] === [5] => false; comparing identity or the memory address of the 2 arrays
console.log("arrA === arrB", arrA === arrB); // [5] === [5] => true; comparing identity, and they have same memory address

arrB.push(100);
console.log("arrA === arrB after pushing 100", arrA === arrB); // [5, 100] === [5, 100] => true

// arrA.push(100); // add 100 to arrA
// console.log(arrA); // [5, 100]
// console.log(arrB); // [5], [5, 100] ==> come back to this
// console.log(arrC); // [5]
