// Exercise 1: Print messages
console.log("This is my first program");
console.log("Welcome John, your monthly salary is 500000");

// Exercise 2: Add two numbers
const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// Exercise 3: Check if a number is positive, negative, or zero
// For Node.js, we use the readline module for user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);

    if (number > 0) {
        console.log("The number is positive");
    } else if (number === 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is negative");
    }

    // Exercise 4: Calculator Program
    console.log("\nCalculator Program:");

    const a = 10; // You can change these numbers as needed
    const b = 5;

    console.log("Addition: " + (a + b));
    console.log("Subtraction: " + (a - b));
    console.log("Multiplication: " + (a * b));
    console.log("Division: " + (a / b));

    rl.close(); // Close the input stream
});
