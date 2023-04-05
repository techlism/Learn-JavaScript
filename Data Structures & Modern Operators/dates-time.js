'use strict'

// There are kinda 4 ways to create a date data type.

const now = new Date(); // This gives current date
console.log(now);  

// parse date from a string 
console.log(new Date('Aug 02 2020 18:05:21')); //2020-08-02T12:35:21.000Z

console.log(new Date('December 23,2015'));

//unix time (1St January 1970)
// Months in JavaScript are zero based (0-January and 11 December)

console.log(new Date(0));

// another way is 

console.log(new Date(2037,10,19,15,23,5)); // 2037-11-19T09:53:05.000Z

// Working with dates (Methods)

const future = new Date(2037,10,19,15,23,5);

console.log(future);

console.log(future.getFullYear()); //2037
console.log(future.getMonth());  // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //5
console.log(future.toISOString()); //  International Standard (Most common way to store date and time)
console.log(future.getTime());
console.log(new Date(2142256980000)); // This implies number of milliseconds after unix time;
console.log(Date.now()) // The number of milliseconds passed from unix time
future.setFullYear(2040); // Everything will be same except the year 
// Similarly there's a set date and time methods.
console.log(future);

// How to display date and time in your desired format is ⤵️  (alternatively we can internalization API,skipping now @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) 

const nowDate = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()+1}`; // Same for the time and all (if we need to add something (to set region) we can do that here)
console.log(nowDate);

// Now there's an issue that is if we want 0 in front of a date (say 01) . What to do ?
// We can store all individual variables and then make them a template literal and then use padStart(2,0);

// How to calculations with date 

// Simply we can convert dates into milliseconds and do operations b/w them.

const daysleft = (future - now)/1000*60*60*24*365;
console.log(daysleft);

// To get all edge cases and details we can use a js library called Moment.js

// Internationalizing Numbers @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

