'use strict'
//Function definition
//Use function keyword followed by name of function and then  parameters
//log function to print any thing.
function log(str){
    console.log(str);
}
let abc=54+54;
log(abc);
//This is called function declaration(basically the conventional way). In this we have a function name and function keyword.
function fruitProcessor(apples,oranges){
    log(apples),log(oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges .`;
    return juice;
}
const juice = fruitProcessor(5,10);
log(juice);

//Function without a name or anonymous function. and this whole thing is called a function expression.

//Function Expression can be used to call before declaration (hoisting). 
//Although hoisting is possible nodejs is not allowing at this moment.

const add=function (a,b){
    return a+b;
}
//How to use it?? (below).
const sum = add(1,2);
log(sum);

//Arrow Function : A function expression with shorter syntax.

const add2 = (a,b) => a + b;

//No explicit need to write return keyword.
//Very useful for one-liner functions.
const sum2=add2(23,34);
log(sum2);

//Arrow functions are being too handy for one line.

//Nested functions
const sumProd = (a,b)=>{
    const sum = add(a,b);
    const prod = a * b;
    return sum*prod;
}

const sumprd=sumProd(1,4);

log(sumProd(1,4));
//But there's a difference b/w normal function and arrow functions .
//Important-Arrow functions don't get to use 'this' keyword.
const avg = (a,b,c)=>{
    return (a+b+c)/3;
}
//Team A 
let a1=44;
let a2=23;
let a3=71;
//Team B
let b1=65;
let b2=54;
let b3=49;
function checkWinner(avg1,avg2){
    if(avg1>= 2 * avg2){
        log("Team A wins");
    }
    else if(avg1<= 2 * avg2){
        log("Team B wins");
    }
}
checkWinner(avg(a1,a2,a3),avg(b1,b2,b3));