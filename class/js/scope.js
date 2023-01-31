// scope = visibility of a variable

const obj = {
	email: "Jake@gmail.com",
};

const email = "Anna@yahoo.com";

function printEmail(email) {
	// const email = "abc@mydomain.com";
	if (true) {
		// const email = "xyz@mydomain.com";
		console.log("email inside printEmail function", email);
	}
}

// function printEmailB() {
// 	console.log("email inside printEmailB function", email);
// }

// if (true) {
// 	const email = "qwerty@domain.com";
// 	console.log("email inside 1st if block", email); // "qwerty@domain.com"
// }

// if (true) {
// 	console.log("email inside 2nd if block", email); // "Anna@yahoo.com"
// }

// console.log("email from global scope", email); // "Anna@yahoo.com"

// printEmail(email); //

// printEmailB();

// var does not have block scope, if declared in a block, it will modify the same variable in the global scope
// var x = 1;
// console.log("BEFORE if block", x); // 1
// if (true) {
// 	var x = 2;
// 	console.log("INSIDE if block", x); // 2
// }
// console.log("AFTER if block", x); // 1

// objects: data structure that stores information using "key(property):value" pairs (order is not important) (keys or the name of the key is important)
// arrays use index / order to store information (order is important)
const arr = [];

// use {} to Create object
const user = {
	firstName: "Jack",
	lastName: "Sparrow",
	email: "jack@disney.com",
	groceryList: ["grapes"],
	address: {
		shipping: "123 Main St",
		billing: "321 Wall St",
	},
	isVerified: true,
	one: true,
};

// // Read (access) data from object use dot notation (preferred way)
// console.log(user.address.shipping);
// // we can also use bracket notation to read from objects if keys are "strings"
// // console.log(user["address"].shipping);
// // console.log(user["address"]["shipping"]);
// console.log(user.isVerified);

// // update data
// user.isVerified = false; // reassigning to a different value
// console.log(user.isVerified);

// // lets say we mistype a key value that does not exist on the object and make an assignment
// // it will create a brand new key or property on that object if key does not already exist on the object
// user.isVerify = true;
// console.log(user);

// // to delete a key on the object, use the "delete" keyword
// delete user.isVerify;
// console.log(user);

// switch statement
// const month = "nov";
// switch (month) {
// 	case "jan":
// 		console.log("the month is january");
// 		break;
// 	case "dec":
// 		console.log("the month is december");
// 		break;
// 	default:
// 		console.log("not a valid month");
// }

// SHALLOW vs DEEP ClONE ====================
// const arrH = [[1, 2, 3], { name: "Jack" }, true];
// const copyA = arrH; // copy by reference

// const copy = [...arrH]; // spread operator performs a shallow copy/clone (the content) (copy by reference for objects)
// // const copy = arrH.map((el) => el); // .map also creates a shallow copy/clone
// // const copy = arrH.slice(); // .slice also creates a shallow copy/clone
// // const copy = JSON.parse(JSON.stringify(arrH)); // (CHEAT) creating a deep clone (DO NOT USE, it can result in data loss)
// // copy.push([]);
// copy[0] = [...arrH[0]];
// copy[0][0] = 100;
// // copy[1].name = "Anna";
// // copy[2] = false;

// console.log("arrH", arrH);
// console.log("copy", copy);

// ARRAY.reduce =======

const array1 = [1, 2, 3, 4, 5, 6]; // return 21
function sumArray(array) {
	// let sum = 0;
	// array.forEach((el) => (sum = sum + el));
	// return sum;
	return array.reduce((accum, curr) => accum + curr, 0);
}

function mockMap(array) {
	return array.reduce((accum, curr) => {
		accum.push(curr);
		return accum;
	}, []);
}

// console.log(sumArray(array1));
// console.log(mockMap(array1));

// console.log(typeof "6" + "7"); // string
// console.log(parseInt("6")); // 6 - number

// ternary operator
const x = 1;
function print(x) {
	if (x === 1) {
		return "x is 1";
	} else if (x === 0) {
		return "x is 0";
	} else if (x === 2) {
		return "x is 2";
	} else {
		return "x is not 1";
	}
}

function printB(x) {
	return x === 1 ? "x is 1" : x === 0 ? "x is 0" : x === 2 ? "x is 2" : "x is not 1";
}

const printC = (x) => (x === 1 ? "x is 1" : x === 0 ? "x is 0" : x === 2 ? "x is 2" : "x is not 1");

// console.log(print(x));
// console.log(printB(x));
console.log(printC(x));

// closure & higher order function (HOF: takes in a function as input and/or returns a function)
// a closure (is formed) and it is the accessible variables of a function at the time of its (the function) creation
function add(a) {
	function funcB(b) {
		return a + b;
	}

	return funcB;
}

// const add = (a) => (b) => a + b;

const funcB = add(5);
const funcC = add(7);

// console.log(funcB(20)); // 25
// console.log(funcC(20)); // 27

function myFunc() {
	const x = "hi";
	console.log(x);
	return;
}

// myFunc();
// console.log(x);

function multiByMysteryNumber() {
	const multiplier = 5; // private variable - closure can also be used to hide variables from the outside environment or execution context
	return function (x) {
		return x * multiplier;
	};
}

// console.log(multiByMysteryNumber()(10));
