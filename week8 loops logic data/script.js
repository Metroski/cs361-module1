// Task 1: Loop Patterns
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let countdown = 5;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
console.log("Lift off!");

// Task 2: Reusable Functions
function addTax(price) {
    return price * 1.16;
}

function classify(score) {
    if (score >= 80) return "Distinction";
    if (score >= 65) return "Merit";
    if (score >= 50) return "Credit";
    if (score >= 40) return "Pass";
    return "Fail";
}

function greet(name) {
    return `Hello, ${name}! Welcome back.`;
}

console.log(addTax(100));
console.log(addTax(250));
console.log(classify(72));
console.log(classify(35));
console.log(greet("Emily"));
console.log(greet("Floribe"));

// Task 3: Arrow Function Versions
const addTaxArrow = (price) => price * 1.16;

const classifyArrow = (score) => {
    if (score >= 80) return "Distinction";
    if (score >= 65) return "Merit";
    if (score >= 50) return "Credit";
    if (score >= 40) return "Pass";
    return "Fail";
};

const greetArrow = (name) => `Hello, ${name}! Welcome back.`;

console.log(addTaxArrow(100) === addTax(100));
console.log(classifyArrow(72) === classify(72));
console.log(greetArrow("Emily") === greet("Emily"));
// The arrow versions read a bit cleaner for the one-line functions
// (addTax, greet) but the if/else chain in classify is easier to
// follow with a normal function body either way.

// Task 4: A Student Object
const student = {
    name: "Emmanuel",
    age: 22,
    year: 3,
    scores: [78, 65, 90, 55],
    getAverage() {
        return this.scores.reduce((total, score) => total + score, 0) / this.scores.length;
    }
};

console.log(student.getAverage());

// Task 5: Array of Students
const students = [
    { name: "Emmanuel", scores: [78, 65, 90, 55] },
    { name: "Emily", scores: [40, 45, 38, 50] },
    { name: "Floribe", scores: [88, 92, 76, 81] },
    { name: "Nancy", scores: [60, 55, 70, 65] },
    { name: "Joseph", scores: [30, 25, 40, 35] }
];

for (const s of students) {
    console.log(s.name);
}

function average(scores) {
    return scores.reduce((total, score) => total + score, 0) / scores.length;
}

const passingStudents = students.filter((s) => average(s.scores) >= 50);
const passingNames = passingStudents.map((s) => s.name);

console.log(passingNames);

// Task 6: Put It Together
try {
    for (const s of students) {
        if (!s.scores || s.scores.length === 0) {
            throw new Error(`${s.name} has no scores on record.`);
        }
        const avg = average(s.scores);
        const grade = classify(avg);
        console.log(`${s.name}: average ${avg.toFixed(1)} - ${grade}`);
    }
} catch (error) {
    console.log(`Could not process student list: ${error.message}`);
}
