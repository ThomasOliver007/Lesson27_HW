// Request a three-digit number from a user and check whether it has identical digits in it.
const userInput = prompt("Three digit number", 337);
const convertedIntoNumber = parseInt(userInput);
if (!isNaN(convertedIntoNumber) && userInput.length === 3) {
    const digit1 = Math.floor(convertedIntoNumber / 100),
    digit2 = Math.floor((convertedIntoNumber % 100) / 10),
    digit3 = convertedIntoNumber % 10;
    console.log(digit1, digit2, digit3);
}

// Request a five-unit number from a user and check whether it is a palindrome.
const userNumber = prompt("Five digit number", 56789);
const numberToString = String(userNumber);
if (!isNaN(userNumber) && numberToString.length === 5) {
const reverseString = numberToString.split().reverse().join();
if (numberToString === reverseString) {
    console.log(`The number ${userNumber} is a palindrome.`);
  } else {
    console.log(`The number ${userNumber} is not a palindrome.`);
  }
}

// Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 
const exchangeRate = {
    USD: 1,
    EUR: 0.92,
    HUF: 340,
};
const amountInUSD = parseFloat(prompt("Amount in USD", 200));
const targetCurrency = prompt("Target currency (EUR, HUF)").toUpperCase();
if (!isNaN(amountInUSD) && exchangeRate[targetCurrency] !== undefined) {
    const amountInTargetCurrency = amountInUSD * exchangeRate[targetCurrency];
    console.log(amountInTargetCurrency);
}

// Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.
const circumferenceLength = parseFloat(prompt("Length of the circumference", 5));
const squarePerimeter = parseFloat(prompt("Perimeter of the square", 4));
if (!isNaN(circumferenceLength) && !isNaN(squarePerimeter) && circumferenceLength >= 0 && squarePerimeter >= 0) {
  const squareSideLength = squarePerimeter / 4;
  if (circumferenceLength <= squareSideLength) {
    console.log("The circumference fits inside the square.");
  } else {
    console.log("The circumference cannot fit inside the square.");
  }
}