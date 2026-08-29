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

// function calculateBasePrice(homeType) {
//   if (homeType === "studio") {
//     return 100;
//   } else if (homeType === "apartment") {
//     return 150;
//   } else if (homeType === "house") {
//     return 250;
//   }
// }

// console.log(calculateBasePrice("apartment"));

// function calculateFinalPrice(basePrice, frequency) {
//   let discountAmount = 0;

//   if (frequency === "weekly") {
//     discountAmount = basePrice * 0.2; // 20% of the base price
//     return basePrice - discountAmount;
//   }
//   if (frequency === "bi-weekly") {
//     discountAmount = basePrice * 0.1; // 10% of the base price
//     return basePrice - discountAmount;
//   }
//   if (frequency === "monthly") {
//     discountAmount = basePrice * 0.05; // 5% of the base price
//     return basePrice - discountAmount;
//   }
//   if (frequency === "one-time") {
//     return basePrice;
//   }

//   return basePrice;
// }

// console.log(calculateFinalPrice(100, "weekly"));

// function addExtras(currentPrice, wantsOvenClean, wantsWindowClean) {
//   if (wantsOvenClean === true) {
//     return currentPrice + 40;
//   }
//   if (wantsOvenClean === false) {
//     return currentPrice;
//   }
//   if (wantsWindowClean === true) {
//     return currentPrice + 60;
//   }
//   if (wantsWindowClean === false) {
//     return currentPrice;
//   }
//   return currentPrice;
// }

// console.log(addExtras(120, false, false));

// function calculateBasePrice(homeType) {
//   if (homeType === "studio") {
//     return 100;
//   } else if (homeType === "apartment") {
//     return 150;
//   } else if (homeType === "house") {
//     return 250;
//   }
//   return 0; // Fallback if homeType is unrecognized
// }

// function calculateFinalPrice(basePrice, frequency) {
//   let discountAmount = 0;

//   if (frequency === "weekly") {
//     discountAmount = basePrice * 0.2; // 20% discount
//     return basePrice - discountAmount;
//   }
//   if (frequency === "bi-weekly") {
//     discountAmount = basePrice * 0.1; // 10% discount
//     return basePrice - discountAmount;
//   }
//   if (frequency === "monthly") {
//     discountAmount = basePrice * 0.05; // 5% discount
//     return basePrice - discountAmount;
//   }
//   if (frequency === "one-time") {
//     return basePrice;
//   }

//   return basePrice; // Fallback
// }

// function addExtras(currentPrice, wantsOvenClean, wantsWindowClean) {
//   if (wantsOvenClean === true) {
//     currentPrice = currentPrice + 40;
//   }
//   if (wantsWindowClean === true) {
//     currentPrice = currentPrice + 60;
//   }
//   return currentPrice;
// }

// function calculateTotalQuote(
//   homeType,
//   frequency,
//   wantsOvenClean,
//   wantsWindowClean,
// ) {
//   // 1. Pass homeType into Station 1
//   let basePrice = calculateBasePrice(homeType);

//   // 2. Pass that basePrice and frequency into Station 2
//   let discountedPrice = calculateFinalPrice(basePrice, frequency);

//   // 3. Pass that discountedPrice and extras into Station 3
//   let finalTotal = addExtras(discountedPrice, wantsOvenClean, wantsWindowClean);

//   // 4. Return the final amount out of the master calculator
//   return finalTotal;
// }

// // Test 1: Weekly Apartment ($150 - 20% = $120) + Oven ($40) = $160
// console.log(calculateTotalQuote("apartment", "weekly", true, false));

// function calculateTotalWorkoutTime(minutesArray) {
//   let sum = 0;

//   // Loop through whatever array is passed in as 'minutesArray'
//   for (let i = 0; i < minutesArray.length; i++) {
//     sum += minutesArray[i];
//   }

//   return sum;
// }

// // Create the data array outside the for loop
// const myWeek = [45, 60, 0, 50, 45, 90, 0];

// // Pass 'myWeek' into the function inside console.log
// console.log(calculateTotalWorkoutTime(myWeek));

// function countWorkoutDays(minutesArray) {
//   let workoutDays = 0;

//   for (let i = 0; i < minutesArray.length; i++) {
//     if (minutesArray[i] > 0) {
//       workoutDays++;
//     }
//   }
//   return workoutDays;
// }

// const myWeek = [45, 60, 0, 50, 45, 90, 0];
// console.log(countWorkoutDays(myWeek));

// console.log(countWorkoutDays([60, 30, 20]));

// const slide = document.querySelector(".carousel-slide");
// const images = document.querySelectorAll(".carousel-img");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");

// // Start at the first image (index 0)
// let currentIndex = 0;
// const totalImages = images.length;

// function updateCarousel() {
//   // Translate the images to the left based on index
//   // Index 0 = 0%, Index 1 = -33.33%, Index 2 = -66.66%
//   const percentage = -(currentIndex * 33.333);
//   slide.style.transform = `translateX(${percentage}%)`;
// }

// // Next button click event
// nextBtn.addEventListener("click", () => {
//   if (currentIndex < totalImages - 1) {
//     currentIndex++; // Move to next image
//   } else {
//     currentIndex = 0; // Loop back to the start
//   }
//   updateCarousel();
// });

// // Previous button click event
// prevBtn.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--; // Move to previous image
//   } else {
//     currentIndex = totalImages - 1; // Loop to the end
//   }
//   updateCarousel();
// });

// function countPositives(nums) {
//   let output = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       output++;
//     }
//   }
//   return output;
// }

// console.log(countPositives([3, 2, 0, 7, -5, 10]));

// function containsTarget(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(containsTarget([10, 25, 42, 8], 25));

// function doubleArrayValues(nums) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     result.push(nums[i] * 2);
//   }
//   return result;
// }

// console.log(doubleArrayValues([2, 4, 6]));

// function getEvens(nums) {
//   let evens = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       evens.push(nums[i]);
//     }
//   }
//   return evens;
// }

// console.log(getEvens([8, 9, 10, 14, 15, 16]));

// function findMax(nums) {
//   let max = nums[1];
//   for (let i = 0; i < nums.length; i++) {
//     if (max < nums[i]) {
//       max = nums[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([30, 5, 10, 20]));

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 18));

// function findMatchingWords(words, letter) {
//   let output = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i][0] === letter) {
//       output.push(words[i]);
//     }
//   }
//   return output;
// }

// console.log(findMatchingWords(["apple", "banana", "avocado", "cherry"], "a"));

// function defangIPaddr(address) {
//   let result = "";
//   for (let i = 0; i < address.length; i++) {
//     if (address[i] === ".") {
//       result += "[.]";
//     } else {
//       result += address[i];
//     }
//   }
//   return result;
// }

// console.log(defangIPaddr("1.1.1.1"));

// function addExclamation(s) {
//   let result = "";

//   for (let i = 0; i < s.length; i++) {
//     // Slide your finger s[i] through the string!
//     if (s[i] === s[i].toUpperCase() && s[i] !== " ") {
//       result += s[i] + "!";
//     } else {
//       result += s[i];
//     }
//   }

//   return result;
// }

// console.log(addExclamation("Hello World"));

// function replaceSpaces(text) {
//   let result = "";

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//       result += "-";
//     } else {
//       result += text[i];
//     }
//   }
//   return result;
// }

// console.log(replaceSpaces("hello world"));

// function countVowels(text) {
//   let result = 0;

//   for (let i = 0; i < text.length; i++) {
//     if (
//       text[i] === "a" ||
//       text[i] === "e" ||
//       text[i] === "i" ||
//       text[i] === "o" ||
//       text[i] === "u"
//     ) {
//       result++;
//     }
//   }
//   return result;
// }

// console.log(countVowels("hello"));

// function replaceA(text) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === "a") {
//       result += "@";
//     } else {
//       result += text[i];
//     }
//   }
//   return result;
// }

// console.log(replaceA("banana"));

// function countOccurrences(text, char) {
//   let output = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === char) {
//       output++;
//     }
//   }
//   return output;
// }

// console.log(countOccurrences("hello world", "l"));

// function doubleChar(text, target) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === target) {
//       result += target + target;
//     } else {
//       result += text[i];
//     }
//   }
//   return result;
// }

// console.log(doubleChar("hello", "l"));

// function reverseString(text) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     result = text[i] + result;
//   }
//   return result;
// }

// console.log(reverseString("cat"));

// function removeSpaces(text) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//       result += "";
//     } else {
//       result += text[i];
//     }
//   }
//   return result;
// }

// console.log(removeSpaces("hello world"));

// function countCapitals(text) {
//   let result = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (
//       text[i] !== text[i].toLowerCase() && // the !-- is a not equals to meaning that it'll search for only letters and makes sure lower case letters aren't included only capitals
//       text[i] === text[i].toUpperCase()
//     ) {
//       result++;
//     }
//   }
//   return result;
// }

// console.log(countCapitals("Hello World"));

// function replaceVowels(text) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     if ("aeiouAEIOU".includes(text[i])) {  // it's going through the text to see if any vowels are included, so every single letter
//       result += "*";
//     } else {
//       result += text[i];
//     }
//   }
//   return result;
// }

// console.log(replaceVowels("hello world"));

// function removeDuplicates(text) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     if (result.includes(text[i]) === false) {
//       // going through the result data but additionally it's being checked with the text data whether a letter exists or not, so whenever a duplicate occurs it makes it so its false so the code wont include write the same letter again
//       result += text[i];
//     }
//   }
//   return result;
// }

// console.log(removeDuplicates("banana"));

// function countChar(text, char) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countChar("banana", "a"));

// function findLongestWord(sentence) {
//   let maxCount = 0;
//   let words = sentence.split(" "); // ["the", "quick", "brown", "fox"]

//   for (let i = 0; i < words.length; i++) { // words.length will count every single letter and space
//     if (words[i].length > maxCount) {
//       maxCount = words[i].length;
//     }
//   }

//   return maxCount;
// }

// console.log(findLongestWord("the quick brown fox"));

// function countShortWords(sentence) {
//   let words = sentence.split(" ");
//   let count = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length <= 4) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countShortWords("the quick brown fox")); // Outputs: 2

// function countUppercase(text) {
//   let count = 0;

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== " " && text[i] === text[i].toUpperCase()) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countUppercase("Hello World")); // Should output 2

// function countEvens(numbers) {
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countEvens([1, 2, 3, 4, 6]));

// function countOdds(numbers) {
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countOdds([1, 2, 3, 4, 5])); // Should output 3

// function countGreaterThanTen(numbers) {
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countGreaterThanTen([5, 12, 3, 20, 10])); // Should output 2

// function getPositives(numbers) {
//   let result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
// }

// console.log(getPositives([-2, 5, 0, 8, -1])); // Should output [5, 8]

// function getLongWords(words) {
//   let result = [];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= 5) {
//       result.push(words[i]);
//     }
//   }
//   return result;
// }

// console.log(getLongWords(["apple", "dog", "banana", "cat", "elephant"]));

// function getTotalCharacterCount(words) {
//   let output = 0;
//   for (let i = 0; i < words.length; i++) {
//     output += words[i].length;
//   }
//   return output;
// }

// console.log(getTotalCharacterCount(["cat", "dog"]));

// function sumLongWordLengths(words) {
//   let output = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= 4) {
//       output += words[i].length;
//     }
//   }
//   return output;
// }

// console.log(sumLongWordLengths(["cat", "elephant", "dog", "bear"]));

// function fizzBuzzLight(nums) {
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 3 === 0) {
//       output.push("Fizz");
//     } else {
//       output.push(String(nums[i]));
//     }
//   }
//   return output;
// }

// console.log(fizzBuzzLight([1, 2, 3, 4, 6]));

// class BankAccount {
//   // Private field: cannot be read or changed directly outside this class
//   #balance;

//   constructor(initialDeposit) {
//     this.#balance = initialDeposit;
//   }

//   // Controlled method to deposit money safely
//   deposit(amount) {
//     if (amount <= 0) {
//       console.log("Deposit amount must be positive.");
//       return;
//     }
//     this.#balance += amount;
//     console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
//   }

//   // Controlled method to check balance without exposing the raw variable
//   getBalance() {
//     return `Your balance is $${this.#balance}`;
//   }
// }

// const myAccount = new BankAccount(100);

// // 1. Using allowed, public methods:
// myAccount.deposit(50); // Output: Deposited $50. New balance: $150
// console.log(myAccount.getBalance()); // Output: Your balance is $150

// // 2. Encapsulation in action (Protection):
// // Direct modification fails/throws an error because #balance is private:
// // myAccount.#balance = 999999; // ❌ SyntaxError: Private field '#balance' must be declared in an enclosing class

// // // Trying to read it directly returns undefined (or throws an error depending on the engine):
// // console.log(myAccount.#balance); // ❌ Error

// class SmartCoffeeMachine {
//   // Public method: Simple, high-level interface for the user
//   makeCoffee(type) {
//     this.#boilWater();
//     this.#grindBeans();
//     this.#brew(type);
//     console.log(`☕ Here is your hot ${type}! Enjoy.`);
//   }

//   // Private methods: Complex background details hidden away
//   #boilWater() {
//     console.log("Heating water to 93°C...");
//   }

//   #grindBeans() {
//     console.log("Grinding dark roast beans...");
//   }

//   #brew(type) {
//     console.log(`Extracting espresso for a ${type}...`);
//   }
// }

// // --- Trying it out ---
// const coffeeMaker = new SmartCoffeeMachine();

// // The user only needs to press ONE button:
// coffeeMaker.makeCoffee("Flat White");

// // Base / Parent Class
// class Character {
//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }

//   takeDamage(amount) {
//     this.health -= amount;
//     console.log(
//       `${this.name} took ${amount} damage! Current health: ${this.health}`,
//     );
//   }
// }

// // Child Class 1: Inherits all properties and methods from Character
// class Warrior extends Character {
//   constructor(name, health, armor) {
//     // 'super' calls the constructor of the parent class (Character)
//     super(name, health);
//     this.armor = armor; // New property unique to Warrior
//   }

//   // New method unique to Warrior
//   shieldBlock() {
//     console.log(`${this.name} blocked the attack with a shield!`);
//   }
// }

// // Child Class 2: Also inherits from Character
// class Mage extends Character {
//   constructor(name, health, mana) {
//     super(name, health);
//     this.mana = mana;
//   }

//   castSpell() {
//     console.log(`${this.name} cast a Fireball using ${this.mana} mana!`);
//   }
// }

// // --- Trying it out ---
// const hero = new Warrior("Guts", 100, 50);
// const wizard = new Mage("Gandalf", 80, 100);

// hero.takeDamage(20); // Output: Guts took 20 damage! Current health: 80
// wizard.takeDamage(15); // Output: Gandalf took 15 damage! Current health: 65

// // Parent Class
// class Notification {
//   send(message) {
//     console.log(`Sending general notification: ${message}`);
//   }
// }

// // Child Class 1: Overrides send() with its own custom logic
// class EmailNotification extends Notification {
//   send(message) {
//     console.log(`📧 Sending EMAIL: "${message}" to user@example.com`);
//   }
// }

// // Child Class 2: Overrides send() with its own custom logic
// class SMSNotification extends Notification {
//   send(message) {
//     console.log(`📱 Sending SMS text: "${message}" to +61400000000`);
//   }
// }

// // Child Class 3: Overrides send() with its own custom logic
// class PushNotification extends Notification {
//   send(message) {
//     console.log(`🔔 Triggering PUSH notification badge: "${message}"`);
//   }
// }

// // --- Polymorphism in Action ---

// // A list containing different notification types
// const notifications = [
//   new EmailNotification(),
//   new SMSNotification(),
//   new PushNotification(),
// ];

// // We call the exact same method (.send) on every item,
// // but each object responds in its own unique way:
// notifications.forEach((notifier) => {
//   notifier.send("Your order has shipped!");
// });

// function addition() {
//   let output = " ";
//   let a = n1;
//   let b = "hello";
//   output += a + b;
//   return output;
// }

// console.log(addition());

// var removeDuplicates = function (nums) {
//   if (nums.length === 0) return 0;

//   // 'k' tracks the position for unique elements
//   let k = 1;

//   // Start checking from the second element (index 1)
//   for (let i = 1; i < nums.length; i++) {
//     // If current element is different from the previous one, it's unique!
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i]; // Overwrite the duplicate spot in the original array
//       k++;               // Move write pointer forward
//     }
//   }

//   return k; // Return the count of unique elements
// };

// let array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let uniqueCount = removeDuplicates(array);

// console.log("Count of unique elements:", uniqueCount);

// console.log("Modified array:", array.slice(0, uniqueCount));

// function getUniqueNumbers(nums) {
//   let uniqueArray = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (!uniqueArray.includes(nums[i])) {
//       uniqueArray.push(nums[i]);
//     }
//   }

//   return uniqueArray;
// }

// console.log(getUniqueNumbers([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// function getEvenNumbers(nums) {
//   let even = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       even.push(nums[i]);
//     }
//   }
//   return even;
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// function findMax(nums) {
//   let output = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > output) {
//       output = nums[i];
//     }
//   }
//   return output;
// }

// console.log(findMax([3, 7, 2, 9, 5]));

// function countOccurrences(nums, target) {
//   let output = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (target === nums[i]) {
//       output++;
//     }
//   }
//   return output;
// }
// console.log(countOccurrences([1, 4, 2, 4, 3, 4, 3], 3));

// function findMin(nums) {
//   let output = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < output) {
//       output = nums[i];
//     }
//   }
//   return output;
// }

// console.log(findMin([15, 4, 22, 1, 9]));

// function runningSum(nums) {
//   let currentSum = 0;
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     currentSum += nums[i];
//     result.push(currentSum);
//   }

//   return result;
// }

// console.log(runningSum([1, 2, 3, 4]));

// make a empty array to store values
// make an variable integar to store tempory values

//  - loop through each number in the array
//     - add each number from the tempory values and add it
//     - save the new value after they've been added to the array

// make a variable to store a integar value as the output

// loop through all the numbers in the array
//     - need a condition so numbers that are higher than 10 so any less gets filtered out
//          - add 1 into the output value when numbers in the array are higher than 10
// return output value

// function countAboveTen(nums) {
//   let output = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 10) {
//       output++;
//     }
//   }
//   return output;
// }

// console.log(countAboveTen([4, 12, 8, 15, 20, 3]));

// make a variable to store a integar for the first negative

// loop though the list
//    - if a number is below 0 it will hit the condition
//          - the number here will  be stored in the variable
// return the number

// function findFirstNegative(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       return nums[i];
//     }
//   }

//   return 0;
// }

// function findFirstOverFifty(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 50) {
//       return nums[i];
//     }
//   }
// }

// console.log(findFirstOverFifty([12, 45, 68, 23, 99]));

// function findIndexOfFirstOdd(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !== 0) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findIndexOfFirstOdd([4, 10, 7, 12, 15]));

// loop through the numbers in the array
//  - if condition to check if a number in the array is the same as the last one
//      return whether true or false that tere was a dupes

// function hasConsecutiveDuplicates(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(hasConsecutiveDuplicates([1, 5, 2, 2, 8]));

// function isSorted(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isSorted([1, 3, 5, 8, 10]));

// function findFirstPeak(nums) {
//   for (let i = 1; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
//       return nums[i];
//     }
//   }
//   return -1;
// }

// console.log(findFirstPeak([1, 3, 2, 5, 4]));

// function allPositive(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] <= 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(allPositive([2, 5, 12, 80]));

// function countOdds(nums) {
//   let output = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !== 0) {
//       output++;
//     }
//   }
//   return output;
// }

// console.log(countOdds([2, 4, 6, 8]));

// function findMin(nums) {
//   let min = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < min) {
//       min = nums[i];
//     }
//   }
//   return min;
// }

// console.log(findMin([-4, 10, 0, -15, 2]));

// function findLongestWord(words) {
//   let longest = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// }

// console.log(findLongestWord(["apple", "banana", "kiwi", "strawberry"]));

// function findHighestScore(scores) {
//   let highest = scores[0];
//   for (let i = 1; i < scores.length; i++) {
//     if (scores[i] > highest) {
//       highest = scores[i];
//     }
//   }
//   return highest;
// }

// console.log(findHighestScore([65, 88, 92, 79, 95, 84]));

// function countSpikes(nums, baseline) {
//   let output = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > baseline) {
//       output++;
//     }
//   }
//   return output;
// }
// console.log(countSpikes([22, 28, 19, 31, 25], 25));

// const team = [
//   { name: "Alex", score: 14 },
//   { name: "Sam", score: 28 },
//   { name: "Jordan", score: 22 },
// ];

// function getBestPlayer(team) {
//   let bestPlayer = team[0];

//   for (let i = 1; i < team.length; i++) {
//     if (team[i].score > bestPlayer.score) {
//       bestPlayer = team[i];
//     }
//   }
//   return bestPlayer.name;
// }

// console.log(getBestPlayer(team));

// const inventory = [
//   { name: "Laptop", price: 999 },
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 75 },
// ];

// function getCheapestProduct(inventory) {
//   let cheapest = inventory[0];
//   for (let i = 1; i < inventory.length; i++) {
//     if (inventory[i].price < cheapest.price) {
//       cheapest = inventory[i];
//     }
//   }
//   return cheapest.name;
// }

// console.log(getCheapestProduct(inventory));

// const customers1 = [
//   { name: "Alice", accounts: [1, 2, 3] }, // Total: 6
//   { name: "Bob", accounts: [3, 2, 2] }, // Total: 7
// ];

// function maximumWealth(customers) {
//   let maxWealth = 0;

//   // Loop 1: Go through each customer
//   for (let i = 0; i < customers.length; i++) {
//     // Step A: Calculate this customer's total wealth using a standard loop!
//     let currentWealth = 0;
//     for (let j = 0; j < customers[i].accounts.length; j++) {
//       currentWealth += customers[i].accounts[j]; // add each account number to currentWealth
//     }

//     // Step B: Compare against maxWealth (the exact record-holder pattern you mastered today!)
//     if (currentWealth > maxWealth) {
//       maxWealth = currentWealth;
//     }
//   }

//   return maxWealth;
// }

// console.log(maximumWealth(customers1));

// const candies1 = [2, 3, 5, 1, 3];
// const extraCandies1 = 3;

// function maximumCandies(candies, extraCandies) {
//   let maxCandies = candies[0];
//   for (let i = 1; i < candies.length; i++) {
//     if (candies[i] > maxCandies) {
//       maxCandies = candies[i];
//     }
//   }

//   let result = [];

//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies >= maxCandies) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }

//   return result;
// }

// console.log(maximumCandies(candies1, extraCandies1));

// const nums1 = [8, 1, 2, 2, 3];

// function smallerNumbersThanCurrent(nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] < nums[i]) {
//         count++;
//       }
//     }
//     result.push(count);
//   }
//   return result;
// }

// console.log(smallerNumbersThanCurrent(nums1));

// const nums1 = [1, 2, 1];

// function getConcatenation(nums1) {
//   let ans = [];
//   for (let i = 0; i < nums1.length; i++) {
//     ans.push(nums1[i]);
//   }
//   for (let j = 0; j < nums1.length; j++) {
//     ans.push(nums1[j]);
//   }
//   return ans;
// }

// console.log(getConcatenation(nums1));

// const nums1 = [0, 2, 1, 5, 3, 4];

// function buildArray(nums) {
//   let ans = [];

//   for (let i = 0; i < nums.length; i++) {
//     ans.push(nums[nums[i]]);
//   }

//   return ans;
// }

// console.log(buildArray(nums1));

// const scores = [12, 45, 68, 32, 89, 41];

// function checkHighestScore(scores) {
//   let highest = Math.max(...scores);
//   if (highest >= 50) {
//     return "pass";
//   }
//   return "fail";
// }

// console.log(checkHighestScore(scores)); // Output: "pass"

// const guestList = ["Sam", "Jordan", "Taylor", "Alex", "Morgan"];

// function checkVIP(guests) {
//   if (guests.includes("Alex")) {
//     return "access granted";
//   }
//   return "access denied";
// }

// console.log(checkVIP(guestList));

// const sentence1 = "thequickbrownfoxjumpsoverthelazydog";
// const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// function checkIfPangram(sentence1) {
//   for (let i = 0; i < alphabet.length; i++) {
//     if (!sentence.includes(alphabet[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkIfPangram(sentence1));

// const nums1 = [1, 2, 3, 1];

// function hasDuplicates(nums) {
//   let seen = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (seen.includes(nums[i])) {
//       return true;
//     }
//     seen.push(nums[i]);
//   }

//   return false;
// }

// console.log(hasDuplicates(nums1));

// const cart = [25, 40, 50];

// function calculateTotal(prices) {
//   let total = 0;

//   for (let i = 0; i < prices.length; i++) {
//     total += prices[i];
//   }
//   if (total > 100) {
//     total = total * 0.9;
//   }

//   return total;
// }

// console.log(calculateTotal(cart));

// const scores = [12, 55, 80, 42, 99, 10, 60];

// function getHighScores(scoreList) {
//   let highScores = [];

//   for (let i = 0; i < scoreList.length; i++) {
//     if (scoreList[i] >= 50) {
//       highScores.push(scoreList[i]);
//     }
//   }

//   return highScores;
// }

// console.log(getHighScores(scores));

// const items = [
//   { name: "Coffee", price: 4.5, inStock: true },
//   { name: "Mug", price: 12.0, inStock: false },
//   { name: "Tea", price: 3.5, inStock: true },
//   { name: "French Press", price: 25.0, inStock: false },
// ];

// function getAvailableItems(itemList) {
//   let available = [];
//   for (let i = 0; i < itemList.length; i++) {
//     if (itemList[i].inStock) {
//       available.push(itemList[i].name);
//     }
//   }
//   return available;
// }

// console.log(getAvailableItems(items));
// // Expected Output: ["Coffee", "Tea"]

// const transactions = [
//   { type: "deposit", amount: 100 },
//   { type: "withdrawal", amount: 30 },
//   { type: "deposit", amount: 50 },
//   { type: "withdrawal", amount: 10 },
// ];

// function getBalance(history) {
//   let output = 0;
//   for (let i = 0; i < history.length; i++) {
//     if (history[i].type === "deposit") {
//       output += history[i].amount;
//     }
//     if (history[i].type === "withdrawal") {
//       output -= history[i].amount;
//     }
//   }
//   return output;
// }

// console.log(getBalance(transactions));
// // Expected Output: 110

// const users = [
//   { name: "Alex", active: true, logins: 12 },
//   { name: "Sam", active: false, logins: 45 },
//   { name: "Jordan", active: true, logins: 28 },
//   { name: "Taylor", active: true, logins: 5 },
// ];

// function getTopActiveUsers(userList) {
//   let output = [];
//   for (let i = 0; i < userList.length; i++) {
//     if (users[i].active === true && users[i].logins > 10) {
//       output.push(users[i].name);
//     }
//   }
//   return output;
// }

// console.log(getTopActiveUsers(users));
// // Expected Output: ["Alex", "Jordan"]

// const inventory = [
//   { item: "Laptops", quantities: [4, 2, 5] },
//   { item: "Phones", quantities: [10, 15] },
//   { item: "Monitors", quantities: [1, 1, 0, 2] },
// ];

// function getTotalStock(items) {
//   let output = 0;
//   for (let i = 0; i < items.length; i++) {
//     for (let j = 0; j < items[i].quantities.length; j++) {
//       output += items[i].quantities[j];
//     }
//   }
//   return output;
// }

// console.log(getTotalStock(inventory));
// // Expected Output: 40

// const departmentSales = [
//   { department: "Electronics", sales: [120, 300, 150] },
//   { department: "Clothing", sales: [50, 80] },
//   { department: "Home", sales: [200, 110, 90, 40] },
// ];

// function getTopDepartments(departments) {
//   let newArr = [];
//   for (let i = 0; i < departments.length; i++) {
//     let output = 0;

//     for (let j = 0; j < departments[i].sales.length; j++) {
//       output += departments[i].sales[j];
//     }
//     if (output >= 500) {
//       newArr.push(departments[i].department);
//     }
//   }
//   return newArr;
// }

// console.log(getTopDepartments(departmentSales));
// // Expected Output: ["Electronics", "Home"]
// const students = [
//   { name: "Maya", grades: [85, 90, 92] },
//   { name: "Liam", grades: [60, 75, 70] },
//   { name: "Sofia", grades: [95, 88, 91] },
// ];

// function getHonorRoll(studentList) {
//   let newArr = [];
//   for (let i = 0; i < studentList.length; i++) {
//     let output = 0;

//     for (let j = 0; j < studentList[i].grades.length; j++) {
//       output += studentList[i].grades[j];
//     }
//     let average = output / studentList[i].grades.length;

//     if (average >= 85) {
//       newArr.push(studentList[i].name);
//     }
//   }
//   return newArr;
// }

// console.log(getHonorRoll(students));
// // Expected Output: ["Maya", "Sofia"]

// const stores = [
//   { name: "Downtown", dailySales: [450, 600, 520] },
//   { name: "Uptown", dailySales: [700, 300, 850] },
//   { name: "Suburbs", dailySales: [200, 400, 350] },
// ];

// function getBusiestStore(storeList) {
//   let busiestStore = "";
//   let highestTotal = 0; // Tracks the winning score across all stores

//   for (let i = 0; i < storeList.length; i++) {
//     let tempVal = 0;

//     for (let j = 0; j < storeList[i].dailySales.length; j++) {
//       tempVal += storeList[i].dailySales[j];
//     }

//     // Compare current store's total to the highest total seen so far
//     if (tempVal > highestTotal) {
//       highestTotal = tempVal; // Update highest total
//       busiestStore = storeList[i].name; // Update winning store name
//     }
//   }

//   return busiestStore;
// }

// console.log(getBusiestStore(stores));
// // Expected Output: "Uptown"

// const players = [
//   { name: "Alex", scores: [10, 20, 15] },
//   { name: "Jordan", scores: [50, 40, 30] },
//   { name: "Taylor", scores: [5, 25, 20] },
// ];

// function getTopScorer(playerList) {
//   let playerName = "";
//   let highestScore = 0;

//   for (let i = 0; i < playerList.length; i++) {
//     let tempVal = 0;

//     for (let j = 0; j < playerList[i].scores.length; j++) {
//       tempVal += playerList[i].scores[j];
//     }

//     if (tempVal > highestScore) {
//       highestScore = tempVal;
//       playerName = playerList[i].name;
//     }
//   }

//   return playerName;
// }

// console.log(getTopScorer(players));

// const projects = [
//   { title: "Alpha", hours: [5, 8, 12] },
//   { title: "Beta", hours: [20, 15, 10] },
//   { title: "Gamma", hours: [2, 4, 3] },
// ];

// function getBiggestProject(projectList) {
//   let highestNum = 0;
//   let biggestTitle = "";
//   for (let i = 0; i < projectList.length; i++) {
//     let tempVal = 0;
//     for (let j = 0; j < projectList[i].hours.length; j++) {
//       tempVal += projectList[i].hours[j];
//     }
//     if (tempVal > highestNum) {
//       highestNum = tempVal;
//       biggestTitle = projectList[i].title;
//     }
//   }
//   return biggestTitle;
// }

// console.log(getBiggestProject(projects));
// // Expected Output: "Beta"

// const userLogs = [
//   { user: "Alex", actions: ["login", "click", "logout"] },
//   { user: "Sam", actions: ["login", "click", "click", "click"] },
//   { user: "Jordan", actions: ["login", "logout"] },
// ];

// function countTotalClicks(logs) {
//   let count = 0;
//   for (let i = 0; i < logs.length; i++) {
//     for (let j = 0; j < logs[i].actions.length; j++) {
//       if (logs[i].actions[j] === "click") {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(countTotalClicks(userLogs));
// // Expected Output: 4

// const orderHistory = [
//   { orderId: 101, items: ["book", "pen"] },
//   { orderId: 102, items: ["laptop"] },
//   { orderId: 103, items: ["pen", "notebook", "book"] },
// ];

// function getItemCounts(orders) {
//   let counts = {}; // 1. Start with an empty object

//   for (let i = 0; i < orders.length; i++) {
//     for (let j = 0; j < orders[i].items.length; j++) {
//       let item = orders[i].items[j];

//       if (counts[item]) {
//         counts[item] += 1; // Already there: add 1
//       } else {
//         counts[item] = 1; // First time seeing it: set to 1
//       }
//     }
//   }

//   return counts; // 3. Return the populated object
// }

// console.log(getItemCounts(orderHistory));
// // Output: { book: 2, pen: 2, laptop: 1, notebook: 1 }

// const surveyResponses = [
//   { user: "UserA", favoriteFruits: ["apple", "banana"] },
//   { user: "UserB", favoriteFruits: ["banana", "mango", "apple"] },
//   { user: "UserC", favoriteFruits: ["apple", "strawberry"] },
// ];

// function countFruitVotes(responses) {
//   let votes = {};
//   for (let i = 0; i < responses.length; i++) {
//     for (let j = 0; j < responses[i].favoriteFruits.length; j++) {
//       let favoriteFru = responses[i].favoriteFruits[j];

//       if (votes[favoriteFru]) {
//         votes[favoriteFru] += 1;
//       } else {
//         votes[favoriteFru] = 1;
//       }
//     }
//   }
//   return votes;
// }

// console.log(countFruitVotes(surveyResponses));
// // Expected Output: { apple: 3, banana: 2, mango: 1, strawberry: 1 }

// const movieGenres = [
//   { genre: "Action", ratings: [8, 9, 7, 9] },
//   { genre: "Comedy", ratings: [6, 5, 7] },
//   { genre: "Drama", ratings: [9, 8, 10, 9] },
// ];

// function getTopGenres(genres) {
//   let output = [];
//   for (let i = 0; i < genres.length; i++) {
//     let newVal = 0;
//     for (let j = 0; j < genres[i].ratings.length; j++) {
//       newVal += genres[i].ratings[j];
//     }
//     let average = newVal / genres[i].ratings.length;

//     if (average >= 8) {
//       output.push(genres[i].genre);
//     }
//   }
//   return output;
// }

// console.log(getTopGenres(movieGenres));
// // Expected Output: ["Action", "Drama"]

// const inventory = [
//   { category: "Produce", items: ["apple", "banana", "carrot"] },
//   { category: "Bakery", items: ["bread", "bagel"] },
//   { category: "Dairy", items: ["milk", "cheese", "yogurt"] },
// ];

// function getAllItems(storeInventory) {
//   let allItems = [];
//   for (let i = 0; i < storeInventory.length; i++) {
//     for (let j = 0; j < storeInventory[i].items.length; j++) {
//       allItems.push(storeInventory[i].items[j]);
//     }
//   }
//   return allItems;
// }

// console.log(getAllItems(inventory));
// // Expected Output: ["apple", "banana", "carrot", "bread", "bagel", "milk", "cheese", "yogurt"]

// const departmentSales = [
//   { dept: "Electronics", sales: [1200, 450, 3000, 800] },
//   { dept: "Clothing", sales: [150, 90, 400] },
//   { dept: "Home", sales: [2200, 1100, 950] },
// ];

// function getBigSales(departments) {
//   let output = [];
//   for (let i = 0; i < departments.length; i++) {
//     for (let j = 0; j < departments[i].sales.length; j++) {
//       if (departments[i].sales[j] >= 1000) {
//         output.push(departments[i].sales[j]);
//       }
//     }
//   }
//   return output;
// }

// console.log(getBigSales(departmentSales));
// // Expected Output: [1200, 3000, 2200, 1100]

// const prices = [15, 80, 42, 100, 5, 60];

// // Fill in the .filter() line below:
// const cheapPrices = prices.filter(
//   (price) => price <= 50 /* your condition here */,
// );

// console.log(cheapPrices);
// // Expected Output: [15, 42, 5]

// .filter() will create a new array and will loop through it and will check the condition and makes sure it is matching elements
// so it replaces the foor loop + if conditon

// .map will replace the for loops and transforms the data in a new array
// .map is like a factory once a item goes in and gets modified, a new modified array will come out

// const basePrices = [10, 20, 30];

// // Use .map() to multiply each price by 1.1:
// const pricesWithTax = basePrices.map((price) => price * 1.1);

// console.log(pricesWithTax);
// // Expected Output: [11, 22, 33]

// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers
//   .filter(num => num % 2 === 0)  // Step 1: Keeps [2, 4, 6]
//   .map(num => num * 10);          // Step 2: Turns them into [20, 40, 60]

// console.log(result);

// const testScores = [40, 75, 90, 48, 60];

// const boostedScores = testScores
//   .filter((score) => score >= 50 )
//   .map((score) => score + 5 );

// console.log(boostedScores);
// // Expected Output: [80, 95, 65]

// const products = [
//   { name: "Laptop", price: 1200, inStock: true },
//   { name: "Phone", price: 800, inStock: false },
//   { name: "Mouse", price: 25, inStock: true },
//   { name: "Keyboard", price: 75, inStock: true },
// ];

// const formattedInStock = products
//   .filter((item) => item.inStock === true /* check if item.inStock is true */)
//   .map(
//     (item) =>
//       item.name +
//       " costs $" +
//       item.price /* return string: item.name + " costs $" + item.price */,
//   );

// const inventoryCounts = [12, 0, 45, 3, 0, 8, 0, 22];

// function getAvailableStock(counts) {
//   return counts.filter((item) => item !== 0);
// }

// console.log(getAvailableStock(inventoryCounts));
// // Output: [12, 45, 3, 8, 22]

// const users = [
//   { firstName: "Sam", lastName: "Smith" },
//   { firstName: "Alex", lastName: "Jones" },
//   { firstName: "Taylor", lastName: "Brown" },
// ];

// function getFullNames(userList) {
//   return userList.map((item) => item.firstName + " " + item.lastName);
// }

// console.log(getFullNames(users));
// // Expected Output: ["Sam Smith", "Alex Jones", "Taylor Brown"]

// const orders = [
//   { id: 101, amount: 250, status: "delivered" },
//   { id: 102, amount: 45, status: "cancelled" },
//   { id: 103, amount: 120, status: "delivered" },
//   { id: 104, amount: 80, status: "pending" },
// ];

// function getDeliveredAmounts(orderList) {
//   return orderList
//     .filter((order) => order.status === "delivered")
//     .map((order) => order.amount);
// }

// console.log(getDeliveredAmounts(orders));
// // Expected Output: [250, 120]

// const temperatures = [32, 18, 25, 12, 30, 15];

// function getHotDays(tempList) {
//   return tempList.filter((temp) => temp > 19);
// }

// console.log(getHotDays(temperatures));
// // Expected Output: [32, 25, 30]

// const prices = [10, 25, 50];

// function formatPrices(priceList) {
//   return priceList.map((price) => "$" + price);
// }

// console.log(formatPrices(prices));
// // Expected Output: ["$10", "$25", "$50"]

// const employees = [
//   { name: "Alice", role: "developer" },
//   { name: "Bob", role: "designer" },
//   { name: "Charlie", role: "developer" },
//   { name: "Diana", role: "manager" },
// ];

// function getDevelopers(employeeList) {
//   return employeeList
//     .filter((employee) => employee.role === "developer")
//     .map((employee) => employee.name);
// }

// console.log(getDevelopers(employees));

// const inventory = [
//   { item: "Laptop", count: 5 },
//   { item: "Keyboard", count: 0 },
//   { item: "Monitor", count: 12 },
//   { item: "Mouse", count: 0 },
// ];

// function getInStockItems(itemList) {
//   return itemList.filter((item) => item.count > 4).map((item) => item.item);
// }

// console.log(getInStockItems(inventory));
// // Expected Output: ["Laptop", "Monitor"]

// const transactions = [
//   { type: "deposit", amount: 100 },
//   { type: "withdrawal", amount: 50 },
//   { type: "deposit", amount: 200 },
//   { type: "withdrawal", amount: 30 },
// ];

// function getDepositAmounts(transactionList) {
//   return transactionList
//     .filter((item) => item.amount > 99)
//     .map((item) => item.amount);
// }

// console.log(getDepositAmounts(transactions));
// // Expected Output: [100, 200]

// const books = [
//   { title: "Dune", pageCount: 500, read: true },
//   { title: "The Hobbit", pageCount: 300, read: false },
//   { title: "1984", pageCount: 328, read: true },
//   { title: "Dracula", pageCount: 418, read: false },
// ];

// function getReadBookTitles(bookList) {
//   return bookList
//     .filter((item) => item.read === true)
//     .map((item) => item.title);
// }

// console.log(getReadBookTitles(books));
// // Expected Output: ["Dune", "1984"]

// const movies = [
//   { title: "Inception", rating: 8.8, genre: "Sci-Fi" },
//   { title: "The Dark Knight", rating: 9.0, genre: "Action" },
//   { title: "Interstellar", rating: 8.6, genre: "Sci-Fi" },
//   { title: "Tenet", rating: 7.3, genre: "Sci-Fi" },
// ];

// function getTopSciFiMovies(movieList) {
//   return movieList
//     .filter((item) => item.genre === "Sci-Fi" && item.rating > 8.4)
//     .map((item) => item.title);
// }

// console.log(getTopSciFiMovies(movies));
// // Expected Output: ["Inception", "Interstellar"]

// const players = [
//   { name: "Alex", score: 150, active: true },
//   { name: "Jordan", score: 90, active: true },
//   { name: "Taylor", score: 200, active: false },
//   { name: "Morgan", score: 120, active: true },
// ];

// function getActiveHighScorers(playerList) {
//   return playerList
//     .filter((item) => item.score > 99 && item.active === true)
//     .map((item) => item.name);
// }

// console.log(getActiveHighScorers(players));
// // Expected Output: ["Alex", "Morgan"]

// const products = [
//   { name: "Phone", price: 800, category: "electronics" },
//   { name: "Shirt", price: 30, category: "clothing" },
//   { name: "Laptop", price: 1200, category: "electronics" },
//   { name: "Socks", price: 10, category: "clothing" },
// ];

// function getAffordableClothing(productList) {
//   return productList
//     .filter((item) => item.price < 51 && item.category === "clothing")
//     .map((item) => item.name);
// }

// console.log(getAffordableClothing(products));
// // Expected Output: ["Shirt", "Socks"]

// const courseList = [
//   { title: "HTML Basics", students: 120, published: true },
//   { title: "Advanced CSS", students: 45, published: false },
//   { title: "JS Fundamentals", students: 200, published: true },
//   { title: "Python Intro", students: 80, published: true },
// ];

// function getPopularPublishedCourses(courses) {
//   return courses
//     .filter((item) => item.published === true && item.students > 99)
//     .map((item) => item.title);
// }

// console.log(getPopularPublishedCourses(courseList));
// // Expected Output: ["HTML Basics", "JS Fundamentals"]

// const orderHistory = [
//   { orderId: 501, total: 150, status: "completed" },
//   { orderId: 502, total: 300, status: "processing" },
//   { orderId: 503, total: 450, status: "completed" },
//   { orderId: 504, total: 80, status: "completed" },
// ];

// function getHighValueCompletedOrders(orders) {
//   return orders
//     .filter((item) => item.status === "completed" && item.total > 99)
//     .map((item) => item.orderId);
// }

// console.log(getHighValueCompletedOrders(orderHistory));
// // Expected Output: [501, 503]

// const cart = [
//   { name: "Keyboard", price: 50 },
//   { name: "Mouse", price: 25 },
//   { name: "Monitor", price: 200 },
// ];

// function getTotalPrice(cartItems) {
//   return cartItems.reduce((accumulator, item) => {
//     return accumulator + item.price;
//   }, 0);
// }

// console.log(getTotalPrice(cart));
// // Expected Output: 275

// const expenses = [
//   { description: "Groceries", amount: 120 },
//   { description: "Gas", amount: 45 },
//   { description: "Internet", amount: 60 },
// ];

// function getTotalExpenses(expenseList) {
//   return expenseList.reduce((acc, item) => {
//     return acc + item.amount;
//   }, 0);
// }

// console.log(getTotalExpenses(expenses));
// // Expected Output: 225

// const salaries = [
//   { name: "Sarah", pay: 3000 },
//   { name: "David", pay: 2500 },
//   { name: "Emma", pay: 3500 },
// ];

// function getTotalPayroll(staffList) {
//   return staffList.reduce((acc, item) => {
//     return acc + item.pay;
//   }, 0);
// }

// console.log(getTotalPayroll(salaries));
// // Expected Output: 9000

// const inventory = [
//   { item: "Apples", price: 2, quantity: 10 },
//   { item: "Oranges", price: 3, quantity: 5 },
//   { item: "Bananas", price: 1, quantity: 20 },
// ];

// function getTotalInventoryValue(items) {
//   return items.reduce((acc, item) => {
//     return acc + item.price * item.quantity;
//   }, 0);
// }

// console.log(getTotalInventoryValue(inventory));
// // Expected Output: 55

// const orderItems = [
//   { product: "T-Shirt", price: 20, count: 3 },
//   { product: "Jeans", price: 50, count: 2 },
//   { product: "Cap", price: 15, count: 4 },
// ];

// function getOrderTotal(orders) {
//   return orders.reduce((acc, item) => {
//     return acc + item.price * item.count;
//   }, 0);
// }

// console.log(getOrderTotal(orderItems));
// // Expected Output: 220

// const transactions = [
//   { type: "deposit", amount: 100 },
//   { type: "withdrawal", amount: 40 },
//   { type: "deposit", amount: 250 },
//   { type: "withdrawal", amount: 60 },
// ];

// function getTotalDeposits(transactionList) {
//   return transactionList
//     .filter((item) => item.type === "deposit")
//     .reduce((acc, item) => acc + item.amount, 0);
// }

// console.log(getTotalDeposits(transactions));
// // Expected Output: 350

// const employees = [
//   { name: "Alice", salary: 80000, department: "Engineering" },
//   { name: "Bob", salary: 50000, department: "Marketing" },
//   { name: "Charlie", salary: 95000, department: "Engineering" },
//   { name: "Diana", salary: 60000, department: "Design" },
// ];

// function getTotalEngineeringPayroll(staff) {
//   return staff
//     .filter((item) => item.department === "Engineering")
//     .reduce((acc, item) => acc + item.salary, 0);
// }

// console.log(getTotalEngineeringPayroll(employees));
// // Expected Output: 175000

// const fruitBasket = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function countFruits(fruits) {
//   return fruits.reduce((acc, fruit) => {
//     if (acc[fruit]) {
//       acc[fruit] += 1;
//     } else {
//       acc[fruit] = 1;
//     }
//     return acc;
//   }, {});
// }

// console.log(countFruits(fruitBasket));
// // Expected Output: { apple: 3, banana: 2, orange: 1 }

// const votes = ["yes", "no", "yes", "yes", "no", "maybe", "yes"];

// function countVotes(voteList) {
//   return voteList.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});
// }

// console.log(countVotes(votes));
// // Expected Output: { yes: 4, no: 2, maybe: 1 }

// const userRoles = ["admin", "user", "user", "editor", "admin", "user"];

// function countRoles(roles) {
//   return roles.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});
// }

// console.log(countRoles(userRoles));
// // Expected Output: { admin: 2, user: 3, editor: 1 }

// const feedback = ["pass", "fail", "pass", "pass", "fail", "pass"];

// function countResults(results) {
//   return results.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});
// }

// console.log(countResults(feedback));
// // Expected Output: { pass: 4, fail: 2 }

// const people = [
//   { name: "Sarah", role: "Developer" },
//   { name: "Tom", role: "Designer" },
//   { name: "Jake", role: "Developer" },
// ];

// function groupByRole(staff) {
//   return staff.reduce((acc, item) => {
//     // 1. Have we seen this role before?
//     if (acc[item.role]) {
//       // Yes -> Push the name into the existing array
//       acc[item.role].push(item.name);
//     } else {
//       // No -> Create a new array with this name inside it
//       acc[item.role] = [item.name];
//     }

//     // Always pass the object to the next iteration
//     return acc;
//   }, {});
// }

// console.log(groupByRole(people));

// const animals = [
//   { name: "Dog", type: "Mammal" },
//   { name: "Eagle", type: "Bird" },
//   { name: "Cat", type: "Mammal" },
//   { name: "Parrot", type: "Bird" },
// ];

// function groupByType(animalList) {
//   return animalList.reduce((acc, item) => {
//     if (acc[item.type]) {
//       acc[item.type].push(item.name);
//     } else {
//       acc[item.type] = [item.name];
//     }
//     return acc;
//   }, {});
// }

// console.log(groupByType(animals));
// // Expected Output:
// // {
// //   Mammal: ["Dog", "Cat"],
// //   Bird: ["Eagle", "Parrot"]
// // }

// const inventory = [
//   { item: "Apple", category: "Fruit" },
//   { item: "Carrot", category: "Vegetable" },
//   { item: "Banana", category: "Fruit" },
//   { item: "Broccoli", category: "Vegetable" },
// ];

// function groupByCategory(items) {
//   return items.reduce((acc, food) => {
//     if (acc[food.category]) {
//       acc[food.category].push(food.item);
//     } else {
//       acc[food.category] = [food.item];
//     }
//     return acc;
//   }, {});
// }

// console.log(groupByCategory(inventory));
// // Expected Output:
// // {
// //   Fruit: ["Apple", "Banana"],
// //   Vegetable: ["Carrot", "Broccoli"]
// // }

// const scores = [
//   { student: "Alex", score: 85 },
//   { student: "Sam", score: 45 },
//   { student: "Taylor", score: 90 },
//   { student: "Jordan", score: 55 },
// ];

// function groupPassFail(results) {
//   return results.reduce((acc, stud) => {
//     // 1. Determine the category key name
//     const status = stud.score >= 60 ? "Pass" : "Fail";

//     // 2. Use that key just like previous problems
//     if (acc[status]) {
//       acc[status].push(stud.student);
//     } else {
//       acc[status] = [stud.student];
//     }

//     return acc;
//   }, {});
// }

// console.log(groupPassFail(scores));
// // Expected Output:
// // {
// //   Pass: ["Alex", "Taylor"],
// //   Fail: ["Sam", "Jordan"]
// // }

// const transactions = [
//   { description: "Groceries", amount: -50 },
//   { description: "Salary", amount: 2000 },
//   { description: "Coffee", amount: -5 },
//   { description: "Bonus", amount: 500 },
// ];

// function groupTransactions(list) {
//   return list.reduce((acc, item) => {
//     const status = item.amount >= 0 ? "Income" : "Expense";

//     if (acc[status]) {
//       acc[status].push(item.description);
//     } else {
//       acc[status] = [item.description];
//     }
//     return acc;
//   }, {});
// }

// console.log(groupTransactions(transactions));
// // Expected Output:
// // {
// //   Income: ["Salary", "Bonus"],
// //   Expense: ["Groceries", "Coffee"]
// // }

// const temperatures = [
//   { day: "Monday", temp: 32 },
//   { day: "Tuesday", temp: 18 },
//   { day: "Wednesday", temp: 28 },
//   { day: "Thursday", temp: 15 },
// ];

// function groupWeather(days) {
//   return days.reduce((acc, item) => {
//     const status = item.temp >= 25 ? "Hot" : "Cold";

//     if (acc[status]) {
//       acc[status].push(item.day);
//     } else {
//       acc[status] = [item.day];
//     }
//     return acc;
//   }, {});
// }

// console.log(groupWeather(temperatures));
// // Expected Output:
// // {
// //   Hot: ["Monday", "Wednesday"],
// //   Cold: ["Tuesday", "Thursday"]
// // }

// const testScores = [
//   { student: "Alex", score: 85 },
//   { student: "Sam", score: 45 },
//   { student: "Taylor", score: 90 },
//   { student: "Jordan", score: 55 },
// ];

// function tallyResults(results) {
//   return results.reduce((acc, item) => {
//     const status = item.score >= 60 ? "Pass" : "Fail";

//     if (acc[status]) {
//       acc[status] += 1;
//     } else {
//       acc[status] = 1;
//     }
//     return acc;
//   }, {});
// }

// console.log(tallyResults(testScores));
// // Expected Output:
// // { Pass: 2, Fail: 2 }

// const users = [
//   { username: "alex99", isActive: true },
//   { username: "sam_dev", isActive: false },
//   { username: "taylor_code", isActive: true },
//   { username: "jordan_k", isActive: false },
// ];

// function getActiveUsernames(userList) {
//   return userList
//     .filter((item) => item.isActive === true)
//     .map((item) => item.username.toUpperCase());
// }

// console.log(getActiveUsernames(users));
// // Output: ["ALEX99", "TAYLOR_CODE"]

// const users = [
//   { userId: "u1", name: "Alice", role: "Admin" },
//   { userId: "u2", name: "Bob", role: "User" },
//   { userId: "u3", name: "Charlie", role: "User" },
// ];
// function normalizeUsers(userList) {
//   return userList.reduce((acc, item) => {
//     acc[item.userId] = item;
//     return acc;
//   }, {});
// }

// console.log(normalizeUsers(users));
// // Expected Output:
// // {
// //   u1: { userId: "u1", name: "Alice", role: "Admin" },
// //   u2: { userId: "u2", name: "Bob", role: "User" },
// //   u3: { userId: "u3", name: "Charlie", role: "User" }
// // }

// //acc[item.id] = item;

// const books = [
//   { isbn: "978-1", title: "Atomic Habits", author: "James Clear" },
//   { isbn: "978-2", title: "Deep Work", author: "Cal Newport" },
//   { isbn: "978-3", title: "Clean Code", author: "Robert Martin" },
// ];

// function normalizeBooks(bookList) {
//   return bookList.reduce((acc, item) => {
//     acc[item.isbn] = item;
//     return acc;
//   }, {});
// }

// console.log(normalizeBooks(books));
// // Expected Output:
// // {
// //   "978-1": { isbn: "978-1", title: "Atomic Habits", author: "James Clear" },
// //   "978-2": { isbn: "978-2", title: "Deep Work", author: "Cal Newport" },
// //   "978-3": { isbn: "978-3", title: "Clean Code", author: "Robert Martin" }
// // }

// const members = [
//   { id: "m1", name: "Alex", email: "alex@test.com" },
//   { id: "m2", name: "Sam", email: "sam@test.com" },
//   { id: "m3", name: "Taylor", email: "taylor@test.com" },
// ];

// function mapEmailsById(list) {
//   return list.reduce((acc, item) => {
//     acc[item.id] = item.email;
//     return acc;
//   }, {});
// }

// console.log(mapEmailsById(members));
// // Expected Output:
// // {
// //   m1: "alex@test.com",
// //   m2: "sam@test.com",
// //   m3: "taylor@test.com"
// // }

// const players = [
//   { username: "shadow99", score: 450 },
//   { username: "pixel_hero", score: 720 },
//   { username: "nova_rider", score: 310 },
// ];

// function mapScoresByUsername(playerList) {
//   return playerList.reduce((acc, item) => {
//     acc[item.username] = item.score;
//     return acc;
//   }, {});
// }

// console.log(mapScoresByUsername(players));
// // Expected Output:
// // {
// //   shadow99: 450,
// //   pixel_hero: 720,
// //   nova_rider: 310
// // }

// const inventory = [
//   { sku: "A1", name: "Laptop", inStock: true },
//   { sku: "A2", name: "Headphones", inStock: false },
//   { sku: "A3", name: "Keyboard", inStock: true },
// ];

// function normalizeInStock(items) {
//   return items
//     .filter((item) => item.inStock === true)
//     .reduce((acc, item) => {
//       acc[item.sku] = item;
//       return acc;
//     }, {});
// }

// console.log(normalizeInStock(inventory));
// // Expected Output:
// // {
// //   A1: { sku: "A1", name: "Laptop", inStock: true },
// //   A3: { sku: "A3", name: "Keyboard", inStock: true }
// // }

// const transactions = [
//   { id: "t1", type: "income", amount: 100 },
//   { id: "t2", type: "expense", amount: 30 },
//   { id: "t3", type: "income", amount: 250 },
// ];

// function normalizeIncome(list) {
//   return list
//     .filter((item) => item.type === "income")
//     .reduce((acc, item) => {
//       acc[item.id] = item;
//       return acc;
//     }, {});
// }

// console.log(normalizeIncome(transactions));
// // Expected Output:
// // {
// //   t1: { id: "t1", type: "income", amount: 100 },
// //   t3: { id: "t3", type: "income", amount: 250 }
// // }

// const staff = [
//   { id: "e1", name: "Sarah" },
//   { id: "e2", name: "Michael" },
//   { id: "e3", name: "Jessica" },
// ];

// function normalizeUppercaseNames(employeeList) {
//   return employeeList.reduce((acc, item) => {
//     acc[item.id] = item.name.toUpperCase();
//     return acc;
//   }, {});
// }

// console.log(normalizeUppercaseNames(staff));
// // Expected Output:
// // {
// //   e1: "SARAH",
// //   e2: "MICHAEL",
// //   e3: "JESSICA"
// // }

// const orders = [
//   { orderId: "ord_101", item: "Keyboard", total: 75 },
//   { orderId: "ord_102", item: "Mouse", total: 45 },
//   { orderId: "ord_103", item: "Monitor", total: 250 },
// ];

// function normalizeOrders(orderList) {
//   return orderList.reduce((acc, item) => {
//     acc[item.orderId] = item;

//     return acc;
//   }, {});
// }

// console.log(normalizeOrders(orders));
// // Expected Output:
// // {
// //   ord_101: { orderId: "ord_101", item: "Keyboard", total: 75 },
// //   ord_102: { orderId: "ord_102", item: "Mouse", total: 45 },
// //   ord_103: { orderId: "ord_103", item: "Monitor", total: 250 }
// // }

// async function getWeather() {
//   try {
//     const response = await fetch("https://api.weather.com/brisbane");
//     const data = await response.json();

//     console.log("Temperature:", data.temp);
//   } catch (err) {
//     console.log("Failed to load weather");
//   }
// }

// const priceButton = document.querySelector("#fetch-price-btn");
// const priceHeader = document.querySelector("#price-display");

// priceButton.addEventListener("click", async function () {
//   try {
//     priceHeader.textContent = "Loading...";

//     const response = await fetch("https://api.store.com/item/1");
//     const data = await response.json();

//     priceHeader.textContent = "Loaded ${data.name} and ${data.price}";
//   } catch (error) {
//     priceHeader.textContent = "failed to load price";
//   }
// });

// function reverseString(str) {
//   // 1. "hello" becomes ["h", "e", "l", "l", "o"]
//   const splitArray = str.split("");

//   // 2. ["h", "e", "l", "l", "o"] becomes ["o", "l", "l", "e", "h"]
//   const reversedArray = splitArray.reverse();

//   // 3. ["o", "l", "l", "e", "h"] becomes "olleh"
//   const finalString = reversedArray.join("");

//   return finalString;
// }

// console.log(reverseString("hello")); // "olleh"

// const sentence = "learning to code step by step";

// const strArray = sentence.split(" ");
// console.log(strArray);
// const words = ["I", "love", "coding"];

// const newStr = words.join(" ");
// console.log(newStr);

// const word = "code";

// const newStr = word.split("");

// const revStr = newStr.reverse("");

// const finStr = revStr.join("");

// console.log(finStr);

// // Q1
// const inventory = "apple,banana,orange,grape";

// const newArr = inventory.split(",");

// console.log(newArr);

// // Q2

// const scores = [10, 20, 30, 40];

// console.log(scores[0]);

// console.log(scores[3]);

// // Q3

// // arrays are typically a list of values of the same type of data inside, you're able to use .push to push values into a array or .pop to take them out and able to do .shift .unshift

// // string is just 1 value and its just text saved as a value or can be mumbers, but it can a single character or even a whole sentence

// function longestWord(input) {
//   let output = "";
//   const newArr = input.split(" ");

//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i].length >= output.length) {
//       output = newArr[i];
//     }
//   }
//   return output;
// }

// console.log(longestWord("I love learning how to code"));

// function countVowels(input) {
//   let output = 0;
//   const newArray = input.split("");

//   for (let i = 0; i < newArray.length; i++) {
//     if ("aeiou".includes(newArray[i])) {
//       output++;
//     }
//   }

//   return output;
// }

// console.log(countVowels("Hello World"));

// function countLetter(input, target) {
//   let output = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (target === input[i]) {
//       output++;
//     }
//   }
//   return output;
// }

// console.log(countLetter("banana", "a"));

// function reverseStr(input) {
//   const newArr = input.split("");
//   const revArr = newArr.reverse();
//   const joinArr = revArr.join("");
//   return joinArr;
// }

// console.log(reverseStr("hello"));

// function capitalizeWords(input) {
//   // Step 1: Split the sentence into an array of words by spaces
//   const words = input.split(" ");
//   let output = [];

//   // Step 2: Loop through each word in the array
//   for (let i = 0; i < words.length; i++) {
//     let currentWord = words[i];

//     // Step 3: Capitalize the first letter and grab the rest of the word
//     let capitalized = currentWord[0].toUpperCase() + currentWord.slice(1);

//     // Step 4: Add the fixed word to our output array
//     output.push(capitalized);
//   }

//   // Step 5: Join the array back into a single string with spaces
//   return output.join(" ");
// }

// console.log(capitalizeWords("hello world from javascript"));
// // Output: "Hello World From Javascript"

// function findMin(input) {
//   let output = input[0];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] < output) {
//       output = input[i];
//     }
//   }
//   return output;
// }

// console.log(findMin([14, 7, 22, 3, 41]));

// function sumArray(input) {
//   let output = 0;
//   for (let i = 0; i < input.length; i++) {
//     output += input[i];
//   }
//   return output;
// }

// console.log(sumArray([1, 2, 3, 4, 5]));

// function countEven(input) {
//   let output = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 === 0) {
//       output++;
//     }
//   }
//   return output;
// }

// console.log(countEven([1, 2, 3, 4, 5, 6]));

// function doubleNumbers(input) {
//   let newArr = [];
//   let output = 0;
//   for (let i = 0; i < input.length; i++) {
//     output = input[i] * 2;
//     newArr.push(output);
//   }
//   return newArr;
// }

// console.log(doubleNumbers([1, 2, 3, 4]));
// // Expected Output: [2, 4, 6, 8]

// function filterLongWords(input) {
//   let words = input.split(" ");
//   let newArr = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 3) {
//       newArr.push(words[i]);
//     }
//   }
//   return newArr;
// }

// console.log(filterLongWords(["cat", "elephant", "dog", "hippopotamus"]));
// // Expected Output: ["elephant", "hippopotamus"]

// function getInitials(input) {
//   let newArr = [];
//   for (let i = 0; i < input.length; i++) {
//     newArr.push(input[i][0]);
//   }
//   return newArr;
// }

// console.log(getInitials(["John", "Doe"]));
// // Expected Output: ["J", "D"]

// function exclaimWords(input) {
//   let newArr = [];
//   for (let i = 0; i < input.length; i++) {
//     newArr.push(input[i] + "!");
//   }
//   return newArr;
// }

// console.log(exclaimWords(["hello", "world"]));
// // Expected Output: ["hello!", "world!"]

// function findLongestWord(input) {
//   let output = "";
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].length > output.length) {
//       output = input[i];
//     }
//   }
//   return output;
// }

// console.log(findLongestWord(["cat", "elephant", "dog", "hippopotamus"]));
// // Expected Output: "hippopotamus"

// function removeVowels(input) {
//   let output = "";
//   for (let i = 0; i < input.length; i++) {
//     if (!"aeiou".includes(input[i])) {
//       output += input[i];
//     }
//   }
//   return output;
// }

// console.log(removeVowels("hello world"));
// // Expected Output: "hll wrld"

// function reverseString(input) {
//   let output = "";
//   for (let i = input.length - 1; i >= 0; i--) {
//     output += input[i];
//   }
//   return output;
// }

// console.log(reverseString("hello"));
// // Expected Output: "olleh"

// function countLetter(input, letter) {
//   let output = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === letter) {
//       output++;
//     }
//   }
//   return output;
// }

// console.log(countLetter("banana", "a"));
// // Expected Output: 3

// function findIndex(input, target) {
//   let output = -1;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === target) {
//       output = i; // Save the current index
//       break; // Stop the loop immediately!
//     }
//   }
//   return output;
// }

// console.log(findIndex(["apple", "banana", "cherry", "banana"], "banana"));
// // Expected Output: 1

// function sumArray(input) {
//   let output = 0;
//   for (let i = 0; i < input.length; i++) {
//     output += input[i];
//   }
//   return output;
// }

// console.log(sumArray([10, 20, 30, 40]));
// // Expected Output: 100

// function findMax(input) {
//   let output = input[0];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > output) {
//       output = input[i];
//     }
//   }
//   return output;
// }

// console.log(findMax([15, 42, 8, 23, 4]));
// // Expected Output: 42

// function findAllIndices(input, target) {
//   let output = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === target) {
//       output.push(i);
//     }
//   }
//   return output;
// }

// console.log(findAllIndices(["apple", "banana", "cherry", "banana"], "banana"));
// // Expected Output: [1, 3]

// function reverseArray(input) {
//   let output = [];
//   for (let i = input.length - 1; i >= 0; i--) {
//     output.push(input[i]);
//   }
//   return output;
// }

// console.log(reverseArray(["apple", "banana", "cherry"]));
// // Expected Output: ["cherry", "banana", "apple"]

// function findLastIndex(input, target) {
//   let output = -1;
//   for (let i = input.length - 1; i >= 0; i--) {
//     if (input[i] === target) {
//       output = i;
//       break;
//     }
//   }
//   return output;
// }

// console.log(findLastIndex(["apple", "banana", "cherry", "banana"], "banana"));
// // Expected Output: 3

// function removeDuplicates(input) {
//   let output = [];
//   for (let i = 0; i < input.length; i++) {
//     if (!output.includes(input[i])) {
//       output.push(input[i]);
//     }
//   }
//   return output;
// }

// console.log(removeDuplicates(["apple", "banana", "apple", "cherry", "banana"]));
// // Expected Output: ["apple", "banana", "cherry"]

// function countOccurrences(input, target) {
//   let output = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === target) {
//       output++;
//     }
//   }
//   return output;
// }

// console.log(
//   countOccurrences(["apple", "banana", "apple", "cherry", "apple"], "apple"),
// );

// function areAllEven(input) {
//   let output = true;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) { // Check if it's odd
//       output = false;
//       break; // Optional optimization: stop early once you find a non-even number!
//     }
//   }
//   return output;
// }

// console.log(areAllEven([2, 4, 6, 8])); // true
// console.log(areAllEven([2, 3, 6, 8])); // false

// function hasOddNumber(input) {
//   let output = false;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) {
//       output = true;
//       break;
//     }
//   }
//   return output;
// }

// console.log(hasOddNumber([2, 4, 6, 8])); // Expected: false
// console.log(hasOddNumber([2, 3, 6, 8])); // Expected: true

// function findMaxIndex(input) {
//   let output = 0; // Starts as index 0
//   for (let i = 1; i < input.length; i++) {
//     if (input[i] > input[output]) {
//       // Compare value against value!
//       output = i; // Save the new index
//     }
//   }
//   return output;
// }

// console.log(findMaxIndex([5, 12, 3, 22, 8]));
// // Expected Output: 3

// function titleCase(input) {
//   let words = input.split(" ");
//   let outputArr = [];

//   for (let i = 0; i < words.length; i++) {

//     let firstLetter = words[i].slice(0, 1).toUpperCase();

//     let restOfWord = words[i].slice(1);

//     outputArr.push(firstLetter + restOfWord);
//   }

//   return outputArr.join(" ");
// }

// console.log(titleCase("hello world from javascript"));
// // Expected Output: "Hello World From Javascript"

// function keepOnlyFirst(input) {
//   // Start at index 0 ("apple"), and stop right before index 1 ("banana")
//   let output = input.slice(0, 1);

//   return output;
// }

// console.log(keepOnlyFirst(["apple", "banana", "cherry", "date"]));
// // Expected Output: ["apple"]

// function moveFirstLetterToEnd(input) {
//   let output = "";

//   // Use .slice() to grab the pieces and rearrange them!
//   let firstLetter = input.slice(0, 1);

//   let restOfWord = input.slice(1);

//   output += restOfWord + firstLetter;

//   return output;
// }

// console.log(moveFirstLetterToEnd("apple"));
// // Expected Output: "pplea"

// console.log(moveFirstLetterToEnd("banana"));
// // Expected Output: "ananab"

// function truncateString(input, maxLength) {
//   let output = "";

//   if (input.length > maxLength) {
//     return (output += input.slice(0, maxLength) + "...");
//   } else {
//     return (output = input);
//   }
// }

// console.log(truncateString("hello world", 5));
// // Expected Output: "hello..."

// console.log(truncateString("coding", 10));
// // Expected Output: "coding" (because it's already shorter than 10!)

// function titleCase(str) {
//   let outputArr = [];

//   let newWord = str.split(" ");
//   for (let i = 0; i < newWord.length; i++) {
//     let firstLetter = newWord[i].slice(0, 1).toUpperCase();
//     let restOfWord = newWord[i].slice(1).toLowerCase();

//     outputArr.push(firstLetter + restOfWord);
//   }

//   return outputArr.join(" ");
// }

// console.log(titleCase("the quick brown fox"));
// // Expected Output: "The Quick Brown Fox"

// console.log(titleCase("jAvAsCrIpT iS aWeSoMe"));
// // Expected Output: "Javascript Is Awesome"

// function findLongestWord(str) {
//   let longest = "";

//   // Your code here!
//   let longestArr = str.split(" ");

//   for (let i = 0; i < longestArr.length; i++) {
//     if (longestArr[i].length > longest.length) {
//       longest = longestArr[i];
//     }
//   }
//   return longest;
// }

// console.log(findLongestWord("The quick brown jumping fox"));
// // Expected Output: "jumping"

// console.log(findLongestWord("JavaScript is an awesome language"));
// // Expected Output: "JavaScript"

// function isPalindrome(str) {
//   let output = "";
//   let arr = str.split("").reverse().join("");
//   if (arr === str) {
//     output = true;
//   } else {
//     output = false;
//   }

//   return output;
// }

// console.log(isPalindrome("racecar")); // Expected Output: true
// console.log(isPalindrome("hello")); // Expected Output: false
// console.log(isPalindrome("madam")); // Expected Output: true

// function shiftFirstHalf(str) {
//   let half = Math.ceil(str.length / 2);

//   let firstHalf = str.slice(0, half);
//   let secondHalf = str.slice(half);

//   return secondHalf + firstHalf;
// }

// console.log(shiftFirstHalf("abcdef")); // Expected Output: "defabc"
// console.log(shiftFirstHalf("coding")); // Expected Output: "ingcod"
// console.log(shiftFirstHalf("abcde")); // Expected Output: "deabc"

// function maskMiddle(str) {
//   if (str.length <= 4) {
//     return str;
//   }

//   let firstTwo = str.slice(0, 2);
//   let lastTwo = str.slice(-2);

//   // Grab everything in the middle
//   let middle = str.slice(2, -2);

//   // Replace every character in that middle piece with a dash
//   // (We can use a quick loop or .replace() for this, but let's keep it simple with a loop)
//   let dashes = "";
//   for (let i = 0; i < middle.length; i++) {
//     dashes += "-";
//   }

//   return firstTwo + dashes + lastTwo;
// }

// console.log(maskMiddle("javascript")); // Expected Output: "ja------pt"

// function swapEnds(str) {
//   let first = str.slice(0, 3);
//   let last = str.slice(-3);
//   let middle = str.slice(3, -3);

//   return last + middle + first;
// }

// console.log(swapEnds("abcdef")); // Expected Output: "defabc"
// console.log(swapEnds("helloworld")); // Expected Output: "rldoworhel"
// // (First 3: "hel", Last 3: "rld", Middle: "lowor" -> "rld" + "lowor" + "hel")

// function charCount(str) {
//   let counts = {};

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (counts[char]) {
//       counts[char] += 1;
//     } else {
//       counts[char] = 1;
//     }
//   }

//   return counts;
// }

// console.log(charCount("apple"));
// // Expected Output: { a: 1, p: 2, l: 1, e: 1 }

// console.log(charCount("banana"));
// // Expected Output: { b: 1, a: 3, n: 2 }

function firstUnique(str) {
  let counts = {};

  for (let i = 0; i < str.length; i++) {
    let item = str[i];
    if (counts[item]) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    let item = str[i];
    if (counts[item] === 1) {
      return item;
    }
  }

  return null;
}

console.log(firstUnique("leetcode")); // Expected Output: "l" ('l' only appears once)
console.log(firstUnique("loveleetcode")); // Expected Output: "v" ('l' repeats, 'o' repeats, 'v' is first unique)
console.log(firstUnique("aabbcc")); // Expected Output: null
