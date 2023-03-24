'use strict'
//Array - A data structure to store multiple items in a continous way.
//How to declare (Two ways available)
//1.
const arr = [1,2,3];
//2.
const arr2= new Array(1,2,3);
//Unlike many other languages such as C++/C/Java you can store data of different types.For example
const arr3=[1,"Kundan",2,3.14];
//To Console log
function log(str){
    console.log(str);
}
//will print the whole the array (arr).
log(arr);
//0 based
log(arr2[0]);
log(arr3.length);
arr3[1]="Kumar";
//Only primitive values(in simple terms just normal values) are immutable. That's why we can change values even though it was declared as const.
//But entire array cannot be replaced if it is declared with const.
// arr3=[1,2];
//It's not possible(above).
//But with let it's possible.
let arr4=[1,2];
arr4=[1,2,3];
log(arr4);
//Arrays inside arrays are possible (N-Dimensional arrays).
//If you straight forward add a variable to array. Js will convert entire array into a string and then it wil concatenate the variable.
//e.g.
log(typeof(arr3+3));
//It will log string.
// -----------------------------------
//push (To add another element in the array at last).
arr4.push(12);
//push function also returns a value that is the new length after pushing.
log(arr4.push(12));
//unshift (To add elements at front and rest is same as push).
//pop (Delete last element)
log(arr4.pop());
//pop returns last element (12 in this case).
//shift (to delete first element).
//indexOf (To get index of a particular element in array (if present else it will return -1)).
log(arr4.indexOf(12));
//includes (To check(bool) if an element is present in array or not (uses strict equality ===)).
log(arr4.includes(13));