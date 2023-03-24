/*
this keyword : In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).

More on w3schools/mdn

In most cases, the value of this is determined by how a function is called (runtime binding).
It can't be set by assignment during execution, and it may be different each time the function is called.

In an object method, this refers to the object.
Alone, this refers to the global object(In browser it will refer global window object).
In a function (non-strict mode) this refers to the global object.
In a function (in strict mode), this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/
'use strict'

console.log(this);

const age = function(year){
    console.log(2023-year);
    console.log(this);
}
//Global Object - (Non Strict Mode)
//undefined - In Strict Mode
age(2002);

const ageArrow = (year) => {
    console.log(2023-year);
    console.log(this);
}

//Since arrow functions do not have thier own this keyword they use 'lexical' this. 
//Which means they use this keyword of thier parent , which is global object in this case
ageArrow(2002);
