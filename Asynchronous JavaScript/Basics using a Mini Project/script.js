'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*---------------------------------------------------------------------------------------------------*/

//⭐ Old way ⤵️ (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)


const renderCountry = function(data,className=""){
    let flag = Object.values(data?.flags)[0]
    if(!flag){
        return;
    }    
    const html = `<article class="country ${className}">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(Number(data.population)/1000000000).toFixed(2)} Billion</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
  </article>`;
    //👉Object.values (.keys) an important method for converting object key/value into an array.
    //console.log(html);
  countriesContainer.insertAdjacentHTML('beforeend',html);

}

const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg);

}

/*
const getCountryData = function (countryName){
    // AJAX call
    const request = new XMLHttpRequest();
    // We are fetching data asynchronously 
    request.open('GET',`https://restcountries.com/v3.1/name/${String(countryName)}`);
    request.send();
    // ⤵️ Here we are listening to the load event on request (We cannot access the "this.responseText", before it loads : So we are using an eventListener).
    request.addEventListener('load',function(){
        // The data we get is JSON , So we have to convert it into an JS object
        const [data]  = JSON.parse(this.responseText);
        // console.log(data);
        renderCountry(data);
        const neighbour = data.borders?.[0];
        console.log(neighbour);
        if(neighbour){
            const request2 = new XMLHttpRequest();
            request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
            request2.send();
            // We are firing (invoking the call back function inside the first load call back)
            // This will ensure that the second call back is after first one is done.
            request2.addEventListener('load',function(){
                const [data2] = JSON.parse(this.responseText);
                console.log(data2);
                renderCountry(data2,'neighbour');
            })
        }
        else{k
            return;
        }
    });
    // One call back function is dependent on other callback function (Nested Callbacks).
    // Callback Hell - When we have a lot of nested callbacks.(callback hell is kinda bad, if there are too many callbacks nested inside each other).To escape callback hell we have promises(ES6 Onwards).
}
getCountryData("IND");
*/
// Skipped 249 lec (for Now).

// Above method was old one, Now we have Promises, Fetch, Async, Await etc.
// ⭐ Modern way to implement the same functionality as above ⤵️

// Promise : An object that is used as a placeholder for the future result of an asynchronous operation.
// Basically a container for a future value. (E.g. Response from AJAX call).

// Pros of Promises : We no longer need to rely on events and callbacks passed into asynchronous function to handle asynchronous results.
// Instead of nesting callbacks, we chain promises for a sequence of asynchronous operations.

// Promise Lifecycle : Pending --> Settled --> Fulfilled / Rejected .
// A promise is only settled once (If it's rejected then it can't change it's state to fulfilled).

//  Build Promise --> Consume Promise 

// Fetch - @ https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const getJSON = function(url,errorMsg="Something Went Wrong"){
    return fetch(url).then(response=>{
        // How to throw errors manually 
        if(!response.ok) {
            // If we use throw method then the promise will be rejected(If the condition reach here).
            throw new Error(`${errorMsg} ${response.status}`);
        }
    });
}

const getCountryData = function (countryName){
    // How to handle fulfilled promise. If a promise is fulfilled then we use '.then' method and it will take a parameter that will be our response from fulfilled promise.
    fetch(`https://restcountries.com/v3.1/name/${String(countryName)}`).then(function(response){        
        return response.json(); // .json is available to all the responses from fetch (json is also an asynchronous method so it will return a promise).
    }).then(function(data){
        renderCountry(data[0]);
        const neighbour = data[0]?.borders[0];
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(response => response.json()).then(data=>renderCountry(data[0],'neighbour')).catch(error=>{
            console.log(error);
            renderError(`Something went wrong ${error.message}`);
        }).finally(()=>{
            countriesContainer.style.opacity=1;
        });
    });

    // If a promise is not fulfilled then (rejected promises).
    // We can pass a second callback which will take the error itself as a parameter.
    // But there could be situation that the first fetch don't have any errors but in any of the subsequent chain. So we have to handle error at each point.
    // Better way is to use catch method at the last of the chain.
    // finally method is will be executed no matter what happens to the promise (either fulfilled or rejected).
}   // finally method is useful in many of the cases.
    // Chaining Promises is the replacement for callback hell.
    // fetch promise in only rejected when there's no internet connection.
btn.addEventListener('click',function(){
    getCountryData("Canada");
});
// getCountryData("sdsdr");
