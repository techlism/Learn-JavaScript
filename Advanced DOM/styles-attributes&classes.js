'use strict'

// Styles Attributes and Classes

console.log(message.style.color); // Nothing will be logged.

// It is useful in changing style but it does not help us in getting values of styles in element.
// For example if we want to know height of one element and we want to programmitically change it for another element.

// Say if we want to add another 40 px in height of current height.

message.style.height=Number.parseFloat(getComputedStyle(message).height,10) + 30 +"px";

// CSS Variables

// document.documentElement.style.setProperty('--color-primary','#e35f56')

// Attributes (for example <img src="" /> Here src is an attribute)

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist Logo
console.log(logo.className);
// How to change values of these attributes (simply use =)
logo.alt = 'Bankist Logo';
console.log(logo.alt);

// ⤴️ Only standard(default) attributes can be accessed and we can access only those attributes which are defined (in HTML).

// Non Standard
console.log(logo.getAttribute('designer'));
// We can also set attributes here
logo.setAttribute('company','Bankist');
// We can also get relative url from this
console.log(logo.getAttribute('src')); // Relative URL
console.log(logo.src); // Absolute URL 

// This is useful in many cases and especially in hrefs where we need mostly relative urls

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
// Data attributes are special attributes that starts with 'data' . More @ https://www.w3schools.com/tags/att_data-.asp
console.log(logo.dataset.version); // 1.0