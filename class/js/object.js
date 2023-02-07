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
// honda.honk("BEEP BEEP");
// tesla.honk("FART FART");

// when we use [], {}, or function keyword, JS is creating them using constructors under the hood
// const arrB = new Array();
// const objB = new Object();

// printName

// function printName() {}

// const printName = function () {}

// const printName = () => {}

// const animal = {
// 	name: "bird",
// 	// es6 method notation
// 	// printName() {}
// 	// anonymous function
// 	printName: function () {
// 		console.log(this.name);
// 	},
// 	// arrow function
// 	printNameArrow: () => {
// 		console.log(this.name);
// 	},
// };

// animal.printName(); // bird
// this.name = "cat";
// animal.printNameArrow(); // undefined

// function greet() {
// 	console.log(`Hi my name is ${this.name}`);
// }
// const boundGreet = greet.bind(animal);
// boundGreet();

// "Class" keyword was introduced in ES6 as another way to write constructor functions

class Animal {
	type;
	eyes;
	// made age private (not accessible from outside)
	#age;
	constructor(type, eyes, age) {
		this.type = type;
		this.eyes = eyes;
		this.#age = age;
	}

	// ES6 method notation
	greet() {
		console.log(`Hi I am a(n) ${this.type}`);
	}

	// encapsulation (enclosed) - we made #age private with (#) then use this method to expose it to the outside
	// getter method
	getAge() {
		return this.#age;
	}

	// encapsulation: update the age to a non-zero value: only exposing the functionality you want to the outside environment
	/**
	 * Set a new age.
	 * @param {*} newAge - The new age to update to.
	 * @returns Nothing
	 */
	setAge(newAge) {
		if (newAge === 0) return;
		this.#age = newAge;
	}

	// encapsulation: resetting age
	/**
	 * Resets the age to 1.
	 */
	resetAge() {
		this.#age = 1;
	}
}

const ox = new Animal("ox", 2, 20);

console.log(ox.getAge());
ox.setAge(0);
console.log(ox.getAge());
ox.resetAge();

// classes, constructors in classes, encapsulation, getter / setter methods & private variables

// continue with inheritance & prototype & super class

class Cat extends Animal {
	#name;
	#color;
	#catSpecies;
	constructor(name, color, catSpecies, eyes, age) {
		super("feline", eyes, age);
		this.#name = name;
		this.#color = color;
		this.#catSpecies = catSpecies;
	}

	// greet method already exist on Animal class
	// /**
	//  * This method overrides the greet method on the Animal class. (Polymorphism)
	//  */
	// greet() {
	// 	console.log(`Meow, Hi my name is ${this.#name} and I am a ${this.type}!`);
	// }

	// new Cat method
	scratch() {
		console.log("Scratch scratch");
	}

	// new getters / setter methods for Cat class
	getColor() {
		return this.#color;
	}

	getSpecies() {
		return this.#catSpecies;
	}
}

const tom = new Cat("Tom", "orange", "house cat", 2, 1);

// tom.greet();

// create a Dog class that inherits from Animal.
// Dog properties are private and includes: name, color, breed
// Dog methods: greet(), getName(), setName(), getColor, getBreed
// create an instance of dog called "spot"

class Dog extends Animal {
	#name;
	#color;
	#breed;
	constructor(name, color, breed, eyes, age) {
		super("dog", eyes, age);
		this.#name = name;
		this.#color = color;
		this.#breed = breed;
	}

	// static method allows a class method to be called without instantiating the class
	/**
	 * A static method for checking if an object is an instance of the Dog class
	 * @param {*} object To check
	 * @returns A boolean. True if object is an instance of Dog.
	 */
	static isDog(object) {
		return object instanceof Dog;
	}

	greet() {
		console.log("Ruff ruff");
	}

	getName() {
		return this.#name;
	}

	setName(newName) {
		this.#name = newName;
	}

	getColor() {
		return this.#color;
	}

	getBreed() {
		return this.#breed;
	}
}

const spot = new Dog("spot", "brown", "golden retriever", 2, 10);

console.log("tom", Dog.isDog(tom));

spot.greet();
