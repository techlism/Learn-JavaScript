//Template Literal - Can assemble multiple strings into single string.
// Use cases - when we have to print or use strings and we often need spaces and have to add spaces manually inside a string
const first = "Kundan";
const last="Kumar";
//Conventional way to print
console.log(first +" "+last);
//Template literal
const full=`${first} ${last}`;
//Inside the curly braces there could be any Js such as calculations,functions etc.
console.log(full);
//Another use case is to create a multi-line string;
//conventional way is \n\
console.log(`Kundan
Kumar`);

/* Type Conversion */

const year='22';
console.log(year+12);
//output will be 2212 not 34!
//So to get 34
console.log(Number(year)+12);
//But year is still a string
//But if you try to convert a string that's not a number then output will be NaN(Not a Number).
let name ="Kundan";
console.log(name);
//Implicit Conversion (coercion)
console.log("Kundan "+20 +" Something");
const num ='1' + 1;
console.log(typeof num); //String - '11'
const num2=num - 1;
console.log(typeof num2 ); //Number
console.log(num2); // 0
const num3 = 'K' -12;
console.log(num3); //NaN

//(Type Coersion) Do Not use if you don't know really what you are doing.

/* ************* */
/* Statements and Expressions */

//Expressions - Does not produce a value of their own
// 3+4 
// 1121
// true && false && !false

//Statement-> That produce actions

if(1<2){
    console.log("Kundan")
}
//ECMA - A committee to standardize javascript.
//Js - Backward Compatible (but not forward compatible)
//Es6-2015 biggest overhaul in recent times.

//On using semi colons - #you can choose between using or not using it.
// # - opinions are divided for this but my take on this if you are coming from something like python then you can prefer not using it.
// # - if you are coming from something like c/c++ or java then use it.