// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`,
);

const userName = prompt(`Great! First, what's your name?`);
alert(`Hi ${userName}! Let's get started with your order.`);

// Step 2 - Food choice
const foodChoice = prompt(
  `What would you like to order? Please choose one of the following options. Answer with number \n1. Pizza \n2. Pasta \n3. Salad`,
);

if (foodChoice === "1") {
  alert(`You picked Pizza! Great choise!`);
} else if (foodChoice === "2") {
  alert(`You picked Pasta! Great choise!`);
} else {
  alert(`You picked Salad! Great choise!`);
}

let foodName = "";
if (foodChoice === "1") {
  foodName = "Pizza";
} else if (foodChoice === "2") {
  foodName = "Pasta";
} else {
  foodName = "Salad";
}

// Step 3 - Subtype choice
alert(
  `You picked ${foodName}! Now, let's choose what type of ${foodName} you want!`,
);

let subtypeOptions = "";
if (foodChoice === "1") {
  subtypeOptions = `1. Pepperoni \n2. Veggie \n3. Margherita`;
} else if (foodChoice === "2") {
  subtypeOptions = `1. Spaghetti \n2. Fettuccine \n3. Penne`;
} else {
  subtypeOptions = `1. Ceasar \n2. Greek \n3. Garden`;
}

const subtypeChoice = prompt(
  `Choose one of the following options. Answer with number \n${subtypeOptions}`,
);

let subtypeName = "";
if (foodChoice === "1") {
  if (subtypeChoice === "1") subtypeName = "Pepperoni";
  else if (subtypeChoice === "2") subtypeName = "Veggie";
  else subtypeName = "Margherita";
} else if (foodChoice === "2") {
  if (subtypeChoice === "1") subtypeName = "Spaghetti";
  else if (subtypeChoice === "2") subtypeName = "Fettuccine";
  else subtypeName = "Penne";
} else {
  if (subtypeChoice === "1") subtypeName = "Ceasar";
  else if (subtypeChoice === "2") subtypeName = "Greek";
  else subtypeName = "Garden";
}

// Step 4 - Age
const userAge = Number(
  prompt(`Almost there! How old are you? Please enter your age in numbers.`),
);

if (userAge < 18) {
  alert(`One child portion of ${subtypeName} costs $8.95`);
} else {
  alert(`One adult portion of ${subtypeName} costs $12.95`);
}

// Step 5 - Order confirmation
const isConfirmed = confirm(
  `So your order is ${subtypeName} ${foodName}. Do you want to confirm your order?`,
);

if (isConfirmed) {
  alert(
    `Thank you for your order, ${userName}. Your ${subtypeName} ${foodName} is on the way! Enjoy your meal!`,
  );
} else {
  alert(
    `No worries, ${userName}. You can start your order again if you change your mind! Have a great day!`,
  );
}
