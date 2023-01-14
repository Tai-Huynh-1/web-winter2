function checkAge(age) {
	if (age >= 65) return "Special Discount";
	else return "Not Allowed";

	// if (age >= 65) {
	//     return "Special Discount"
	// } else {
	//     return "Not Allowed"
	// }
}

console.log(checkAge(80));
console.log(checkAge(8));
console.log(checkAge(64));

// ====================
// Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100. The function should return a new array with the result. The original array should not be mutated.
const input = [1, 2, 3, 4, 5, 6, 7];

function multiplyBy100(array) {
	// const result = [];

	// for (let i = 0; i < array.length; i++) {
	// 	const element = array[i];
	// 	result.push(element * 100);
	// }

	// array.forEach(function (element) {})

	// array.forEach((element, index) => {
	// 	const m = element * 100;
	// 	result.push(m);
	// });

	// function forEach(callback, array) {
	//     for (let i = 0; i < array.length; i++) {
	//         const element = array[i]
	//         callback(element)
	//     }
	// }

	// function map(callback, array) {
	// 	const result = [];
	// 	for (let i = 0; i < array.length; i++) {
	// 		const element = array[i];
	// 		const r = callback(element);
	// 		result.push(r);
	// 	}
	// 	return result;
	// }

	const result = array.map((element) => {
		// any logic
		const m = element * 100;
		// // must return some value to be stored in the result array
		return m;
	});

	return result;
}

// console.log(multiplyBy100(input));

function num3(array) {
	if (array.length <= 5) {
		return [];
	}

	// arrow function without function body {} gives you an implicity "return"
	return array.map((element) => element * 100);
}

console.log(num3(input));
