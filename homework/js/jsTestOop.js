// 1. Write an ARROW function called "multiply" that uses default parameters. It should take in 2 numbers (a and b) as parameters and return the product.
// If the function is called, but no arguments are given then the function should use the value of 0 for both a and b and return the product of 0 * 0.
// const multiply = (a = 0, b = 0) => a * b;

// 2. Given const name = "Jenny". Write a template string that says, "Hi, my name is Jenny", the template string must use the "name" variable given.
const name = "Jenny";
console.log(`Hi, my name is ${name}`);

// 3. Use the rest parameter to write an ARROW function called "multiply" that will take any arbitrary amount of arguments and return the product of those numbers.
// Ex: multiply(1, 2, 3, 4, 5, 6, 7) should return 5040
const multiply = (...nums) => nums.reduce((accum, curr) => accum * curr, 1);

// 4. Given an object car below. Destructure the "shipping" property from the car object and rename it to "shippingAddress".
const car = {
	year: 2000,
	make: "toyota",
	model: "celica",
	address: {
		mailing: "123 Main St",
		shipping: "321 Wall St",
	},
};
const {
	address: { shipping: shippingAddress },
} = car;

// 5. Write a constructor function (use the original constructor function syntax, not classes) to create a "Student" object that has
// properties: name, age, email
// method: greeting (greeting should return a string that prints "Hi my name is ____ and I'm ____ years old.")
function Student(name, age, email) {
	this.name = name;
	this.age = age;
	this.email = email;
	this.greet = function () {
		return `Hi my name is ${this.name} and I'm ${this.age} years old.`;
	};
}

// 6. Write a custom method called "myCustomArrayMethod" and add it to the array prototype such that any array will be able to use this method.
// Your method can do anything... like console.log a string, it doesn't matter.
Array.prototype.myCustomArrayMethod = function () {};

// 7. In your own words, what is encapsulation in object-oriented programming? How can we achieve this in JavaScript?
// - making variables private and exposing to outer env with getters/ setter methods

// 8. What is inheritance in OOP? How can we achieve this in JavaScript?
// - inheritance allows us to share common properties / methods across all instances of a class of objects. we achieve inheritance with the prototype object in JS

// 9. What is polymorphism in OOP? How can we achieve this in JavaScript?
// - regarding overriding methods

// 10. What is a closure in JavaScript? Provide an example.
// - a closure is formed when a function is created giving the function access to all the variables in its lexical environment
function add(a) {
	return function (b) {
		return a + b;
	};
}

// 11. What is a higher-order function in JavaScript? => in React => higher-order component
// - a HOF is a function that takes in a function as a argument and/or returns a function

// 12. Using the ES6 class syntax, define a class of "Human" that has the following properties: name, ethnicity, age, gender.
// Human should also have these methods: eat, sleep, walk, greet. (Your method can just console.log a string such as "I'm eating")
class Human {
	constructor(name, ethnicity, age, gender) {
		this.name = name;
		// ...
	}
	// es6 method notation
	eat() {}
	sleep() {}
	walk() {}
	greet() {}
}

// 13. Using the ES6 class syntax, define a class of "Programmer" that inherits the properties from Human AND has the following properties: programmingLanguage, yearsOfExperience.
// Programmer should inherit the methods from Human and have its own method: code, drinkLotsOfCoffee. (Your method can just console.log a string such as "I'm trying to stay awake")
// You do not need to make the properties private for this class.
// Don't forget to invoke the parent's constructor as well.

// Create an instance of Programmer and store it into a variable.

class Programmer extends Human {
	constructor(programmingLanguage, yearsOfExperience, name, ethnicity, age, gender) {
		super(name, ethnicity, age, gender);
		this.programmingLanguage = programmingLanguage;
		this.yearsOfExperience = yearsOfExperience;
	}
	code() {}
	drinkLotsOfCoffee() {}
}

// 14. Using the ES6 class syntax, define a class of "Athlete" that inherits the properties from Human AND has the following PRIVATE properties: sport, yearsOfExperience.
// Athlete should inherit the methods from Human and have its own method: getSport, setSport.
// getSport should return the object's sport property and setSport will update the property.
// Don't forget to invoke the parent's constructor as well.

// Create an instance of Athlete and store it into a variable.
class Athlete extends Human {
	#sport;
	#yearsOfExperience;
	constructor(sport, yearsOfExperience, name, ethnicity, age, gender) {
		super(name, ethnicity, age, gender);
		this.#sport = sport;
		this.#yearsOfExperience = yearsOfExperience;
	}

	getSport() {
		return this.#sport;
	}
	setSport(newSport) {
		this.#sport = newSport;
	}
}

const athlete1 = new Athlete("basketball", 3, "Jordan", "american", 30, "male");

// 15. What are prototypes in JavaScript?
// - prototypes are just objects that contain shared code across all instances of a class of object. It's how JS implements inheritance
