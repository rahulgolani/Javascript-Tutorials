//AJAX

// AJAX stands for Asynchronous Javascript and XML
// Not a programming language, rather a set of exisiting technologies
// Helps in fetching data asynchronously without interfering with existing pages
// No page refresh / reload
// Modern websites use JSON instead of XML for data transfer

// Why use AJAX ?
//
// 1 no page refresh
// 2 better user experience
// 3 saves network bandwidth (instead of loading the whole website again only a part of it is changing)
// 4 very interactive (no reloads)

// How it works ?
//
// AJAX uses XMLHttpRequest object(xhr) to achieve this.This is an inbuilt object, nothing to
// import and when you use pure javascript without importing any library, it is called Vanilla Javascript.XHR has many inbuilt methods and utilities using which we can make AJAX calls
//
// Modern websites use JSON instead of XML
// for data transfer
//
// Data can be transferred in any format and protocol(not always https, it can be xml, txt, json etc.)

console.log('AJAX TUTORIAL');

let fetchBtn = document.getElementById('fetchBtn');
let populateBtn = document.getElementById('populate');
// console.log(populateBtn);

fetchBtn.addEventListener('click', buttonClickHandler);
populateBtn.addEventListener('click', popHandler);

function popHandler() {
  console.log('inside populateEmployees');
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

  xhr.onload = function() {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj.data);
      empArr = obj.data;
      let list = document.getElementById('list');
      let str = '';
      empArr.forEach(function(element, index) {
        str += `<li>${element.employee_name}</li>`;
      });
      list.innerHTML = str;

    } else {
      console.log('Some error occured');
    }
  }

  xhr.send();
  console.log('We have fetched');
}


function buttonClickHandler() {
  console.log('inside buttonClickHandler');
  //Instantiate XHR Object
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    console.log('ready state is', xhr.readyState);
  }
  //xhr ready states

  // 0	UNSENT	Client has been created. open() not called yet.
  // 1	OPENED	open() has been called.
  // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
  // 3	LOADING	Downloading; responseText holds partial data.
  // 4	DONE	The operation is complete.

  //open the xhr object
  //xhr.open('GET', 'rahul.txt', true); //txt
  // https://jsonplaceholder.typicode.com/ from here we can get fake json data
  // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
  //(get/post in string, url from where data will come, async booloean value)

  //POST REQUEST
  // http://dummy.restapiexample.com/
  // with post request we have to send data also
  xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
  // xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded'); //means we are sending the data in the url itself
  xhr.getResponseHeader('Content-type', 'application/json');

  //what to do on progress
  xhr.onprogress = function() {
    //use it for spinners and loaders until the onload method is called
    console.log('On Progress');
  }

  //what to do when response is ready
  xhr.onload = function() {
    //onload is when request is completed
    //we can check if the resource is found or not by status codes
    if (this.status === 200) { //status ok
      console.log(this.responseText);
    } else {
      console.error('Some Error Occured!');
    }

  }

  //send the request
  // xhr.send();
  //python -m http.server to open live server


  params = `{"name":"Rahul","salary":"400000","age":"23"}`;
  xhr.send(params);

  console.log('We are done');
  //we are done will be printed before the response, because we have made an asynchronous request,
  // if async is false, then it will get print at the end, after the response is received

}