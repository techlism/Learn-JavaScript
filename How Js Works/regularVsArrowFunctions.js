'use strict'
const obj1={
    firstName : 'Kundan',
    year : 2002,
    findAge:function () {
        console.log(this);
        console.log(2023-this.year);
        //Solution 1
        // const self = this ;
        // const isMillenial = function(){
        //     console.log(self.year);
        // };

        //Solution 2
        const isMillenial = () =>{
            console.log(this.year); // This will log 2002 because arrow function does not thier own this keyword so it will use parent's object and there we have year defined.
        }
        isMillenial(); // This will log 2002 . This is kind of an work around to avoid undefined in a normal function call.
    },
    // greet:()=> console.log(`Hello ${this.firstName}`)

};

obj1.findAge();

// obj1.greet(); // Hello undefined because in obj1 declaration is not a scope it's just a object literal and firstName was not defined in global object.
