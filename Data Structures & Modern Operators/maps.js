'use strict'

// Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map();

map.set('name','Kundan');
map.set('lastname','Kumar');
console.log(map.get('lastname')); //Kumar

console.log(map); //Map(2) { 'name' => 'Kundan', 'lastname' => 'Kumar' }

// set method to add and get method to find key

// Be explicit about data types basically (===).

map.delete('lastname');
console.log(map);
console.log(map.size);

// Learn about js maps in detail later.
// Maps are also iterables ( so we can use ...)

//Alternate to set method(when we have to assign directly)
const task=new Map([
    ['name','Kundan'],
    ['lastname','Kumar']
]);

console.log(task.keys());
console.log(task.values());

//First part is keys and second part is values and both are iterables