'use strict'

// Each and every function in JavaScript automatically has a property called prototype (including constructor function).

const Person = function (firstname,birthYear){
    this.firstname=firstname;
    this.birthYear=birthYear;
}

const kundan = new Person('Kundan',2002);

// This is what we should be using for creating methods
Person.prototype.calcAge = function() {
    console.log(2023-this.birthYear);
}
// Here Person.prototype refers to all the objects created by Person (kundan etc.)
// But we can access object(Person) prototype using __proto__
console.log(Person.__proto__);
console.log(Person.prototype===Person.__proto__); // false
console.log(Person.prototype===kundan.__proto__); // true
// We can also set properties using prototype
Person.prototype.species='Humans'; // but this is not object's (Person) own property. (It's inherited).
// Own properties are only those properties which are declared in the object itself.
// We can even check that which are it's own property.
console.log(kundan.hasOwnProperty('species')); // false
kundan.calcAge(); // 21

// If Javascript cannot find certain methods/properties in Object then it will look for it in its prototype.
// Prototype Chain
// Person->Person.prototype-> Object.prototype <- Constructor Function (Object()) 
//            ^
//            |
//(Constructor Function [Person()])

console.log(Object.prototype.__proto__); //null (Object.prototype is usually the top of scope chain).

// Prototypal Inheritance of Built-in objects.

//Array
console.log([].__proto__); // It will print all the methods like join, flat, splice etc.
// Basically each array does not contain these methods instead they will inherit from prototype.
console.log([].__proto__===Array.prototype); // true
// Since all the arrays inherit their methods from Array.prototype this means that we can even create new methods in Array.prototype and it will be available to all the arrays.

Array.prototype.unique=function(){
    return [...new Set(this)];
}
const arr = [1,1,2,2,4,4,5];
console.log(arr.unique()); // [1,2,4,5]
// Extending prototypal inheritance with custom methods ⤴️ looks nice. But we should avoid it as it may cause issues in large project or may be a future update in js break it.