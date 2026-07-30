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

function hasConsecutiveDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(hasConsecutiveDuplicates([1, 5, 2, 2, 8]));
