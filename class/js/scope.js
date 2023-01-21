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

// Read (access) data from object use dot notation (preferred way)
console.log(user.address.shipping);
// we can also use bracket notation to read from objects if keys are "strings"
// console.log(user["address"].shipping);
// console.log(user["address"]["shipping"]);
console.log(user.isVerified);

// update data
user.isVerified = false; // reassigning to a different value
console.log(user.isVerified);

// lets say we mistype a key value that does not exist on the object and make an assignment
// it will create a brand new key or property on that object if key does not already exist on the object
user.isVerify = true;
console.log(user);

// to delete a key on the object, use the "delete" keyword
delete user.isVerify;
console.log(user);

// switch statement
const month = "nov";
switch (month) {
	case "jan":
		console.log("the month is january");
		break;
	case "dec":
		console.log("the month is december");
		break;
	default:
		console.log("not a valid month");
}
