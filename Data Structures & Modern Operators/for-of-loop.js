'use strict'
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

const menu=[...restaurant.starterMenu,...restaurant.mainMenu];

//for of loop

for(let item of menu){
    console.log(item); //item is an iterator(kinda) here
}
// But you will not get access to indexes.
// To get indexes also we can use array.entries()

for(let item of menu.entries()){
    console.log(item); //item is an array of 2 elements (one is index and other  is element from menu)
}

// Looping objects (indirectly)

// for(let day of Object.keys(openingHours)){
//     console.log(day);
// }

// console.log(Object.values(openingHours));

// console.log(Object.entries(openingHours));

// ⤴️ all of these(keys,entries and values) will form an array and then we can iterate over them.

