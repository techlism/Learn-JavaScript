'use strict'
// String also behaves like array (in context of indexes)

const airline="TAP Air Portugal";

const plane='A320';

console.log(airline[0]);

// another small thing
console.log("Kundan"[1]); //u


// index of method

console.log(airline.indexOf('A')); // the first occurence

//lastIndexOf

console.log(airline.lastIndexOf('A')); // last occurence

// Slice method (returns a new string) takes indexes as argument

console.log(airline.slice(4,7)); //But 7 is not inclusive (length = 7-4)

console.log(airline.slice(0,airline.indexOf(' '))); //TAP

// We can specify negative index (it will start slicing from last)

console.log(airline.slice(-5)); // tugal

const str1="Kundan";

console.log(typeof(str1)); // String (String Primitive)

const str2 = new String(str1);

console.log(typeof(str2)); // Object (String Object)

// Basically when we call methods on strings, js (behind the scenes) converts string primitive to object (called boxing) to apply methods.

console.log(airline.toLocaleLowerCase());

const passenger = "kunDAn";

const rightName = function(passenger){
    return passenger.charAt(0).toUpperCase()+(passenger.toLowerCase()).slice(1)
}

console.log(rightName("abcDeFwewiQ"));

// Trim method

// It removes white spaces

const email = '  kundan@hello.com ';

console.log(email.trim());

// Replace method
// Syntax: string.replace("part-in-the-string","new replacement")
const priceGB='288,97'
const priceUS=priceGB.replace(',','.');
console.log(priceUS);
// replaceAll method (ES2021)

// includes

console.log("Kundan".includes('K')); // true

// start with

console.log("Kundan".startsWith('K')); //true (it can be  a string also)

console.log("Kundan".endsWith("dan")); //true

// split method

console.log(("A+very+nice+string".split("+"))); // Here + is a divider string

// Join method

const [firstname, lastname]='Kundan Kumar'.split(' ');

const newName=["Mr.",firstname,lastname].join(" ");

console.log(newName);

// Padding

const message = "I am Kundan Kumar";

console.log(message.padStart(message.length+1,'+').padEnd()); // +I am Kundan Kumar

// Basically whatever the value will be in first parameter minus the string length that much padding will be added.

// padding is useful in many cases : for example masking.

const masking=function(cardnumber){
    const str=String(cardnumber);
    const last = str.slice(-4);
    return last.padStart(str.length,'*');
}
console.log(masking(1455623));

// Repeat

const msg="Bad Weather ";
console.log(msg.repeat(5));

/*----------------------------------*/

function doCamelCase(str){
    const index=Number(str.indexOf('_'));
    const newstr=`${str.slice(0,index)}${str.slice(index+1)}`
    console.log(newstr.replace(newstr[index],newstr[index].toUpperCase()));
    
}

doCamelCase("calculate_AGE");