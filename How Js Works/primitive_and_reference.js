'use strict'
// Here Primitive type is used for primitives such as number, string and boolean etc. (toal 7)
// Reference type is for objects such as object literal, arrays and functions etc.
// Reference types are stored in heap while primitive types are stored in call stack.
// Basically in the call stack we have a reference (using memory address) to reference types that are in heap memory.
// Example
const me={
    myName:'Kundan',
    age: 20
};
const friend = me; // here we are not actually copying the object but the reference.
friend.age=21;
console.log(friend); // age - 21 (As expected)

console.log(me);  // age - 21 because both friend and me are referencing same values in the call stack.
// So making changes in even though a copy object but the changes will be reflected in original object also.

// const me2={
//     lastname:"Kumar",
//     age:20
// }
// me=me2;
// console.log(me); // It will give an error (Assignment to constant variable)
// So how to overcome this and actually copy an object. use Object.assign but it does a shallow copy which means if we have an nested object then second level onwards will be same.
const friend2=Object.assign({},me);
friend2.age=22;
console.log(friend2)

//Example for shallow copy and drawbacks of Object.assign

const obj1={
    firstname:'Kundan',
    physique:{
        height: "5 feet",
        weight:  "50 kg"
    }
};
const obj2 = Object.assign({},obj1);
obj2.physique.height="5.5 feet";
console.log(obj1); //height will be updated to 5.5 feet (that's why it's called a shallow copy)
console.log(obj2);
//Deep cloning will be achieved by some external library later.