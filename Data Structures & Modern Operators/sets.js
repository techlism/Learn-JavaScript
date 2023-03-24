'use strict'
// Before ES6 js didn't had  too many built in data structures unlike other languages.
// But after ES6 we got 2 data structures like sets and maps.

// Set objects are collections of values. A value in the set may only occur once . (MDN)

// Syntax :

const myset=new Set();

// We can have any type of data

//To add
myset.add(12);
myset.add(13);
myset.add(12);
myset.add(11);
console.log(myset); 

// Order in a set is kinda irrelevant.
// Sets are also iterable.

// To get size of the set

console.log(myset.size);

// To check if an element is in the set or not 

console.log(myset.has(12));

//To delete from set

myset.delete(13);

// How to access values from set : you don't have to because set is kinda unique and can check if a value is present or not.
// Also since sets don't indexes as such so retrieval is not intuitive.

// To delete all values : myset.clear()

// A very common use-case for set is to remove all duplicate values from an array.

let arr = [1,2,3,4,5,1,2,1,1,1,4];

const newSet=new Set(arr);

arr = new Array(...newSet); // or [...newSet]  
// Because both sets and arrays are iterables so we can use ...

console.log(arr);

// Sets have high performance as compared to arrays