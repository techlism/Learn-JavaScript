'use strict'
//Project - 3
//selecting elements
const score0El=document.querySelector('#score--0');
const score1El=document.querySelector('#score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

const player1=document.getElementById("player--0");
const player2=document.getElementById("player--1");
//current scores
let score0=0;
let score1=0;
let currentScore0=0;
let currentScore1=0;
let flag=false;
// let score0=0;
// let score1=0;

//setting initial values
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

function switchPlayers(){
    //negate the value of flag.
    flag=!(flag);
    //toggle is a classList method which can add a class if it's not present and if the class is present it wil remove it.
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    score0+=currentScore0;
    score1+=currentScore1;
    score0El.textContent=score0;
    score1El.textContent=score1;
    //After the switch set/show current score to 0.
    current0El.textContent=0;
    current1El.textContent=0;
    currentScore0=0;
    currentScore1=0;        
}

//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    //To stop the play if any of the player reached to the score of 100.
    if(score0<100 && score1<100){
        //1. Generate a random dice roll
        let dice = Math.trunc(Math.random() * 6 ) + 1;
        // console.log(dice);
        //2.Display Dice
        diceEl.classList.remove('hidden');//when roll dice is clicked then show the dice
        diceEl.src=`dice-${dice}.png`;//show any random dice numbered b/w 1 and 6.

        //3. Check for rolled 1 : if true switch to next player
        if(dice!==1){
            if(flag){
                //Add dice(value) to player1 score.
                currentScore1+=dice;
                // score1+=currentScore;
                //Show the current score
                current1El.textContent=currentScore1;
            }
            else{
                //Add dice(value) to player2 score.
                currentScore0+=dice;
                //Show the current score
                current0El.textContent=currentScore0;
            }
        }
        else{
            switchPlayers();
        }
    }

});



btnHold.addEventListener('click',function(){
    switchPlayers();
    if(score0>=100 || score1>=100){
        btnHold.classList.add('hidden');
        diceEl.classList.add("hidden");
        btnRoll.classList.add('hidden');
    }
    if(flag && score0>=100){
        //player1 is the winner.
        player1.classList.toggle('player--active');
        player1.classList.toggle('player--winner');
    }
    else if(!flag && score1>=100){
        //player2 is the winner
        player2.classList.toggle('player--active');
        player2.classList.toggle('player--winner');
    }
});

function resetGame(){
    score0=0;
    score1=0;
    //show the roll button
    btnHold.classList.remove('hidden');
    btnRoll.classList.remove('hidden');
    //Turn off the winner (to remove black color)
    if(player1.classList.contains('player--winner')){
        player1.classList.remove('player--winner');
    }
    else{
        player2.classList.remove('player--winner');
    }
    if(player2.classList.contains('player--active')){
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
    }
    score0El.textContent=0;
    score1El.textContent=0;
}

btnNew.addEventListener('click',function(){
    resetGame();
});
