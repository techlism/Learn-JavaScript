'use strict'

// Syntax same as spread operator . but RHS of the assignment operator(=)

//Rest element must be the last element.

// In any destructuring assignment there could be only one rest element.

const arr = [1,2, ...[3,4]];
console.log(arr); // [ 1, 2, 3, 4 ]
//That's how rest element works ⤴️ 

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

    orderPizza: function(mainIngredient,...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

const {sat, ...weekdays}=restaurant.openingHours;
console.log(sat);
console.log(weekdays);
// sat - { open: 0, close: 24 }
// weekdays - { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// Basically like if I want to assign some variables and left (rest) variables to a single variable then we can use this.

const {thu , ...fri}=weekdays; 

console.log(thu); // { open: 12, close: 22 }
console.log(fri); // { fri: { open: 11, close: 23 } }

console.log(fri.open); //undefined (because fri is also a parent like object and that fri as element.. bit confusing!) How to access (⤵️)

console.log(fri.fri.open); // 11

console.log(thu.open); //12

// A very useful use case is to pass as many arguments we want in a function without explicitly specifying it. (Rest Parameters)

const add = function(...numbers){
    // ... numbers will create an array for all the parameters.
    // So we can add all of 'em.
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}

const sum = add(1,2,2,4,5,7,8); //See the number of arguments
console.log(sum); 

//For context rest is like opposite of spread.

const x = [23,5,7]; // now if we want the sum of this array x we can't pass to the add function
// So we can use spread operator.

console.log(add(...x)); // First it will spread all the elements of x and then in our function it will make x an array again.

restaurant.orderPizza('Mushroom','Onions','Olives');