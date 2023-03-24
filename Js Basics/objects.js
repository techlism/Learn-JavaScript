'use strict'
//To Console log
function log(str){
    console.log(str);
}
//In arrays we cannot reference an element by any name rather just using order.
//Objects are variables too. But objects can contain many values.
//How to differentiate b/w arrays and objects.
//1.Objects are more descriptive.
//2.Objects has {} where as an array has [].
//This way to create an object is called is object literal syntax.
const obj={
    //commas are important
    first:'Kundan',
    last:'Kumar',
    age:20,
    languages:['C','C++','JavaScript']
};
//Objects are mutable (But only the values).
//If we have defined an object using const then it can't be re-assigned.
//e.g.

// obj={
//     a:1,
//     b:3
// };

//How to access elements of objects
//1.Dot Notation
log(obj.last); // Kumar
//2.Bracket Notation
log(obj['first']);
//Bracket Notation can be very useful in the cases where we don't know already that what's going to come.
//So we can put a variable or an expression inside those brackets.
//e.g.
const lang='languages';
log(obj[lang]);
//It can be also useful if any term is repetitive.
//Can also do string concatenation.
//undefined - we get when we try to access a property in an object that does not exist.
//Another practical example.
// const query=prompt('What do you want to know about obj ?');
// log(obj[query]);

//How to add any additonal property in an object??
//Again use dot notation or bracket notation.
obj.location="Kolkata";
obj["College"]="IIEST";
log(obj);
const sent=`${obj.first} knows ${obj.languages.length} programming languages and his favorite language is ${obj.languages[1]}`;
log(sent);

/*--------------------------------- */
//Object Methods
//We can have functions inside object.
//But it's bit different(See Below). No direct declaration allowed (the conventional one).
//If you try to do that then 'Declaration or statement expected' error will appear.
const obj2={
    first:"Kundan",
    last:"Kumar",
    age:20,
    printAge: function (){
        //'this' keyword will be discussed later.
        log(this.age);
    },
};
obj2.printAge();
//We can create new properties inside the function inside the object.
//But the properties inside the function(expression will only be added once the function is invoked).
const obj3={
    name:"Kundan",
    dob:2002,
    getAge:function(){
        //Using this keyword.
        this.age=(2023-this.dob);
    }
};
log(obj3);
obj3.getAge();
log(obj3);