//ASYNCHRONOUS Programming
// console.log('ASYNCHRONOUS Programming');

// Synchronous Programming->
// Suppose we have a javascript written to fetch facebook.com, google.com and print hello on th dom, so for example fetching facebook.com takes 12 secs, google.com takes 13 secs and printing hello in the DOM takes 3 milli seconds. So in Synchronous programminf the javascript engine will first call for facebook.com and wait till it receives the response, then it will fetch google.com and wait till it receives the response. Now it will print hello on the web page.

// So total time -> 25.003 seconds

// Now consider this scenario, Ramu is a person and is working in a house, so the owner wants milk and biscuits, so Ramu will first buy Milk, give it to the owner and then Ramu will go to buy biscuits and give it to the owner.[Synchronous Programming]
//
// But if Ramu has a follower, Ramu Junior, so Ramu sends Ramu Junior to fetch Milk and Ramu himself goes to buy biscuits. So in that case the work is done parallelly, and no request is blocked.
//
// Similarly if our javascript engine does not wait for each request to get completed, rather it moves to process the rest of the requests, and once the request is completed the browser will be notified. This is called Asynchronous Programming as no request will get blocked

// ASYNCHRONOUS model allows multiple things to happen at the same time
// Synchronous model - things happen one at a time(back to back)

// Ways to write ASYNCHRONOUS code in javascript
// 1) Async / await
// 2) Callbacks
// 3) Promises

// for (let i = 0; i < 5000; i++) {
//   console.log(i);
// }
// console.log('DONE PRINTING');

//HERE FIRST THE LOOP EXECUTES AND THEN THE LOG MESSAGE IS PRINTED(Synchronous)

setTimeout(() => {
  for (let i = 0; i < 5000; i++) {
    console.log(i);
  }
}, 1000)
console.log('DONE PRINTING');
//HERE BY USING setTimeout, WE ARE NOT BLOCKING THE LOG MESSAGE AND IT IS PRINTED FIRST AND AFTER THAT THE LOOP IS RUN(ASYNCHRONOUS)