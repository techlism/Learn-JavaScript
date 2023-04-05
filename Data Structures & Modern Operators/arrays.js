'use strict'

let arr=[1,2,3,4,5];

console.log(arr.slice(2)); // [3,4,5] (Return a new array)

console.log(arr.slice(2,4)); // [3,4]

console.log(arr.slice(-2)); // [4,5]

console.log(arr.slice(1,-2)); // [2,3]

// Can be also to make a shallow copy of the array

console.log(arr.slice());

// Splice method : works as quite similar as slice but instead mutates the original array


console.log(arr.splice(2)); // [3,4,5] this values you will not find now in original array
console.log(arr); // [1,2]

const arr2=[4,3,2,1];
console.log(arr2.reverse()); // reverse method actually mutate the original array

const arr3=arr.concat(arr2); // concat method does not mutate original arrays

console.log(arr3); // [ 1, 2, 1, 2, 3, 4 ] 

console.log(Number(arr3.join(''))); // We can join elements with an empty string and then change it into a Number

//To get the last element of the array (if length is not known)

console.log(arr3.slice(-1)[0]);
//or
console.log(arr3[arr3.length-1]);

// At method (ES2021) [Also works on strings]

console.log(arr3.at(5));

// we can use negative indexes (it will then count from right side)

console.log(arr3.at(-1)); // Last element

// For each method

const movements=[200,450,-400,3000,-650,-130,70,1300];

movements.forEach(function(movement,index){  // we can have three paramters : 1st one will be  current element and 2nd the current index and 3rd one is entire array
    if(movement>0){
        console.log(`Movement ${index+1}: You deposited ${movement}`);
    }
    else{
        console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
    }
});

// we cannot use continue and break in for each loop

console.log("----------------------------------");
// Alternatively

for (const movement of movements){
    if(movement>0){
        console.log(`You deposited ${movement}`);
    }
    else{
        console.log(`You withdrew ${Math.abs(movement)}`);
    }    
}

console.log("----------------------------------");
/*---------------------------------*/

const currencies=new Map([
    ['USD','United States Dollar'],
    ['EUR','Euro'],
    ['GBP','Pound Sterling']
]);

// For each for maps

currencies.forEach(function(value,key,map){ // Three Parameters just like arrays
    console.log(`${key}: ${value}`);
});

// For each is also available for sets (Also 3 parameters except the fact that one is reduntant)
/* --------------------------------------- */
// Map, filter and reduce methods

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const arr4=[1,2,3,4];

const map1=arr4.map(x=>x*2); // multiply each value of arr4 and store it in a new array(map1)

console.log(map1); // [2,4,6,8]

const sqrt=arr4.map(x=>Math.sqrt(x));

console.log(sqrt);

// Filter
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6); // Here word represent an individual element

console.log(result);
 
/* Reduce
   >>The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
     The final result of running the reducer across all elements of the array is a single value.
   >>Another use case for reduce can be to find max/min value from an array. */

// ______________________________________

// The find() method returns the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.

const find=arr4.find(mov=>mov%3===0); // Find the first value in arr4 that is completely divisible by 3.

console.log(find);

//findIndex method

// Some and every method
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
// It doesn't modify the array.

// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

// flat and flatMap (ES2019)
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. (It takes depth as an argument).

const arrDeep=[1,2,[[22,3,34,[45,48]]]];

const flatDeep=arrDeep.flat(3);

console.log(flatDeep);

// flatMap combines flat and map method (but it goes 1 level deep).

// Sorting 
// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted  (mutates the original array).
const alpha=['a','b','e','c','f','d'];
console.log(alpha.sort()); //compareFn is argument for sort function.
//                    ⤴️ - compareFn (for ascending order we use (a,b)=>a-b) 
/*
If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.
For example, "banana" comes before "cherry". 
In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order.
All undefined elements are sorted to the end of the array.
*/


// Fill method

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

// From method

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// lectures (last 3) from section 11 from the course can be reffered later.