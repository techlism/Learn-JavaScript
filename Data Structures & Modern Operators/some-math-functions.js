'use strict'


// Internally javascript stores every number as floating digit (no matter )
console.log(23===23.00); // true

// Also javascript stores number in binary form (base 2 64 bits) which causes some irregularity in storing number (example below).
console.log(0.1+0.2); //0.30000000000000004

console.log(0.1+0.2===0.3); //false

// Parsing
console.log(Number.parseInt('30 is a number here')); // 30
console.log(Number.parseInt('30 is a number and 25 is also a number.2')); // 30

// parseInt accepts a second argument where we define regex (or basically base value of type of number you are looking for 2-binary and so on).

// isNaN (Not a number)

console.log(Number.isNaN(NaN)); // true 

//best method to check if something is a number or not (isFinite)

console.log(Number.isFinite(23/0)); // false
console.log(Number.isFinite(NaN)); // false

// Rounding Decimals

console.log((2.999).toFixed(0)); //3 (just how we would do)

console.log((2.45).toFixed(3)); // the argument we pass in toFixed is the number of digits we want after decimal

// Remainder operator (Modulo Operator)

console.log(2%3); // 2

console.log(3%2); // 1

// Numeric Seperator (_) (ES2021) - to increase Readability

console.log(2_000_000); // 2000000

// BigInt (ES2020) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

// The biggest number java script can safely represent is 2^53 -1

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(BigInt(Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER)); // 18014398509481982n

const big = 12122222222222222n; // A way to write big int.
const small = 5n;
const num= 12n;
console.log(big/small); // 12122222222222222n
console.log(small * num); // 60n 
// Here n is just a way to show that the corresponding number belongs to BigInt primitive
// Operations are only possible b/w two BigInts (expect comparing operators and string concatenation).
// Math operators also don't work (Such as sqrt and all).
console.log(num/small); // 2n
