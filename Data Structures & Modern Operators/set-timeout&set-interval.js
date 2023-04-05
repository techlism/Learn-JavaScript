'use strict'

//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

setTimeout(() => {
    console.log("Delayed for 1 second.");
}, 1000);

// Sytnax:
// setTimeout(functionRef, delay, param1, param2, /* … ,*/ paramN) 
// functionRef : A function to be executed after the timer expires.
// delay (optional) : The time, in milliseconds that the timer should wait before the specified function or code is executed. 
// If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.
// param : Additional arguments which are passed through to the function specified by functionRef.
// More @ : https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

const add = function (a,b){
    console.log(a+b);
}
setTimeout(add,1000,12,14); // 26 (after 1000 milliseconds)

// we can cancel the timer (obviously if the delay hasn't already passed)

// say for the above function we are creating an array for a and b and we want to cancel the timeout(say any of a or b ===12) here's how to do that: ⤵️

const nums=[12,4]; 

const pizzaTimer = setTimeout(add,5000,...nums);

if(nums.includes(12)){
    clearTimeout(pizzaTimer); //  clearTimeout will prevent the callback from running
}

// setInterval
// Syntax
// setInterval(func, delay, arg0, arg1, /* … ,*/ argN)
/*
func
A function to be executed every delay milliseconds. The first execution happens after delay milliseconds.

code
An optional syntax allows you to include a string instead of a function, which is compiled and executed every delay milliseconds. This syntax is not recommended for the same reasons that make using eval() a security risk.

delay Optional
The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code. Defaults to 0 if not specified. See Delay restrictions below for details on the permitted range of delay values.

arg0, …, argN Optional
Additional arguments which are passed through to the function specified by func once the timer expires.
*/

setInterval(add,1000,12,3); // To close the setInterval follow the same steps as setTimeout (basically use clearInterval).

// More @ https://developer.mozilla.org/en-US/docs/Web/API/setIntervalm