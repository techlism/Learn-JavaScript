'use strict'
// BANKIST APP
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
])

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const displayMovements = function (movements) {
  containerMovements.innerHTML = '' // This will basically remove all the elements inside the container
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      i + 1
    }-${type}</div>
                    <div class="movements__value">${mov}💶</div>
                </div>`
    // insertAdjacentHTML (method) that can be used to insert HTML
    // syntax: element.insertAdjacentHTML('when to insert',string that contains the HTML)
    // 'when to insert' - afterbegin , beforebegin , beforeend,afterend and text (MDN)
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}
const eurotoUSD = 1.1
const movementsUSD = movements.map(mov => mov * eurotoUSD)

const movementDescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You Deposited ${mov}`
  } else {
    return `Movement ${i + 1}: You Withdrew ${Math.abs(mov)}`
  }
})

const createusername = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase() // returns a string
      .split(' ') // returns an array
      .map(function (name) {
        //returns an array
        return name[0]
      })
      .join('') //returns a string
  })
  // basically in the object accounts1 (2,3,4) we have created a new property named as username.
  // username is the initial letters of owner name (because of this function).
}
createusername(accounts)

// Another use case for reduce can be to find max/min value from an array.
// function findMax(movements){
//   const max=movements.reduce(function(acc,curr){
//     return Math.max(acc,curr);
//   });
//   return max;
// }
// console.log(findMax(account1.movements));

// Finding a particular object from an object array can be easily done by find method . (But the property based on which we are using find method should be unique).

const deposits = movements.filter(function (mov) {
	return mov > 0;
})
// What are benefits over a for loop ?
// We can now do something called 'method-chaining' (see createusername function) which wouldn't be possible with a for a loop.
// But don't use too much method chaining and avoid mutating original arrays.
const withdrawals = movements.filter(function (mov) {
	return mov < 0;
});

const calcDisplaySummary = function (account) { //account (object)
	const income = account.movements
		.filter(mov => mov > 0)
		.reduce((acc, mov) => acc + mov, 0)
	labelSumIn.textContent = `${income}💶`;
	const out = account.movements
		.filter(mov => mov < 0)
		.reduce((acc, mov) => acc + Math.abs(mov), 0);
	labelSumOut.textContent = `${out}💶`;
	const interest = account.movements
		.filter(deposits => deposits >= 1)
		.reduce((intr, deposits) => intr + deposits * (account.interestRate/100), 0);
	labelSumInterest.textContent = `${interest}💶`;
}

const calcDisplayBalance = function (account) {
	const balance = account.movements.reduce((accu, curr) => accu + curr, 0);
	account.balance=balance;
	// Here 0 is the initial value (from where we want to start accumulation)
	labelBalance.textContent = `${balance}💶`;
}

let currentAccount , timer ;

function updateUI(currentAccount){
    // Display balance and summary and movements
	calcDisplaySummary(currentAccount);
	calcDisplayBalance(currentAccount);
	displayMovements(currentAccount.movements);	
}

const startLogOutTimer=function(){
  //set time to 5 minutes
  let time = 300;
  const changeTimer=setInterval(function(){
    const sec = time % 60 ;
    const min = (time - sec)/60;
    labelTimer.textContent=`${min}:${sec}`;
    if(time===0){
      clearInterval(changeTimer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent='Login to get started';
    }    
    time--;
  },1000);
  return changeTimer;
}


btnLogin.addEventListener('click', function (event) {
   // Prevent form from submitting
	event.preventDefault()
   // Another feature for forms is whenever we press enter in form submit it triggers as a click event.

	currentAccount = accounts.find(
	acc => acc.username === inputLoginUsername.value
	)
	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		//Display UI and welcome message
		labelWelcome.textContent = `Welcome back, ${
		currentAccount.owner.split('')[0]
		}`
		containerApp.style.opacity = 100;
	}
	//clear input fields
	inputLoginUsername.value=inputLoginPin.value='';
	// Remove focus
	inputLoginPin.blur();	
  if(timer) clearInterval(timer);
  timer=startLogOutTimer();
	updateUI(currentAccount);
});

btnTransfer.addEventListener('click',function(event){
	event.preventDefault();
	const amount = Number(inputTransferAmount.value);
	const receiverAcc=accounts.find(acc=>acc.username===inputTransferTo.value);
	console.log(amount,receiverAcc);
	if(amount > 0 && currentAccount.balance>=amount && receiverAcc?.username!==currentAccount.username){
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);
		updateUI(currentAccount);
    // Reset Timer
    clearInterval(timer);
    timer=startLogOutTimer();
	}
	inputTransferTo.value=inputTransferAmount.value='';
});

btnClose.addEventListener('click',function(event){
    event.preventDefault();
    if(inputCloseUsername.value===currentAccount.username && Number(inputClosePin.value)===currentAccount.pin){
        const index=accounts.findIndex(acc=>acc.username===currentAccount.username);
        accounts.splice(index,1);
        containerApp.style.opacity = 0;
        labelWelcome.textContent="Log in to get started";
    } 
});

btnLoan.addEventListener('click',function(event){
    event.preventDefault();
    const amount = Number(inputLoanAmount.value);
    // The some() method tests whether at least one element in the array passes the test implemented by the provided function.
    // It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
    // It doesn't modify the array.
    if(amount > 0 && currentAccount.movements.some(mov=>mov>=amount*0.1)){
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
        inputLoanAmount.value='';
        // Reset Timer
        clearInterval(timer);
        timer=startLogOutTimer();        
    }
});
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

// const accountMovements=accounts.map(acc=>acc.movements).flat();
//flatMap combines flat and map method (but it goes 1 level deep).
const accountMovements=accounts.flatMap(acc=>acc.movements);

function sortMovements(movements){
    movements.sort((a,b)=>{
        // Ascending Order (reverse the conditions for descending order)
        if(a>b){
            return 1;
        }
        else{
            return -1;
        }
        // or simply just  do a - b
    });
}

btnSort.addEventListener('click',function(event){
    event.preventDefault();
    sortMovements(currentAccount.movements);
    updateUI(currentAccount);
    // Reset Timer
    clearInterval(timer);
    timer=startLogOutTimer();      

})