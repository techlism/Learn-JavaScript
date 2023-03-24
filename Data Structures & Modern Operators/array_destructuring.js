'use strict'

// Array Destructuring : Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects.
// When destructuring an array, we use their positions (or index) in an assignment.

function log(str){
    console.log(str);
}

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
};

// Conventionally
const arr =[2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// This is how we do destructuring of array ⤵️
let [x,y,z] = arr;  // changing it to let to allow swapping.
// Syntax : const[variables]=array
console.log(arr);
console.log(x,y,z);
//for example I want to skip second value and go to third one to do that just leave a space b/w commas
const[main, ,secondary]=restaurant.categories;
log(main); //Italian
log(secondary); //vegeterian

// Default values
// For example the case where the size of array is unknown then we may be accessing the values at index that does not exist.
// So we can set a default value that the variable(s) will take.

const arr2=[1,2];
const [a=1,b=1,c=1]=arr2;  // c is undefined but now c will have default value of 1
console.log(a,b,c);

//Nested Destructuring

const arr3=[1,2,[3,4]];
// To assign all values to individual variables (as in 1 2 3 and 4) we have use destructuring

const [p,q,[r,s]]=arr3;

console.log(p,q,r,s);

//To swap values 
console.log(x,y);

[x,y]=[y,x];

console.log(x,y);

// We can also destructure values directly from return value of a function call.