// Given an array month: [Jan, Feb, Mar] and a date array: [1, 2, …, 10 ]
// Write a function called “printCalendar” that loops through both arrays and print out a combination of month and date. Date only goes up to 10
// Ex: Jan 1, Jan 2 …, Mar 10
// Hint: Use 2 loops
function printCalendar(months, dates) {
	// months.forEach((month) => {
	// 	dates.forEach((day) => {
	// 		console.log(`${month} - ${day}`);
	// 	});
	// });

	for (let i = 0; i < months.length; i++) {
		for (let j = 0; j < dates.length; j++) {
			const month = months[i];
			const day = dates[j];
			console.log(`${month} - ${day}`);
		}
	}
}
// printCalendar(["Jan", "Feb", "Mar"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Create a function called “cloneArray” that will take any array and return a copy of the array.
function cloneArray(array) {
	// return array.map((element) => element);

	// spread operator
	// return [...array];

	return array.slice();
}

// Write your own custom array.push and array.pop method called “customPush” and “customPop”
// customPush will take in 2 parameter, an array and an item to push into the array
// customPush will return the length of the array after adding in the item
// Ex: customPush(arr, item) { ... }
function customPush(array, itemToAdd) {
	array[array.length] = itemToAdd;
	return array.length;
}

const a = [1, 2, 3, 400];
// console.log(customPush(a, 400));
// console.log(a);

// customPop will take in an array and remove the last element and return the removed element
function customPop(array) {
	let lastIndex = array.length - 1;
	const result = array.splice(lastIndex, 1);
	if (result.length > 0) {
		return result[0];
	} else {
		return undefined;
	}
}

// console.log(customPop(a));
// console.log(a);
