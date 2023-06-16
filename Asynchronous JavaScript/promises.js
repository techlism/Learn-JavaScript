// Promise is a special kind of object in JavaScript.
// A promise takes only one argument called executor function.
// But the executor function takes two arguments namely resolve and reject(which are functions itself).
// It is a like a fetch function which creates a new Promise
// The executor function is the part which contains the asynchronous part.

const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        if(Math.random()>=0.5){
            resolve('Winner'); // This part will be available to then method during consuming the promise.
        }
        else{
            reject(new Error('Looser')); // This part will be the error (catch method).
        }
    },2000);
});

promise.then(str =>
     console.log(str))
     .catch(err => console.error(err));

// We mostly consume promises and creating promises is called promisifying.

// Promisifying setTimeout

const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds * 1000);
    });
}

wait(2).then(()=>{
    console.log('I waited for 2 Seconds');
    return wait(1);
}).then(()=>{
    console.log("Now I waited for 1 Second");
})
