'use strict'

// A constructor is a special function that creates and initializes an object instance of a class.
// In JavaScript, a constructor gets called when an object is created using the new keyword

// Arrow functions will not work as a constructor function as they don't have this keyword.

const Person = function (firstname,birthYear){
    this.firstname=firstname;
    this.birthYear=birthYear;
    // Just like we add properties we can add methods also. But it is not recommended to create methods like this. Instead we should use prototype (More @ prototypes.js).
    // this.calcAge = function() {
    //     console.log(2023-this.birthYear);
    // }
}

const kundan=new Person('Kundan',2002); // kundan is an instance of Person
console.log(typeof(kundan));
// What happens after using new operator ⤵️
// New object is created 
// function is called and this keyword is set to the new object.
// Object linked to prototype.
// function automatically return the object.