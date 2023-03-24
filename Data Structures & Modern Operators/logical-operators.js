'use strict'

console.log(3 || "Kundan"); // 3 
// ⤴️ it is called short-circuiting : in or operator if any value is a truthy value (3 in our case) then it will not even evaluate the rest statement and return truthy value.

console.log('' || "Kundan"); // Kundan (Empty string is a falsy value)

console.log(true || 0); //true

console.log(undefined || null); //null

console.log(undefined || 0 ||''||"hello"||23 || null); // hello

console.log(0 && 'Kundan'); // 0
console.log(7 && "Kundan"); //Kundan (if all are truthy then last value will be returned) 


//Nullish Coalescing

// for example if we have a default value for an order (say).

let orders=null;

console.log(orders || 10); // Even though the no. of order is zero it will take default value of 10(OR behaviour).

// so we can use something called nullish coalescing 
orders=0;
console.log(orders ?? 10); //0

//Learn about logical assignment operators (ES2021)