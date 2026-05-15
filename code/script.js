// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`,
);

const userName = prompt(`Great! First, what's your name?`);
alert(`Hi ${userName}! Let's get started with your order.`);

// Step 2 - Food choice
const foodChoise = prompt(
  `What would you like to order? Please choose one of the following options. \n1. Pizza \n2. Pasta \n3. Salad`,
);

if (foodChoise === "1") {
  alert(`You chose Pizza! Great choise!`);
} else if (foodChoise === "2") {
  alert(`You chose Pasta! Great choise!`);
} else {
  alert(`You chose Salad! Great choise!`);
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
