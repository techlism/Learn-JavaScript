'use strict'
// Closure

const secureBooking=function(){
    let pc=0;
    return function(){
        pc++;
        console.log(pc);
    }
}

const booker = secureBooking();

booker(); // 1
booker(); // 2
booker(); // 3

console.dir(booker); // In the output we can find something ⤵️
// [[Scopes]]: Scopes[3]
// 0: Closure (secureBooking) --- This means that the booker function is under closure with the function secureBooking
// pc:3

// Any function always has access to the variable environment
// of the execution context in which the function was created.

// A closure is the combination of a function and the lexical environment within which that function was declared.
// This environment consists of any local variables that were in-scope at the time the closure was created.

//Some more examples
let f;
const g = function(){
    const a=23;
    f=function(){
        console.log(a*2);
    };
};

const h = function(){
    const b=777;
    f=function(){
        console.log(b*2);
    };
};

g();
f(); // 46
h();
f(); // 1554

// Re-asigning also creates closure

// Timer (setTimeout)

// Syntax : setTimeout(callback-function(),time(in milliseconds));

const boardPassengers=function(n,wait){
    const perGroup=n/3;
    setTimeout(function(){
        console.log("Passengers can board now");
        console.log(`We have 3 groups each with ${perGroup} passengers`);
    },wait*1000);
    console.log(`We will start boarding in ${wait} seconds`);
}

boardPassengers(180,3);
console.dir(boardPassengers);

// Closure has higher priority in scope chain

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures