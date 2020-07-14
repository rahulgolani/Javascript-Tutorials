setTimeout(() => {
  console.clear();
}, 1000);

let btn = document.getElementById('myBtn');
let content = document.getElementById('content');

// function getData() {
//   url = "test.txt";
//   // fetch returns a promise
//   console.log('inside getData');
//   fetch(url).then((response) => {
//     //this is run if resolve is called
//     console.log('inside first then');
//     return response.text();
//     //this also returns a promise
//   }).then((data) => {
//     console.log('inside second then');
//     console.log(data);
//   })
// }

function getData() {
  url = "https://api.github.com/users";
  fetch(url).then((response) => {
    return response.json(); //it parses the data, no need to use JSON.parse/ JSON.stringify
    //we can also use response.text() but it will give the result in texxt format but we want object
  }).then((data) => {
    console.log(data);
  })
}

//output

// Fetch API
// tut42.js:25 before running getData
// tut42.js:11 inside getData
//now fetch is asynchronous so it will run in the background and it will not block the other request
// tut42.js:27 after running getData
// tut42.js:14 inside first then
// tut42.js:18 inside second then
// tut42.js:19 This is for test

function postData() {
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"Rahul","salary":"123","age":"23"}'
  params = {
    method: "post",
    headers: { //format in which the data will be in
      'Content-Type': "application/json", //format in which the data will be{(form-encoded url)}
    },
    // body: JSON.stringify(data);//it requires string, if the data is in form of object then we have to stringify, if the data is in string no need to use stringify
    body: data
  }
  //2 parameters
  fetch(url, params).then(response => response.json()).then(data => console.log(data))
}

setTimeout(() => {
  console.log("Fetch API");
  getData();
  postData();
}, 2000);