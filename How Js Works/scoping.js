'use strict';

function calcAge(birthYear){
    const age = 2023 - birthYear;
    function printAge(){
        const output =`${firstname},you are ${age},born in ${birthYear}`;
        console.log(output);
    }
    printAge();
    return age;
}
calcAge(2002);
var firstname = 'Kundan';
// calcAge(2002);

// In javascript scoping is bit different  : Here function printAge can access the variable firstname as it's in global scope. 
// Just keep in mind that the variables should be declared before function call.
// Use strict mode to have proper function scoping.
{
    const a = 12;
}
const a = 13;