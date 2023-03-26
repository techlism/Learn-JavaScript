'use strict'
// Default parameters
function add(a=0, b=0){ //Here a & b is having a default value of 0
    console.log(a+b);
}
add(); //Even we don't pass any argument it's working fine.
// add(,2); But we cannot skip parameters : in this case we cannot directly specify value for b but not for a.
// in Order to do that we can keep 'a' undefined ⤵️
add(undefined,2);

//Passing arguments : value v/s reference

const flight="LH234"; // It's a primtive type (pass by value)
const customer={      // pass by reference(kinda) (for objects) :More details in How Js Works section
    cname:"Kundan Kumar",
    passport:123456
};

const checkIn=function(flightNum,passenger){
    flightNum="LH999"; // copy of variable
    passenger.cname="Mr. "+passenger.cname;
    if(passenger.passport=123456){
        console.log("Check in Done");
    }
    else{
        console.log("Wrong Passport");
    }
}
checkIn(flight,customer);
console.log(flight);   //LH234
console.log(customer);//{ cname: 'Mr. Kundan Kumar', passport: 123456 }

// In javascript we do not have pass by reference.

//First Class vs Higher order Functions

// Javascript treats functions as first-class citizens
// This means that functions are simply values and are just another type of object.
// Functions also have built in methods.  

// Higher order functions
// A function that receives another as an argument and returns a new function or may be both.
// This is achieved because of first-class functions

// Functions Accepting Callback

// const oneword = function(str){
//     return str.replace(/ /g,' ').toLowerCase();
// }
const firstCap=function(str){ // Function can be declared in the regular way
    const[first,...others]=str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}
//Higher order function

const transform=function(str,firstCap){
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${firstCap(str)}`); // JAVASCRIPT language
    console.log(`Transformed by : ${firstCap.name}`); // A function property
}
const str = "Javascript language";
transform(str,firstCap); // Here we are just passing the name of the function not invoking it (Basically Callback Functions)

// Callback functions help us in making our code abstract and more reusable

//Functions returning Functions

const greet = function (greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey=greet('Hey');
// We are returning a function from a function which means that greeterHey is now a function and can accept name as an argument ⤵️
greeterHey("Kundan");

// Another way is that we can immediately call it ⤵️
greet("Hola")("Kundan"); //greet("Hola") is a function which will accept name as an argument


// Arrow functions
const greet2=greeting=>name=>console.log(`${greeting} ${name}`);

//Alternatively
// const greet2=(greeting)=>{
//     return (name)=>{
//         console.log(`${greeting} ${name}`);
//     }
// }
greet2("Bonjour")("Kundan");

// Call and apply method

const indigo={
    airline:'Indigo',
    iatacode:'6E',
    bookings:[],
    //Equivalent to writing book:function() ⤵️
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
        this.bookings.push({flight:`${this.iatacode} ${flightNum}`,name});
    
    }
}
indigo.book(123,'Kundan');
console.log(indigo.bookings);

// But if we want to use the same book function to another airline ..
// One thing we could do is to copy the same function and paste in other object.

const jetAirways={
    airline:'JetAirways',
    iatacode:'9W',
    bookings:[]
}

const book = indigo.book ; //Now const book is just a regular function

// Basically if we want to copy the book in a regular variable then it would be a regular function. And for regular function 'this' is undefined.

// So we need to tell js how 'this' should work.
// call method : The call() method calls the function with a given this value and arguments provided individually.
// By using call method we can point where this should be pointing.

book.call(jetAirways,23,"Prasad");  // But all the properties inside other object should be same because we may be accessing some of the properties in the method.


// Apply method
// We are storing our arguments into an array (in same sequence) 
const flightData=[583,'Kundan'];

book.apply(jetAirways,flightData);

// we can still use call method combined with ...

book.call(jetAirways,...flightData);

// Bind method (More Important)

// Using bind method we can create a separate method for separate objects.
// Basically it is binding the method and returning a new function

// for example if we want a dedicated method for jetairways book. It is possible by using bind method. this keyword is now set to jetAirways

const bookJet = book.bind(jetAirways);

bookJet(345,"Kundan Kumar");

// We can much further using bind keyword
// Say a dedicated method for a specific flight number

const bookJet124=book.bind(jetAirways,124); // And now we just have to pass the passenger's name
bookJet124("Arnold");

// In an eventHandler function this keyword is attached to that element.
// In order to change the pointing to the desired object in an eventHandler we use bind method as it returns a new function but does not invoke.

// const poll={
//     question:'What is your favourite programming language ?',
//     options:['0: JavaScript','1: Python','2: Rust','3: C++'],
//     answers:new Array(4).fill(0)
// };

// IIFE (Immediately Invoked Function Expression) : It will be executed only once and will dissapear after execution.

// Just write a function without name and enclose it in parenthesis and add (arguments) (which means invoking) later.

const a=12;

(function(a){
    console.log("This will be executed only once");
    console.log(a);
})(a);

// Same for arrow function
