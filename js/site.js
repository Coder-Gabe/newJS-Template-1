// get start and end numbers from the inputs

function getValues() {
	let startValue = document.getElementById('startValue').value;
	let endValue = document.getElementById('endValue').value;

	let startNumber = parseInt(startValue);
	let endNumber = parseInt(endValue);

	let numberArray = generateNumbers(startNumber, endNumber);
	displayNumbers(numberArray);
}

// generate the range of numbers to display
function generateNumbers(start, end) {

	let basketOfNumbers = [];

	for (let number = 0; number <= 100; number = number + 1) {

		basketOfNumbers.push(number);

	}

	return basketOfNumbers;

}

//placing the generate numbers on the page and bolding the even numbers
function displayNumbers(numbers) {

	let results = '';

	for (let index = 0; index < numbers.length; index = index + 1) {

		let currentNumber = numbers[index];

		if (currentNumber % 2 == 0) {
			results = results + "<tr><td class='evenNumber'>" + currentNumber + "</td></tr>";
		} else {
			results = results + "<tr><td>" + currentNumber + "</td></tr>";
		}


	}

	let tableBody = document.getElementById('results');
	tableBody.innerHTML = results;
}

