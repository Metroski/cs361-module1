// Task 1: Set Up & First Output
console.log("script.js connected, no errors.");
alert("Welcome to Week 7 Lab!");

// Task 2: Variables & Types
const name = "Emmanuel";
const university = "The Copperbelt University";
let age = 22;
let currentYear = 2026;

console.log(typeof name);        // string
console.log(typeof university);  // string
console.log(typeof age);         // number
console.log(typeof currentYear); // number

age = 23;
currentYear = 2027;
console.log("Reassigned age:", age);
console.log("Reassigned currentYear:", currentYear);

// Task 3: A Simple Calculator
const num1 = 24;
const num2 = 7;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;
const power = num1 ** 2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient.toFixed(2)}`);
console.log(`Remainder: ${remainder}`);
console.log(`Power: ${power}`);

// Task 4: Strings Practice
const chosenLetter = "e";
const greeting = "Hello, " + name + "! " + "Welcome to " + university + ".";
const greetingTemplate = `Hello, ${name}! Welcome to ${university}.`;

console.log(greeting);
console.log(greetingTemplate);
console.log(`Length: ${greetingTemplate.length}`);
console.log(greetingTemplate.toUpperCase());
console.log(`Includes "${chosenLetter}": ${greetingTemplate.includes(chosenLetter)}`);

// Task 5: Comparisons & Logic
const score = 78;
console.log(`score >= 50: ${score >= 50}`);
console.log(`score === 100: ${score === 100}`);
console.log(`score > 40 && score < 60: ${score > 40 && score < 60}`);

// Task 6: Grade Decider
function decideGrade(testScore) {
    if (testScore >= 80) {
        return "Distinction";
    } else if (testScore >= 65) {
        return "Merit";
    } else if (testScore >= 50) {
        return "Credit";
    } else if (testScore >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(decideGrade(90)); // Distinction
console.log(decideGrade(70)); // Merit
console.log(decideGrade(55)); // Credit
console.log(decideGrade(42)); // Pass
console.log(decideGrade(20)); // Fail
