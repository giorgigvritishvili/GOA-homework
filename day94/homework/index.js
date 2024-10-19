const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);



const user = [
    { id: 1, name: 'Luka' },
    { id: 2, name: 'George' },
    { id: 3, name: 'David' }
];

const names = users.map(user => user.name);

console.log(names); 


const words = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

const wordFrequencies = {};

// Using forEach to count word frequencies
words.forEach(word => {
    // If the word is already in the object, increment its count
    if (wordFrequencies[word]) {
        wordFrequencies[word]++;
    } else {
        // Otherwise, initialize it to 1
        wordFrequencies[word] = 1;
    }
});

console.log(wordFrequencies);
// Output: { apple: 3, banana: 2, orange: 2 }

const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 15 },
    { name: 'David', age: 30 }
];

// Using map to add an isAdult property
const usersWithAdults = users.map(user => ({
    ...user, // Spread operator to keep existing properties
    isAdult: user.age >= 18 // Check if age is 18 or older
}));

console.log(usersWithAdults);


const phones = [
    { model: 'iPhone 13', price: 999 },
    { model: 'Samsung Galaxy S21', price: 799 },
    { model: 'Google Pixel 6', price: 599 }
];

phones.forEach(phone => {
    phone.price *= 1.1; 
});
console.log(phones);


const students = [
    { name: 'Alice', grades: [90, 85, 88] },
    { name: 'Bob', grades: [78, 82, 80] },
    { name: 'Charlie', grades: [92, 95, 93] }
];

studesnts.forEach(students =>{
    const totalGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
    const average = totalGrades / student.grades.length;
    console.log(`${student.name}'s average grade is ${average.toFixed(2)}`);
})

const patients = [
    { name: 'John Doe', healthStatus: 'healthy' },
    { name: 'Jane Smith', healthStatus: 'recovering' },
    { name: 'Sam Brown', healthStatus: 'critical' }
];


patients.forEach(patient => {
    console.log(`${patient.name} is currently ${patient.healthStatus}.`);
});

const student = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 72 },
    { name: 'Charlie', grade: 90 },
    { name: 'David', grade: 65 }
];
students.forEach(student => {
    if (student.grade > 80) {
        console.log(`${student.name} has a grade of ${student.grade}`);
    }
});