'use strict'

// Modal window

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')

const openModal = function (event) {
  event.preventDefault()
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
const header = document.querySelector('.header')

const allSections = document.querySelectorAll('.section')

console.log(allSections) // NodeList

const allButtons = document.getElementsByTagName('button')

console.log(allButtons) // HTMLCollection

const message = document.createElement('div')

message.classList.add('cookie-message')

message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>'

header.prepend(message) // Insert before the first child of header

// header.append(message); // Insert after the last child of header

// Since we have already prepended message into header, the next time if append then it will be moved(not new inserted) at last (after last child of header).
// If we really want to insert same element twice then we have a method for that.
// header.append(message.cloneNode(true));

// header.before(message)- This creates a sibling element before header.
// header.after(message) - This creates a sibling element after header .

// Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove(); // So this is a method to remove elements.
    // Another way would be select the parent element and use removeChild method
    message.parentElement.removeChild(message)
  })

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.getElementById('section--1')
btnScrollTo.addEventListener('click', function (event) {
  //The Element.getBoundingClientRect() method returns a DOMRect object,
  // providing information about the size of an element and its position relative to the viewport.
  // More @ https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  // The type of box represented by the DOMRect is specified by the method or property that returned it
  const s1Coords = section1.getBoundingClientRect()
  console.log(s1Coords)
  console.log(event.target.getBoundingClientRect())
  console.log('Current scroll X/Y', window.pageXOffset, pageYOffset)

  console.log(
    'Height and Width Viewport : ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  )

  // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
//   window.scrollTo({
//     // Old way to do
//     left:s1Coords.left + window.pageXOffset,
//     top:s1Coords.top + window.pageYOffset,
//     behavior:'smooth'
//   });

// Modern way to do  (supported in modern browsers only).
  section1.scrollIntoView({behavior:'smooth'});

});

// A event will always happen no matter we are listening to it or not.
// More @ https://www.w3schools.com/jsref/dom_obj_event.asp


// const h1 = document.querySelector('h1');

// const changeh1= function(){
//     alert("Scrolling on H1");
// }
// h1.addEventListener('wheel',changeh1);
// Other ways to listen to events are in W3 article above.

// How to stop listening to an event? (Remove Event Handler);
// During the addition event listener we have pass function as a callback function which should have a name of function (not directly declared).

// removeEventListener('wheel',changeh1)

// Or we can set a particular time 

// setTimeout(function(){
//     h1.removeEventListener('wheel',changeh1);
// },3000);

// Event Propagation : Bubbling and Capturing
// https://www.loginradius.com/blog/engineering/javascript-events-bubbling-capturing-and-propagation/

// Event Bubbling
// We are attaching event handlers to elements and setting a randomly generated color.

// const randomNum = (min,max)=>{
//     return Math.floor(Math.random() * (max -  min + 1)+min);
// }
// const randomColor = () =>`rgb(${randomNum(255,0)},${randomNum(0,255)},${randomNum(0,255)})`;

// document.querySelector('.nav__link').addEventListener('click',function(event){
//     console.log("Link");
//     this.style.backgroundColor=randomColor();
//     event.stopPropagation();  // (Generally not recommended doing, so use when critically needed).
// });

// document.querySelector('.nav__links').addEventListener('click',function(event){
//     console.log("Link");
//     this.style.backgroundColor=randomColor();
// });
// nav__link (child of nav__links) and nav__link (child of nav)

// document.querySelector('.nav').addEventListener('click',function(event){
//     console.log("Link");
//     this.style.backgroundColor=randomColor();
//     // this keyword points to event.currentTarget ⤵️
//     console.log(this===event.currentTarget);
// });

// ⤴️ we have three event handlers attached to different elements but, when we listen to any of the event (click in this case) the changes (change of background color in this case) can be seen on parent & subsequent (up in the heirarchy) elements.
// Basically the event is propagating thru the document (root) . This is called bubbling.
// event.target will be same for all (nav__link , nav__links and nav) if we click on child (nav__link)


// We can even stop the event propagation (basically we won't see any color change in this case)
// If we stop the event propagation at child element from where we want the propagation to be stopped the effect won't be seen in parents any more.

// We can pass a third argument in addEventListener (true/false).

////////////////////////////////

//(Page Navigation)

// Without using event delegation
// document.querySelectorAll('.nav__link').forEach(function (element){
//   element.addEventListener('click',function(event){
//     event.preventDefault();
//     const href = this .getAttribute('href');
//     document.querySelector(href).scrollIntoView({behavior: 'smooth'});
//   });
// });

// ⤴️ this method is not efficient and not practicall because say we have too many elements and we are assigning a callback to each element of node list.
// So we need a mechanism to handle all the events at an upper level in the DOM tree (because we can trace where event is originated from).

// Event Delegation
// By default, events triggered on an element propagate up the DOM tree to the element's parent, its ancestors, and on up until the root element (html).
// The idea is that you "delegate" the handling of an event to a different element (in this case, nav__links, which is a parent element) instead of the actual element (nav__link) that received the event.

document.querySelector('.nav__links').addEventListener('click',function(event){
  event.preventDefault();
  if(event.target.classList.contains('nav__link')){
    const href = event.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({behavior: 'smooth'});
  }
});

// DOM Traversing
// DOM traversing is a way to go from one element to another it could be a child element or a parent or a sibling.

const h1 = document.querySelector('h1');
// Going Downwards (to child elements)
console.log(h1.querySelectorAll('.highlight')); // No matter how deep it is in DOM tree if highlight is a child(ren) of h1 then it will be accessible.

console.log(h1.childNodes); // NodeList (Not live updated but iterable using forEach)

console.log(h1.children); // HTMLCollection

console.log(h1.firstChild); // (<h1>text</h1>) So it gives text as first child.
// To access first child element we use a different method ⤵️
h1.firstElementChild.style.color='white'; 
h1.lastElementChild.style.color='teal'; // To access last child element.


// Going upwards (parent)

console.log(h1.parentNode);
console.log(h1.parentElement);
// ⤴️ Both the methods produce mostly same results but there are some support constraints for both of them.

// We can look for specific Closest parents (use manual queries and closest method)

h1.closest('.header').style.background='wheat';

h1.closest('h1').style.background='red' ; // closest will be the same element itself

// Sideways (or siblings)
// In JavaScript we can directly access only direct or immediate siblings but a simple work around is to go parent element of child and then access all the children nodes.

console.log(h1.previousElementSibling); // null (in this case)
console.log(h1.nextElementSibling); // h4

console.log(h1.parentElement.children); // HTML collection (live updated and iterable). (This will contain the h1 itself)

// Tabbed Container (basically different tabs or buttons reveal different content)

const tabs = document.querySelectorAll('.operations__tab'); // All buttons(to switch tabs)
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Using event delegation

tabsContainer.addEventListener('click',function(event){
  // There's a catch if we want to do event delegation for the buttons then we have to get buttons on each click but problem is there a span element inside the button. So if we click on the span the button doesn't get selected.
  // A simple work around is go to parent of span (which is button) but if we always do that, what happens when we click on button (we'll get it's parent which is something we don't want).
  // So we will use closest method and pass query for button. So when span is clicked we get the button only and when button is clicked it is closest to itself.
  const btn = event.target.closest('.operations__tab');
  console.log(btn);
  btn?.classList.add('operations__tab--active');

})
