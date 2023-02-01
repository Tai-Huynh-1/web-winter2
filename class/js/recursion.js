// Recursions

function countup(n) {
	if (n < 1) {
		return [];
	} else {
		const countArray = countup(n - 1); // when n=1, countup(1-1) => []; when n=2, countup(2-1) => [1]
		countArray.push(n); // [1]
		return countArray;
	}
}

console.log(countup(3));

// fib seq: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// F(n) = F(n-1) + F(n-2)
// F(0) = 0
// F(1) = 1

// F(2) = F(2-1) + F(2-2) = F(1) + F(0) = 1 + 0 = 1
// F(3) = F(3-1) + F(3-2) = F(2) + F(1) = 1 + 1 = 2

function generateFib(n) {
	// iterative
	const fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	return fib[n];

	// recursive
	// if (n === 0) {
	//     return 0
	// } else if (n === 1) {
	//     return 1
	// } else {
	//     return generateFib(n - 1) + generateFib(n - 2);
	// }

	// if (n <= 1) {
	// 	return n;
	// } else {
	// 	return generateFib(n - 1) + generateFib(n - 2);
	// }
}

console.log(generateFib(2)); // 1
console.log(generateFib(3)); // 2
console.log(generateFib(10)); // 55
