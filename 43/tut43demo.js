setTimeout(() => {
  console.clear();
  console.log('Async/Await');
}, 2000)

//with promises we have use 2 then, first to get the response and then to get its json
// if we use async, then this function returns a promise, and we only have to use one then
async function getUsers() {
  console.log('inside getUsers');
  // await waits for the fetch to get the response, since it is asynchronous, it will run in background and won't block any request
  var response = await fetch('https://api.github.com/users'); //this will again return one promise
  console.log('before response');
  //the above await will check if the response is fetched or pending, if pending, it will move to other request and will come to it later
  var users = await response.json(); //this will also return a promise
  //once the response is received, it will return otherwise wait if no pending jos is there
  console.log('after response');
  return users; //preomise resolved
}


setTimeout(() => {
  console.log('before calling getUsers');
  var a = getUsers();
  console.log('after calling getUsers');
  console.log(a);
  a.then(data => console.log(data))
  console.log("last line on this file");
}, 3000)


// OUTPUT

// Console was cleared
// tut43demo.js:3 Async/Await
// tut43demo.js:18 before calling getUsers
// tut43demo.js:8 inside getUsers
// tut43demo.js:20 after calling getUsers (since at first await the promise is not returned, so it will not block other requests and will continue to execute in background)
// tut43demo.js:21 Promise {<pending>} (promise still pending)
// tut43demo.js:23 last line on this file
// tut43demo.js:10 before response// after everything executed, it will return to await and execute other
// tut43demo.js:12 after response
// tut43demo.js:22 (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]