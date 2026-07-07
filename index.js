//document.getElementById("count-el").innerText = 5;

// initialise the count as 0
// listen for the clicks on the increment button
// add the count by +1 each time

// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// countdown();

// countdown();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function addedLaps() {
//   let totalLapTime = lap1 + lap2 + lap3;
//   console.log(totalLapTime);
// }

// addedLaps();

// let username = "per";
// let notification = "you have three new notifications";

// let messageToUser = notification + ", " + username + "!";

// console.log(messageToUser);

// let welcomeEl = document.getElementById("welcome-el");

// let names = "Jack";
// let greeting = "Welcome Back ";

// let myWelcome = greeting + names;

// welcomeEl.innerText = myWelcome;

// welcomeEl.innerText += " 👋";

// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("save-el");

// let count = 0;

// function increment() {
//   count += 1;
//   countEl.textContent = count;
// }

// function save() {
//   let countStr = count + " - ";
//   saveEl.textContent += countStr;
//   countEl.textContent = 0;
//   count = 0;

//   console.log(count);
// }

// let firstName = "Jack";
// let lastName = "Cockerill";

// let fullName = firstName + " " + lastName;

// console.log(fullName);

// let names = "Linda";
// let greeting = "Hi there";

// function welcomeMessage() {
//   console.log(greeting + ", " + names + "!");
// }

// welcomeMessage();

// let myPoints = 3;

// function add3Points() {
//   myPoints += 3;
// }

// function remove1Point() {
//   myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();

// console.log(myPoints);

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;
// let result = " ";
// let sumEl = document.getElementById("sum-el");
// // Create four functions: add(), subtract(), divide(), multiply()
// // Call the correct function when the user clicks on one of the buttons
// // Perform the given calculation using num1 and num2
// // Render the result of the calculation in the paragraph with id="sum-el"

// // E.g. if the user clicks on the "Plus" button, you should render
// // "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// function add() {
//   let result = num1 + num2;
//   sumEl.innerText = "Sum: " + result;
//   console.log(result);
// }

// function subtract() {
//   let result = num1 - num2;
//   sumEl.innerText = "Sum: " + result;
// }

// function divide() {
//   let result = num1 / num2;
//   sumEl.innerText = "Sum: " + result;
// }

// function multiply() {
//   let result = num1 * num2;
//   sumEl.innerText = "Sum: " + result;
// }

// var countEven = function (nums) {
//   let output = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       output += 1;
//     }
//   }
//   return output;
// };

// countEven([1, 2, 3, 4, 5, 6]);
// console.log(countEven([1, 2, 3, 4, 5, 6]));

// var sumPositive = function (nums) {
//   let output = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       output += nums[i];
//     }
//   }
//   return output;
// };

// sumPositive([1, -2, 3, -4, 5]);
// console.log(sumPositive([1, -2, 3, -4, 5]));

// var findLongestWord = function (words) {
//   let longestWord = "";
//   let maxLength = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// };

// findLongestWord(["cat", "dog", "elephant", "bird"]);
// console.log(findLongestWord(["cat", "dog", "elephant", "bird"]));

// var findSmallest = function (nums) {
//   let smallNum = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < smallNum) {
//       smallNum = nums[i];
//     }
//   }
//   return smallNum;
// };

// findSmallest([5, 2, 8, 9]);
// console.log(findSmallest([5, 2, 8, 9]));

// var countGreater = function (nums, target) {
//   let counter = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > target) {
//       counter += 1;
//     }
//   }
//   return counter;
// };

// console.log(countGreater([10, 20, 30], 15));

// var maximumWealth = function (accounts) {
//   let maxWealth = 0;
//   for (let i = 0; i < accounts.length; i++) {
//     let customerWealth = 0;
//     for (let j = 0; j < accounts[i].length; j++) {
//       customerWealth += accounts[i][j];
//     }
//     if (customerWealth > maxWealth) {
//       maxWealth = customerWealth;
//     }
//   }
//   return maxWealth;
// };

// console.log(maximumWealth([1, 2, 3], [3, 2, 1]));

// var sumArray = function (nums) {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result += nums[i];
//   }
//   return result;
// };

// console.log(sumArray([5, 5, 5]));

// var smallerNumbersThanCurrent = function (nums) {
//   let smallestNum = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[j] < nums[i]) {
//         count++;
//       }
//     }
//     smallestNum.push(count);
//   }
//   return smallestNum;
// };

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// var sumTwoSum = function (a, b) {
//   return a + b;
// };
// console.log(sumTwoSum(-2, 7));

// var findMaximum = function (nums) {
//   let max = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }
//   return max;
// };

// console.log(findMaximum([3, 1, 4, 1, 5]));

// function getLength(str) {
//   let output = 0;
//   for (let i = 0; i < str.length; i++) {
//     output = str.length;
//   }
//   return output;
// }
// console.log(getLength("hello sir!"));

// console.log("Hello, Jack");

// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 2));

// function birthday(birth) {
//   return 2025 - birth;
// }
// console.log(birthday(2001));

// function greet(name) {
//   return "Hi there, " + name + "!";
// }
// console.log(greet("jack"));

// function calculator(a, b) {
//   return a * b;
// }
// console.log(calculator(5, 5));

// function checker(num) {
//   if (num > 0) {
//     return "positive";
//   }
//   if (num < 0) {
//     return "negative";
//   }
//   if (num === 0) {
//     return "zero";
//   }
// }

// console.log(checker(0));

// for (i = 2; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (i = 1; i < 11; i++) {
//   console.log(i);
// }

// let num1 = 8;
// let num2 = 2;

// // Render the numbers to the screen so you can see them
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// // This is the function that runs when you click the "Add" button

// function add() {
//   let result = document.getElementById;
// }

// function isDoubleDigits(num) {
//   for (i = 0; i < 100; i++) {
//     if (num % 2 === 0) {
//       return "true";
//     } else {
//       return "false";
//     }
//   }
// }

// console.log(isDoubleDigits(21));

// function canBuy(price, cash) {
//   if (cash >= price) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(canBuy(16, 15));

// let password = "supersecret123";

// function checkPassword(input) {
//   if (password === input) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkPassword("supersecret12"));

function calculateBasePrice(homeType) {
  if (homeType === "studio") {
    return 100;
  } else if (homeType === "apartment") {
    return 150;
  } else if (homeType === "house") {
    return 250;
  }
}

console.log(calculateBasePrice("apartment"));
