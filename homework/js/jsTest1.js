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

console.log(getHighest([32, 47, 1, 3, 5, 50, 9, 10]));

function reverse(array) {
	const result = [];
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		result.unshift(element);
	}
	return result;
}
console.log(reverse([32, 47, 1, 3, 5, 50, 9, 10]));
