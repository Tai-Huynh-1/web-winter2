function checkDiscount(day) {
	switch (day) {
		case 1:
			return "Too early";
		case 15:
			return "Here is your discount";
		case 30:
			return "Too late";
		default:
			return "Not a valid date";
	}
}

// console.log(checkDiscount(5));

function constructArrayNum(num1, num2) {
	const result = [];

	let i = num1 + 1;
	while (i < num2) {
		result.push(i);
		i++;
	}

	// while (num1 <= num2) {
	// 	result.push(num1++);
	// }

	return result;
}

// console.log(constructArrayNum(50, 117));

function getKeys(object) {
	const result = [];
	for (const key in object) {
		if (Object.hasOwnProperty.call(object, key)) {
			console.log("key", key);
			const value = object[key];
			console.log("value", value);
			result.push(key);
		}
	}
	return result;
}

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

// console.log("get keys", getKeys(user));
// console.log(Object.keys(user));

function maxProfit(prices) {
	let maxProfit = 0;
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			let profit = prices[j] - prices[i];
			if (profit > maxProfit) {
				maxProfit = profit;
			}
		}
	}
	return maxProfit;

	// let maxProfit = -1,
	// 	lowPrice = array[0];
	// for (let i = 0; i < array.length; i++) {
	// 	if (array[i] > lowPrice) {
	// 		maxProfit = Math.max(maxProfit, array[i] - lowPrice);
	// 	} else {
	// 		lowPrice = array[i];
	// 	}
	// }
	// return maxProfit;

	// for (let i = 0; i < array.length; i++) {
	//     for (let j = i+1; j < array.length; j++) {

	//     }

	// }
}

// console.log(maxProfit([315, 50, 314, 684, 100, 648, 132, 50, 98, 45]));
// console.log(maxProfit([315, 50, 314, 684, 100, 648, 132, 45, 684, 45]));
