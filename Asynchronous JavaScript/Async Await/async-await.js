// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// More @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function


// But the Html is not linked so it won't do anything.
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

const whereAmI = async function(countryName){

    // fetch(`https://restcountries.com/v3.1/name/${String(countryName)}`).then(res=>console.log(res));

    // Inside an async function there could be multiple await statements.
    const res = await (await fetch(`https://restcountries.com/v3.1/name/${String(countryName)}`)).json();
    // const data = await res.json();
    // console.log(res[0]);
    // Async await kinda syntactic sugar (over then method (see the example above)).
    // renderCountry(data[0]);
    // Await allows us to store async (promises) into a variable.
    return res;
}

whereAmI('portugal');

// for async await error handling we use try catch (which is available for any javascript code).


// Syntax for try catch
// try {
//     const x = 1;
//     x=2;
// } catch (error) {
//     console.error(error);
// }

// Error handling in async await is not clear yet.(Learn more)

(async function(){
    try{
        const city = await whereAmI('Republic of India');
        console.log(city);
    }
    catch(err){
        console.log(err.message);
    }
    console.log("Execution Done");
})();

// Running multiple promises at same time (could be in series or in parallel).

const getJSON = function(url,errorMsg="Something Went Wrong"){
    return fetch(url).then(response=>{
        // How to throw errors manually 
        if(!response.ok) {
            // If we use throw method then the promise will be rejected(If the condition reach here).
            throw new Error(`${errorMsg} ${response.status}`);
        }
    });
}

const get3countries = async function(c1,c2,c3){
    try{
        // This is how it can be done in one after another
        // const data1 = await getJSON(`https://restcountries.com/v3.1/name/${String(c1)}`);
        // const data2 = await getJSON(`https://restcountries.com/v3.1/name/${String(c2)}`);
        // const data3 = await getJSON(`https://restcountries.com/v3.1/name/${String(c3)}`);
        // console.log([data1,data2,data3]);

        // For parallel running of promises we can use Promise.all(p1,p2,..,pn);
        // It will again return a new promise
        // But Promise.all fails when even one  of the promises get rejected (So use carefully).
        const data = await Promise.all([
        getJSON(`https://restcountries.com/v3.1/name/${String(c1)}`),
        getJSON(`https://restcountries.com/v3.1/name/${String(c2)}`),
        getJSON(`https://restcountries.com/v3.1/name/${String(c3)}`)
        ]);


        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
get3countries("India","USA","Canada");

// Promise.race(p1,p2,p3) it will return that promise which will load a value faster. So if any of the promise gets an error it will shortcircuit.
// A very common use case for Promise.race could be to throw error if something doesn't load in a given time(basically it will race with setTimeout).

// Promise.any (ES2021) - It will return the first fulfilled promise.

// Promise.allSettled will also return a single promise but it will load all the promises.

// Try to revisit async part once again (Because confidence is bit low).