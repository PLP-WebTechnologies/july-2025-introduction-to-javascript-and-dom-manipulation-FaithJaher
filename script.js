// Part 1: Mastering JavaScript Basics- variables, data types, operators, and conditionals.
let age = prompt("Enter your age:"); // captures user input
age = Number(age); // convert string input to number

if (age >= 18) {
    console.log("You are an adult!");
    document.getElementById("output").textContent = "You are an adult!";
} else {
    console.log("You are a minor!");
    document.getElementById("output").textContent = "You are a minor!";
}

// Part 2: JavaScript Functions — The Heart of Reusability
function calculateTotal(price, quantity) {
    return price * quantity;
}

function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

console.log(calculateTotal(100, 3)); // 300
console.log(greetUser("Faith"));

// Part 3: JavaScript Loops — Embrace the Power of Repetition!
let fruits = ["Mango", "Apple", "Banana", "Orange"];

// For loop
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

// While loop - simple countdown
let count = 5;
while (count > 0) {
    console.log("Countdown:", count);
    count--;
}

// Part 4: Mastering the DOM with JavaScript

// 1. Change text on button click
document.getElementById("btnChange").addEventListener("click", function() {
    document.getElementById("output").textContent = "Button was clicked!";
});

// 2. Toggle dark mode
document.getElementById("btnToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// 3. Create new element
document.getElementById("btnAdd").addEventListener("click", function() {
    let newItem = document.createElement("p");
    newItem.textContent = "I was added dynamically!";
    document.body.appendChild(newItem);
});
