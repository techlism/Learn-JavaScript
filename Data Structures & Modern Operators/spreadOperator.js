'use strict'

/* Spread Operator : The spread (...) syntax allows an iterable, such as an array or string,
   to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
*/
// For  example : 

const arr = [7,8,9];

// To copy the values of arr into a new array can be done by using loops or manually..

// But we can use spread operator to achieve this functionality.

const newArr=[1,2,...arr]; // It creates a new array

console.log(...arr); // 7 8 9

console.log(newArr);

console.log(...newArr); // 1 2 7 8 9

// 2 more use cases for ... operator

// To copy (shallow) an array or Objects
const arr2=[...arr];

// To merge arrays
const merged=[...arr,...newArr];

//Object are not iterables.

// spread operator does not work in template literal as in ${...arr}

// After ES2018 we can use ... now even with objects.

// there is another operator that has same syntax (called rest parameters and patterns).

