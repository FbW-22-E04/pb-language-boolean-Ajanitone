const strang = "3";
console.log("01a the == is used for comparison", strang == 3);
console.log("01b the === is used for compararing Value & Type", strang === 3);
console.log("01c the = is used to assign a value to a variable");

console.log("-------------------------------------------------");

let myVar = true;

console.log((myVar = !true ? "good morning" : "good evening"));

console.log("-------------------------------------------------");

let firstName = "" || "John" || 0;
let emptyStr = "" && false && "Hello World";
let zero = ("" && false) || 0;
let seven = 75 && "nine" && 7;

console.log("03", firstName, zero, emptyStr, seven);

console.log("---------------EXTRA EXERCISES----------------------------------");

const number = 50;
const number1 = 60;
console.log(
  "01a",
  number > 40 && number <= 70 && number1 > 40 && number1 <= 70 ? "yes" : "no"
);

console.log(
  "01b",
  number > 70 && number <= 100 && number1 > 70 && number1 <= 100 ? "yes" : "no"
);
console.log("---------------EXTRA EXERCISES----------------------------------");

const algebra = (22 - 19) * 3;

console.log("02", algebra);
04;

console.log("-------------------------------------------------");

// * 03
//  * Write a program to check two given numbers
//  * and print true if one of the numbers is 50 or if their sum is 50

const numeral = 50;
const numeral1 = 25;

console.log("03", numeral == 50 || numeral + numeral1 == 50 ? "true" : "false");

console.log("-------------------------------------------------");

// * Write a program to check two given integers
// * and print 'Yes' if one is positive and another one is negative
// * or 'No' if both are positive/negative

const inter = 50;
const inter1 = -75;
console.log("04", inter >= 0 || inter1 > 0 ? "yes" : "no");

console.log("-------------------------------------------------");

// * 05
// * Write a program that prints a given string.
// * If the given string begins with "Py" then print the original string.
// * Else print the string adding "Py" in front of it.

const string = "thon";
const string1 = "Py";
console.log(`05:${string1}${string}`);

console.log("-------------------------------------------------");

// * 06
// * Write a program to create a new string from a given string taking the last 3 characters
// * and added at both the front and back.
// * The string length must be 3 or more

const name = "Ojijo";
const lastLetter = name.slice(-3);

console.log(`06:${lastLetter}${name}${lastLetter}`);

console.log("-------------------------------------------------");

// * 07
//  * Write a program that has 3 numbers and prints the biggest of them
//  * without using Math.max()

const n1 = 5;
n2 = 16;
n3 = 20;

console.log(
  "07:",
  (n1 < n2 ? "n2 is the biggest" : "n1 is the biggest?") &&
    (n2 < n3 ? "n3 is the biggest" : "n2 is the biggest") &&
    (n1 < n3 ? "n3 is the biggest" : "n1 is the biggest")
);

console.log("-------------------------------------------------");

// * 08
//  * Write a program that finds the number which is nearest to 100
//  * from two different given integer values

const nm = 59,
  nm2 = 79,
  nm3 = 44;
console.log(
  "08:",
  (nm < nm2 ? "nm2 is bigger" : "nm is greater") &&
    (nm2 <= 100 ? "nm2 is nearest to 100" : "nm2 is more than 100") &&
    (nm3 >= nm2 ? "nm3 is the nearest to 100" : "nm3 is nearest to 100")
);

console.log("-------------------------------------------------");

// 9 - could be challenging
// * Write a program that checks whether the last digit of three given positive integers
// * is the same

const dig = 29,
  dig1 = 53,
  dig2 = 73;
const digString = dig.toString();
const dig1String = dig1.toString();
const dig2String = dig2.toString();
const secNr = digString[1];
const secNr1 = dig1String[1];
const secNr2 = dig2String[1];
console.log(
  "09",
  (secNr === secNr1 ? "true" : "false") &&
    (secNr1 === secNr2 ? "true" : "false") &&
    (secNr === secNr2 ? "they are the same" : "they are not the same")
);
