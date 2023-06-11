'use strict'
// Inheritance between classes 
// Since we have 3 ways to create a class (So to implement inheritance we have 3 ways too).

// 1. Using Constructor Function ⤵️
const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
    console.log(2023- this.birthYear);
};

const Student = function (firstName,birthYear,course){
    // Inheriting firstName and birthYear from Person class
    Person.call(this,firstName,birthYear);
    this.course=course;
}


// linking prototypes (this should be done before any methods or it will override all methods).
Student.prototype = Object.create(Person.prototype);
// Changing the constructor to Student (It got changed to Person because of the step above).
Student.prototype.constructor=Student;
// Now we can declare methods for Students and we have already inherited methods and properties from Person class.
// new object from class should be declared after linking.
Student.prototype.introduce = function(){
    console.log(`I am ${this.firstName}`);
}
const kundan = new Student("Kundan",2004,'Information Technology');
kundan.introduce();
kundan.calcAge();

console.log(Object.getPrototypeOf(Student));
console.log(Student.prototype.constructor);
console.log(kundan instanceof Object);

//2. Inheritance using (ES6- Classes)
// So the extends keyword will the link prototypes between Student2 and Person
class Student2 extends Person {
    constructor(fullName,birthYear,course){
        //The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        super(fullName, birthYear); // This need to be done first (always) - calling the super.
        this.course=course;
    }
    introduce(){
        // In person it was firstName so we have to use that
        console.log(`I am ${this.firstName} and I study ${this.course}`);
    }
}   

const kk = new Student2("Kundan",2004,"IT");
kk.introduce();
kk.calcAge();
console.dir(kk);
console.log(Student2.prototype.constructor); // [class Student2 extends Person]

// 3. Using Object.create (Least used)

const PersonProto ={
    init(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    },
    calcAge(){
        console.log(2023-this.birthYear);
    }
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course;
}
// We are defining the init function on StudentProto's prototype
const kumar = Object.create(StudentProto);
kumar.init("Kumar",2004,"Computer Science");
kumar.calcAge();

