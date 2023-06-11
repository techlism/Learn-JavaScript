const whereAmI = function (lat, long) {
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
    .then(response => response.json())
    .then(data =>{
        console.log(`You are in ${data.city}, ${data.country}`);
    });
}
whereAmI(52.508,13.381);