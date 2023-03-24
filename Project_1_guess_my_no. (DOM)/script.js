'use strict';

//To Modify text content of any class we can use this method.
// document.querySelector('.message').textContent='Correct Number !';
// document.querySelector('.number').textContent=12;
// document.querySelector('.score').textContent=10;
/*To set value*/
// document.querySelector('.guess').value=23;
//How to get data from the html input (use value property)
// document.querySelector('.guess').value;
//How to click or an any other events in general??
//We use something called eventListener
//syntax
// 1. Select Document
// 2. .addEventListener('Name of Event',function (expression) executed on occuring that event for that document(Event Handler)).

//To generate a number b/w 1 to 20
let num = Math.trunc(Math.random() * 20) + 1; 

//Called as State Variable.
let score = 20;
let highScore=0;

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    //Whatever value  we will get it will be a string , just like prompt! .
    //we can make as much changes we want to make  by the particular event.
    //No Input
    if(!guess){
        //To add emoji : window key + .
        //Change the message to No Number
       document.querySelector('.message').textContent='No Number 🤔!'; 
    }
    //Player wins
    else if(guess===num){
        document.querySelector('.message').textContent='Correct Number!👌';
        //if player wins change the background color of whole body to a particular color (CSS Manipulation).
        document.querySelector('body').style.backgroundColor='#60b347';//greenish
        //change the width of element having id of num to 30rem.
        document.getElementById("num").style.width='30rem';
        //To target/select using it's ID.
        document.getElementById("num").textContent=num;
        if(score>highScore) highScore=score; //updating the highscore.
        document.querySelector('.highscore').textContent=highScore;
    }
    else if(guess !== num){
        if(score>0){//Checking the score
            (guess>num)?document.querySelector('.message').textContent='Too High 📈 !':document.querySelector('.message').textContent='Too Low 📉 !'; //Ternary operator
            score--;//Since it's a wrong guess decrease the score.
            //Another way to change the score is to read right from the DOM and then just manipulate that.
            //But that's not advisable because by that way our code will not be aware about score always.
            document.querySelector('.score').textContent=score;
        }
        if(score==0){
            document.querySelector('.message').textContent='You Lost !!';    
        }   
    }
});
function restart(){
    //Resetting all desired parameters
    document.getElementById("num").textContent='?';
    document.getElementById("num").style.width='15rem';
    document.querySelector('.guess').value = '';
    score=20;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#1a1919';//greyish
    document.querySelector('.score').textContent=score;
    num = Math.trunc(Math.random() * 20) + 1;
}
//Clicking on Again button to restart the game.
document.querySelector('.again').addEventListener('click',function (){
    restart();
}); 

/*-----------------------------*/
//DOM also includes CSS manipulation
//1. Select the document
//2. Use the .style property.
//3. Name the property you want to change (for properties having 2 or more words e.g. background-color we will use camel casing i.e, backgroundColor).
//4. Whatever we want to specify that will be in strings('').

