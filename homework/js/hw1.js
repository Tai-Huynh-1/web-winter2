function add(a, b) {
	return a + b;
}

function divide(a, b) {
	return a / b;
}

function convert(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

function divisibleBy55(num) {
	if (num % 55 === 0) {
		return true;
	} else {
		return false;
	}
}

function checkLength(myString) {
	return myString.length;
}

function concat(str1, str2) {
	return str1.concat(str2);
}
