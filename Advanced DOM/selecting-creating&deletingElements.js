'use strict'

// we can select our entire HTML using the document method

// document.documentElement

// document.head

// document.body

const allSections=document.querySelectorAll('.section');
console.log(allSections); // NodeList
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // HTMLCollection

document.getElementsByClassName('btn');

// Creating and inserting elements

// insertAdjacentHTML

// const message=document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!'</button>

header.prepend(message); // Insert before the first child of header

// header.append(message); // Insert after the last child of header

// Since we have already prepended message into header, the next time if append then it will be moved(not new inserted) at last (after last child of header).
// If we really want to insert same element twice then we have a method for that.
// header.append(message.cloneNode(true)); 

// header.before(message)- This creates a sibling element before header.
// header.after(message) - This creates a sibling element after header .

// Delete Elements

document.querySelector('.btn--close-cookie').addEventListener('click',function(){
    // message.remove(); // So this is a method to remove elements.
    // Another way would be select the parent element and use removeChild method
    message.parentElement.removeChild(message);
});

