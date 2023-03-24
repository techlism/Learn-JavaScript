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
};

// Just like arrays but we have to use {}
// But Notice here that variable names are same class propert
const {name, openingHours, categories} = restaurant ;
// To have custom variable name we must specify that ⤵️ after: 

const {
  name:restaurantName,
  openingHours:hours,
  categories:tags="Null",
  // Default value, In general we use []
  menu="Null"
}=restaurant;

console.log(restaurantName,hours,categories,menu);

// But to re-assign a existing to any property of an object..it's bit tricky

const obj={
  a:24,
  b:23
};
let a=15;
let b=13;
({a,b}=obj); //Unexpected token '=' (without () )
// Workaround is to wrap everything inside ()
console.log(a,b);

// How to destructure nested objects (just like array)

const{
  // Here we are assigning opening and closing hours of friday in variable open and close
  fri:{open,close},
}=openingHours;
console.log(open,close);
  