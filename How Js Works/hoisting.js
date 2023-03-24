/* Hoisting : Make some types of variables accessible/usable in code
before they are actually declared. 

But the behind the scenes for variable declarations, and for each variable
a new property in the variable environment object. */
//Hoisting works differently for different things.

// A function declarations can be hoisted
// var variables can be hoisted but intial value will be undefined
// let and const can't be hoisted
// Arrow functions and function expressions' hoisting depends on the way they are declared as in let/const can't be hoisted but var can be.
/*
TDZ(Temporal Dead Zone) : a variable used before intialized. But the engine knows that eventually it will be declared (in same scope).
*/
//console.log(a);        //undefined
//console.log(b);       //Cannot access 'b' before initialization
//console.log(c);       //ReferenceError: c is not defined

console.log(add(2,4)); //6

console.log(addExpr(2,4)); //Cannot access 'addExpr' before initialization

function add(a,b){
    return a+b;
}

// All the code before this in TDZ for this function expression
const addExpr=function(a,b){
    return a+b;
}

var a = 1;
let b = 2;
const c = 3; // All the code before this is in TDZ


// Note : Just avoid using hoisting because debugging hoisting is hard.

// var variables is a part of global window object while const &  let are not.
