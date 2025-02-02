// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// assign the variable of name to string Dane
// we check if name is equal to Mary; it is falsy; move on to next conditional
// Else statement fires because if statement fails
// the program will log "how do you do"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// create the variable secret and create the variable code and assign it an int of 123
// the code is 123 which means the if statement is truthy; secret is assigned the value of string "super"; code is now assigned to 246
// the code is 246 which means the if statement is falsey; nothing happens.
// program console.logs "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// create the variable isStudent and give it a bool of true; create variable age and assign it int 34; create zip and assign it int 55407.
// checks if isStudent is true AND if zip is greater than 80000; falsey so move to next condition
// checks if isStudent is false OR if their age is less than 30; falsey so move to next condition
// checks if isStudent is true; is truthy; console.log(welcome to prime) and ends condtional

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne should be 'blue' and colorTwo should be 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //FIX - colorTwo should also be set to purple
  //colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX - not a huge problem, but time is most likely a changing variable not a constant. let would be more appropriate.
const time = 4;

//FIX - should be and not or
// if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - instructions say to check if age is greater or equal to minAge - wont change results but following instructions
// if (age >= minAge)
if(minAge <= age) {
  //FIX - should allow entry here;
  //console.log ('entry')
  console.log('no entry');
} else {
  //FIX - should not allow entry
  //console.log('no entry')
  console.log('enter');
}
*/
