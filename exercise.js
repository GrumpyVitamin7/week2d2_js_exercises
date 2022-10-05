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

let name1 = "john"
let name2 = "John"
let isTheyAreTheSame = name1 === name2
console.log("let's see whether they are the same:", isTheyAreTheSame);

let name3 = name1 = name2.toLowerCase()

console.log(name3);


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let X = 9
if(X > 9){
    console.log("bigger than 9")
}if(X = 8){
    console.log("eight")
}if(X = 7){
    console.log("seven")
}if(X =6){
    console.log("six")
}if(X = 5){
    console.log("five")
}if(X = 4){
    console.log("four")
}if(X = 3){
    console.log("three")
}if(X = 2){
    console.log("two")
}if(X = 1){
    console.log("one")
}if(X = 0){
    console.log("zero")
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

let gender = "male"
let isMale = 
(gender = "male") ? "Male" : "Female";
console.log(isMale);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */