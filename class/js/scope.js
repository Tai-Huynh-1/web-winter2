// scope = visibility of a variable

const obj = {
	email: "Jake@gmail.com",
};

const email = "Anna@yahoo.com";

function printEmail() {
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

printEmail(); //

// printEmailB();
