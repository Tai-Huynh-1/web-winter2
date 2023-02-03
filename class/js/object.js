// method vs function

// function: takes in input and performs calculation and/or return an output, bundle of reusable code
function getAddress(mailing, shipping) {
	return {
		mailing: mailing,
		shipping: shipping,
	};
}

// methods are also functions, but it belongs to an object

const user = {
	name: "Tom",

	// greet method is written with function name as the "key"
	greet: function () {
		console.log(`Hi my name is ${this.name}`); // "this" keyword refers to the object that is calling the method (function)
	},

	// es6 method notation (we don't use colon & "function" keyword)
	getName() {
		return this.name;
	},

	// arrow function as method (warning: do not use arrow functions for methods)
	getNameArrow: () => {
		return this.name;
	},
};

const userB = {
	name: "Frank",
};

// user.greet();
// console.log(user.getName());

// "this" in the NodeJS global context, is the globalThis which is just an object
// console.log("global this", this);
// this.name = "Jane";
// console.log("global this", this);

// console.log(user.getNameArrow());
// console.log(this.name);

// when we extract a method outside of the object or in general when a method loses/ does not have a "this" object bound to it,
// we need to bind an object to that function
// to do that, we call the .bind / .apply / .call method on functions
// bind(), call() and apply() are function methods used to provide a proper "this" reference to your function

// const newGreet = user.greet.bind(userB);
// newGreet();

// const newGetNameArrow = user.getNameArrow.bind(userB);
// console.log(newGetNameArrow());

// const newGetName = user.getName.bind(userB);
// console.log("newGetName", newGetName());

// constructors

const ford = {
	brand: "Ford",
	year: 1990,
	color: "red",
	numberOfWheels: 4,
};

const toyota = {
	brand: "Toyota",
	year: 1991,
	color: "blue",
	numberOfWheels: 4,
};

// constructor function for Car (notice, Car is capital case)
// hard code the value
function FordCar() {
	this.brand = "Ford";
	this.year = 1990;
	this.color = "white";
	this.numberOfWheels = 4;
}

// here we take in values as parameters to our constructor function to create cars with different values
function Car(brand, year, color) {
	this.brand = brand; // NOTICE I am using semicolons after each assignment (=)
	this.year = year;
	this.color = color;
	this.numberOfWheels = 4;
	this.honk = function (sound) {
		console.log(sound);
	};
}

// creating instances of an object / Constructor
const honda = new Car("Honda", 2000, "white");
const tesla = new Car("Tesla", 2023, "red");

// console.log("honda", honda.honk("BEEP BEEP"));
honda.honk("BEEP BEEP");
tesla.honk("FART FART");

// when we use [], {}, or function keyword, JS is creating them using constructors under the hood
// const arrB = new Array();
// const objB = new Object();
