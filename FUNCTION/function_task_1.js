/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// function tellFortune(
//   job_title,
//   geographic_location,
//   partner_name,
//   number_of_children
// ) {
//   let y = `  You will be ${job_title}  in ${geographic_location}, and married to ${partner_name} with ${number_of_children} kids`;
//   return y;
// }
// console.log(tellFortune("software engineer", "Jordan", "Alice", 3));

/*------------------------------------------------------------------------------------
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

// function calculateDogAge(
//   dog_age = parseInt(prompt("Enter a number for dog age:"))
// ) {
//   let age = dog_age * 7;
//   let z = "Your doggie is " + age + " years old in dog years!";

//   return z;
// }
// console.log(calculateDogAge());

// 3----------------------------------------------------------------
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age 100).
// outputs the result to the screen like so:
// "You will need NN to last you until the ripe old age of X"

// Ex: calculateSupply(30, 3);
// => 'You will need 76650 cups of tea to last you until the ripe old age of 100;/*

// function calculateSupply(
//   age_num = parseInt(prompt("Enter a number for age:")),
//   cups = parseInt(prompt("Enter a number for cups:"))
// ) {
//   let age = age_num * 365;
//   v = age * cups;
//   let calc =
//     "You will need " +
//     v +
//     "cups of tea to last you until the ripe old age of " +
//     age / 365;
//   return calc;
// }
// console.log(calculateSupply());

// 4-------------------------------------------------------------------------------------
// Write a function called greet that:
// takes 1 argument: name.
// and it will return hello + name

// Ex: greet("Adam")
// => "Hello Adam"

// function greet(name = prompt("Enter name:")) {
//   let g = "Hello " + name;
//   return g;
// }
// console.log(greet());

// */

/*------------------------------------------------------------
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}

 error1:cat
  error2:7
  error:'7'

*/
// function double(cat) {
//   return 2 * cat;
// }

// function double() {
//   return 2 * 7;
// }

// function double(x) {
//   return 2 * 7;
// }

/*------------------------------------------------------------------------------------------------


6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;


 q6: errors:func name ,),functiondouble2 x),},,function (x) double3,}

*/
// function double1(x) {
//   return 2 * x;
// }

// function double2(x) {
//   return 2 * x;
// }

// function double3(x) {
//   return 2 * x;
// }
/*----------------------------------------------------------------------------------
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
// function cube(cube_number = parseInt(prompt("Enter a number :"))) {
//   cube_num = cube_number * cube_number * cube_number;
//   return cube_num;
// }

// console.log(cube());

/*---------------------------------------------------------------------------------------------------
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
// function multiply(
//   first_number = parseInt(prompt("Enter a number :")),
//   second_number = parseInt(prompt("Enter another number :"))
// ) {
//   ans = first_number * second_number;
//   return ans;
// }

// console.log(multiply());
/*-------------------------------------------------------------------------------------------------------
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// function canIGetADrivingLicense(age = parseInt(prompt("Enter a number :"))) {
//   if (age >= 20) {
//     console.log("yes you can");
//   } else {
//     x = 20 - age;
//     console.log("please come back after " + x + " years to get one");
//   }

//   return;
// }

// console.log(canIGetADrivingLicense());

/*---------------------------------------------------------------------------------------------
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

// function sameLength(
//   first_str = prompt("Enter a string :"),
//   second_str = prompt("Enter another string :")
// ) {
//   let f = first_str.length;
//   let s = second_str.length;

//   if (f == s) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }

//   return;
// }

// console.log(sameLength());

// second -solution
// function sameLength(str1,str2){
//   return str1.length()=== str2.length();
// }
// // console.log(sameLength("tree"),("clue"));

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
-----------------------------------------------------------------------------------------------------------
*/

// function largerNubmer(
//   num1 = prompt("Enter a num :"),
//   num2 = prompt("Enter another num :")
// ) {
//   if (num1 > num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }

//   return;
// }

// console.log(largerNubmer());

/*-----------------------------------------------------------------------------------------------------------
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

// function smallerNubmer(
//   num1 = prompt("Enter first num :"),
//   num2 = prompt("Enter second num :"),
//   num3 = prompt("Enter third num :")
// ) {
//   if (num1 < num2 && num1 < num3) {
//     console.log(num1);
//   } else if (num2 < num1 && num2 < num3) {
//     console.log(num2);
//   } else {
//     console.log(num3);
//   }

//   return;
// }

// console.log(smallerNubmer());
/*-----------------------------------------------------------------------------------------------------------
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
// function shorterString(
//   str1 = prompt("Enter first str :"),
//   str2 = prompt("Enter second str :"),
//   str3 = prompt("Enter third str :"),
//   str4 = prompt("Enter fourth str :"),
//   str5 = prompt("Enter fifth str :")
// // ) {
//   if (
//     str1.length <= str2.length &&
//     str1.length <= str3.length &&
//     str1.length <= str4.length &&
//     str1.length <= str5.length &&
//     console.log(str1)
//   ) {
//   } else if (
//     str2.length <= str1.length &&
//     str2.length <= str3.length &&
//     str2.length <= str4.length &&
//     str2.length <= str5.length &&
//     console.log(str2)
//   ) {
//   } else if (
//     str3.length <= str1.length &&
//     str3.length <= str2.length &&
//     str3.length <= str4.length &&
//     str3.length <= str5.length &&
//     console.log(str3)
//   ) {
//   } else if (
//     str4.length <= str1.length &&
//     str4.length <= str2.length &&
//     str4.length <= str3.length &&
//     str4.length <= str5.length &&
//     console.log(str4)
//   ) {
//   } else
//     str5.length <= str1.length &&
//       str5.length <= str2.length &&
//       str5.length <= str3.length &&
//       str5.length <= str4.length &&
//       console.log(str5);
//   return;
// }
// console.log(shorterString());

/*------------------------------------------------------------------------------------------------------------
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

// function longerString(
//   str1 = prompt("Enter first str :"),
//   str2 = prompt("Enter second str :"),
//   str3 = prompt("Enter third str :"),
//   str4 = prompt("Enter fourth str :")
// ) {
//   if (
//     str1.length >= str2.length &&
//     str1.length >= str3.length &&
//     str1.length >= str4.length &&
//     console.log(str1)
//   ) {
//   } else if (
//     str2.length >= str1.length &&
//     str2.length >= str3.length &&
//     str2.length >= str4.length &&
//     console.log(str2)
//   ) {
//   } else if (
//     str3.length >= str1.length &&
//     str3.length >= str2.length &&
//     str3.length >= str4.length &&
//     console.log(str3)
//   ) {
//   } else if (
//     str4.length >= str1.length &&
//     str4.length >= str2.length &&
//     str4.length >= str3.length &&
//     console.log(str4)
//   )
//     return;
// }
// console.log(longerString());

/*---------------------------------------------------------------------------------------------------
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

// function isEven(num1 = prompt("Enter num :")) {
//   if (num1 % 2 == 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return;
// }

// console.log(isEven());

/*----------------------------------------------------------------------------------------------------
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
// function isOdd(num1 = prompt("Enter num :")) {
//   if (num1 % 2 !== 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return;
// }

// console.log(isOdd());
/*---------------------------------------------------------------------------------------------------
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// function positive(num1 = prompt("Enter num :")) {
//   if (num1 > 0) {
//     console.log(num1);
//   } else {
//     console.log(-1 * num1);
//   }
//   return;
// }

// console.log(positive());
/*---------------------------------------------------------------------------------------------------
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

// let firstName = prompt("Enter  firstName:");
// let lastName = prompt("Enter  lastName:");

// function fullName(x, y) {
//   let full = x + " " + y;

//   return full;
// }
// console.log(fullName(firstName, lastName));
// /*--------------------------------------------------------------------------------------------------
// 19
// Write a function called average
// that takes five numbers as inputs
// and returns the average of those numbers.

// Ex: average(1,2,3,4,5)
// => 3

// Ex: average(5,7,9,3,5)
// => 5.8

// */

// function average(
//   num1 = parseFloat(prompt("Enter first num :")),
//   num2 = parseFloat(prompt("Enter second num :")),
//   num3 = parseFloat(prompt("Enter third num :")),
//   num4 = parseFloat(prompt("Enter fourth num :")),
//   num5 = parseFloat(prompt("Enter fifth num :"))
// ) {
//   avg = (num1 + num2 + num3 + num4 + num5) / 5;
//   return avg;
// }
// console.log(average());

/*---------------------------------------------------------------------------------------
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
// function randomNumber(min, max) {
//   return Math.random();
// }
// console.log(randomNumber());
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

// function randomBetweenNumbers(x, y) {
//   return Math.floor(Math.random() * (y - x)) + x;
// }
// console.log(randomBetweenNumbers(1, 8));

/*-------------------------------------------------------------------------------
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

// function scoreInUniversty(score = prompt("Enter score :")) {
//   if (score >= 95 && score <= 100) {
//     console.log("A");
//   } else if (score >= 85 && score <= 94) {
//     console.log("B");
//   } else if (score >= 70 && score <= 84) {
//     console.log("C");
//   } else if (score >= 50 && score <= 69) {
//     console.log("D");
//   } else console.log("F");
//   return;
// }

// console.log(scoreInUniversty());

/*

---------------------------------------------------------------------
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

// let x = 0;
// function counter() {
//   return (x += 1);
// }
// console.log(counter());
// console.log(counter());

// console.log(counter());

// x = 0;
/*

---------------------------------------------------
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
let x = 0;
function counter() {
  return (x += 1);
}
console.log(counter());
console.log(counter());

console.log(counter());

x = 0;

function resetCounter() {
  return (x = 0);
}
console.log(resetCounter());
console.log(counter());
