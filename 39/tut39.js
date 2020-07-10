console.log('Promises');

// Promise - Promises can be 'resolved' or 'rejected' or it is still 'pending'

function promiseMaker() {
  //promise is a object which takes 2 callbacks, resolve and reject
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      var error = true;
      if (!error) {
        console.log('Promise has been resolved');
        //if the promise is kept then resolve will be called
        resolve();
      } else {
        console.log('Sorry i could not fulfill the promise');
        //if promise not kept then reject will be called;
        reject('Sorry not fulfilled');
      }
    }, 2000);
  });
}

//then is used- if the promise has been kept then this function should be called
promiseMaker().then(function() {
  console.log('Thanks for keeping up to the promise');
}).catch(function(error) {
  console.log('Very bad bro ' + error);
})
//catch is used - if the promise has not been kept then this function should be called


//callbacks in previous tut can be replaced by promises