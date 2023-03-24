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

// Optional chaining : The optional chaining (?.) operator accesses an object's property or calls a function. 
// If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

// console.log(restaurant.openingHours.mon.open);
// ⤴️ Cannot read properties of undefined (reading 'open')

// Here comes optional chaining (?)

console.log(restaurant.openingHours.mon?.open); //undefined

const days = ['mon','tue','wed','thu','fri','sat','sun'];

for(let day of days){
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? "Closed" ; //(?? Nullish coalising)
    console.log(`On ${day} we open at ${open}`);
}

// Option chaining also work for methods.

console.log(restaurant.order?.(0,1) ?? "Method Does not exist");