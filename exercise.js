/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

let myHeight = 155; //number
let myName = "Yuanyuan Han"; //string
let myMajor //undefined
let myHouse = null; //null
console.log("here we can see four datatypes in JS, they are numbers, strings, undefined, and null: ", myHeight + " " + myName + " " + myMajor + " " + myHouse);

let age = 30;
let areYouAllowedToDrink = age > 21; //boolean
console.log("there is another data type---Boolean, if the statement is accurately applied it shows:", areYouAllowedToDrink);

let height = 180;
let areYouTallEnoughToReachTheNet = height >= 188; //boolean
console.log("and if the statement is NOT applied, it goes:", areYouTallEnoughToReachTheNet);

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

let myVar = "assigning a value";
console.log("In JS, we need variables to calculate algorithm, by assigning variables different value we can make JS to help us do the calculation. So variables are like:", myVar);

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let number1 = 12
let number2 = 20
let theSum = number1 + number2
console.log("the sum of 12 and 20 equals:", theSum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let y = 12
let theSub = x - y
console.log("the subtraction is:", theSub);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 6;
if (x === 1) {
  console.log("one");
} else if (x === 2) {
  console.log("two");
} else if (x === 3) {
  console.log("three");
} else if (x === 4) {
  console.log("four");
} else if (x === 5) {
  console.log("five");
} else if (x === 6) {
  console.log("six");
} else if (x === 7) {
  console.log("seven");
} else if (x === 8) {
  console.log("eight");
} else if (x === 9) {
  console.log("nine");
} else {
  console.log("not a valid number!");
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

// ternary operator to check the eligibility to vote
let trueAge = 17;
let result =
    (trueAge >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);


// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = false;
let gender = isMale ? "male" : "female";
console.log(gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let a = 5;
let b = 10;
if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
  console.log(true);
} else {
  console.log(false);
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let str = "Yuanyuan " + "Han";

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let x1 = 3;
let y1 = 6;
let z = -1;

if (x1 > y1 && x > z) {
  if (y > z) {
    console.log(x1 + ", " + y1 + ", " + z);
  } else {
    console.log(x1 + ", " + z + ", " + y1);
  }
} else if (y1 > x1 && y1 > z) {
  if (x1 > z) {
    console.log(y1 + ", " + x1 + ", " + z);
  } else {
    console.log(y1 + ", " + z + ", " + x1);
  }
} else if (z > x1 && z > y1) {
  if (x > y) {
    console.log(z + ", " + x1 + ", " + y1);
  } else {
    console.log(z + ", " + y1 + ", " + x1);
  }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let d = 4;
let h = 5;
let average = (d + h) / 2;
console.log(average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let str1 = "aaaa";
let str2 = "bb";
if (str1.length > str2.length) {
  console.log("str1 is longer");
} else {
  console.log("str2 is longer");
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

console.log(typeof str1);
if (typeof d === "number") {
  console.log(true);
} else {
  console.log(false);
}

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let num = 400;
let per = 20;
let percentage = (400 / 100) * 20;
console.log(percentage);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }