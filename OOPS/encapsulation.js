'use strict'
// More @ https://medium.com/javascript-scene/encapsulation-in-javascript-26be60e325b4

// @ https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation

// JavaScript doesn't have real encapsulation (yet)..

// To protect unauthorized access we must not use var.
// We just used to fake the encapsulation - by having methods with different names (for private, protected and public).

// There's thing called classfield (in proposal)  like other languages .
// like adding public/private/protected keyword before classes and methods.


// In OOPs it is possible to do method chaining on the methods declared in the class but it is not possible by default.
// Just after every method which is setting something (basically we don't want anything in return from them), return this.
