//In this project we are focusing on manipulating HTML classes.
//Basically we are just removing class(hidden) for opening and adding class(hidden) for closing.
'use strict'

function log(str){
    console.log(str);
}

const modal=document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    //or we create a function  expression and pass that directly (Note: not as function but function epxression). As shown in openModal expression.
}

const openModal=function() {
    //To manipulate classes we have a classList property and classList have it's own methods
    modal.classList.remove('hidden'); //No . before
    //We can also add classes.
    overlay.classList.remove('hidden');
    //Adding and removing classes are handy way to change styles at once.
}

//Whenever use querySelector to select element and if multiple elements have same classes then only the first one will be selected.
//To select all use querySelectorAll
const btnsOpenModal=document.querySelectorAll('.show-modal');
//It kinda works like an array.So we can iterate over it.
for(let i=0;i<btnsOpenModal.length;i++){    
    btnsOpenModal[i].addEventListener('click',openModal)
}
btnCloseModal.addEventListener('click',function(){
    closeModal();
});

overlay.addEventListener('click',function() {
    closeModal();
});

//Keyboard events are global events.
//How to handle keyboard events: There are three main keyboard events keydown, keyup and keypress

//This is called a global event listener
document.addEventListener('keydown',function(event){
    /* Very Important */
    
    //When an event(keypress in this case) happens javascript makes an object and store all information such as which key was pressed.
    //It will log an object having all information.
    // log(event);
    //So basically all the information about any keypress is stored in the parameter 'event'
    
    if(event.key==='Escape' && !modal.classList.contains('hidden')){
        //Checking if the pressed key was esc key and modal does not contain the class hidden(if it contains hidden means it's already not closed).
        //Then just call the closeModal function.
        closeModal();
    } 
});