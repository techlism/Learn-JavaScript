// Classes in javascript do not work like traditional classes (in other languages).
// Basically ES6 classes are just a syntactic sugar (especially people coming from other languages).
'use strict'

// const { get } = require("express/lib/response");

// class expression
// const Person = class {}

//class declaration
class Person {
    //constructor is a method of class and name should be explicitly constructor (and we pass data into constructor)
    constructor(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    }
    // So whatever functions we declare outside of constructor will be on its prototype not on the objects themselves.
    // ⤵️ these methods are called instance methods
    calcAge(){
        console.log(2023-this.birthYear);
    }
    // static method
    static greet(){
        console.log("Hi there!");
    }
}
const kundan = new Person ('Kundan',2022);
console.log(kundan.__proto__ === Person.prototype); // true
// In MDN __proto__ is said to be depricated and not in use.

// Classes are not hoisted
// Classes are first-class citizens.
// Classes are executed in strict mode.
// one class can have only one constructor unlike other languages like Java.
// before using classes *understand constructor function in detail*.

// Getters and Setters (it can be useful in validation sometimes)

const account = {
    owner:'Kundan',
    movements:[200,65,34,455],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    // set can have only 1 parameter
    set latest(mov){
        this.movements.push(mov);
    }
}
// Now get latest will act like a property not like a method and similarly to set latest we will use assignment operator.
console.log(account.latest);
account.latest=122;
console.log(account.latest);
//Although we could have different names (to avoid confusion).

// Static Methods : Static methods are defined on the class itself.
// You cannnot call a static method on an object but only on an object class.
// Example : ⤵️
Person.hey = function (){
    console.log("Hi there!");
}
Person.hey();
// But we cannot call it on instance of Person (say kundan in this case) ⤵️
// kundan.hey(); // kundan.hey is not a function

// Similarly we can add static method to our class declaration also by using static keyword in front of a method.
// More @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
Person.greet();

// Object.create is another idea of implementing prototypal inheritance (Least used way to do so)

const PersonProto={
    // init is just a name(it could be anything)
    init(firstName,birthYear){
        this.birthYear=birthYear;
        this.firstName=firstName;
    },
    calcAge(){
        console.log(2023-this.birthYear);
    }
};

const kumar = Object.create(PersonProto);
kumar.init("Kundan",2002);
// console.log(kumar.__proto__==PersonProto); // true
// kumar.birthYear = 2002;
kumar.calcAge(); // 21 (NaN if declaration anywhere (above or init)).

class staticClass{
    static num = 8;
    static number = ()=>{
        return this.num; // this.num should be used
    }
    constructor(){
        this.value=2;
        this.val = this.num; // num is not defined so use this.num
    }
}

const staticK = new staticClass();
// staticK.number(); // error - not a function
console.log(staticClass.number());
console.log(staticClass.num);