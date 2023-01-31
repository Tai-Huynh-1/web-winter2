// console.log(x); // var: undefined: which tells us that the variable has already been assigned in memory
// // console.log(x); // let/const : reference error
// var x = 5;

// const array = [1, 2, 1, 2, 1];
// console.log(array.map((el) => el));

function outer(a) {
	return function inner(b) {
		return a + b;
	};
}

const inner = outer(5)(10);

const address = {
	mailing: "123 Main St",
	shipping: "789 Main St",
	general: "123 Main St",
};

// address.mailing; // dot notation
// address["mailing"]; // bracket notation, key has to be a string

function getHighest(array) {
	let max = array[0];
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (element > max) {
			max = element;
		}
	}
	return max;
}

// console.log(getHighest([32, 47, 1, 3, 5, 50, 9, 10]));

function reverse(array) {
	const result = [];
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		result.unshift(element);
	}
	return result;
}
// console.log(reverse([32, 47, 1, 3, 5, 50, 9, 10]));

// 12. Given an array of odd & even numbers, write a function that returns an array that only has even numbers.
// Ex: Passing in [ 1, 2, 3, 4, 5, 6, 7 ] will return [ 2, 4, 6 ]

function getEvenNumbers(numbers) {
	let evenNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			evenNumbers.push(numbers[i]);
		}
	}
	return evenNumbers;
}

// console.log("get even numbers", getEvenNumbers([1, 2, 3, 4, 5, 6, 7]));

// 13. Given an object, write a function that takes in the object and returns an array of the keys (properties) of the object.
// Ex: Passing in { name: "Jack", email: "jack@email.com", age: 25 } should return ['name', 'email', 'age' ]

function getKeys(object) {
	const array = [];
	for (let key in object) {
		array.push(key);
	}
	return array;
}

// console.log("get keys", getKeys({ name: "Jack", email: "jack@email.com", age: 25 }));

// 14. Given an object below. How do I add the string "soup" to the cart array without using an index? Write out the code to do that.
const user = {
	id: 1,
	name: "David",
	email: "dave@gmail.com",
	address: {
		mailing: ["123 Main St"], //  ["123 Main St", true]
		shipping: "789 Main St",
		// general: ["123 Main St"], // ["123 Main St", true]
	},
	cart: ["banana", "milk", "napkins"],
};

user.cart.push("soup");

// console.log("user", user);
// 15. Given the same object as Question 14. How do I add a new field to the address object called 'general' with value being the same as the mailing address?
// Write out the code.
// Ex: The address object should look like this after running the code.
// address: {
// mailing: "123 Main St",
// shipping: "789 Main St",
// general: "123 Main St"
// }
// copy by value is for copying primitves
// copy by reference is for copying objects
user.address.general = user.address.mailing; // if string , then copying "mailing" into "general" will be copy by value
// user.address.mailing = "321 Wall St";
user.address2 = user.address;
user.address.mailing.push(true);
console.log("user", user);
// user.address.general = "123 Main St";
