/*LOCAL STORAGE AND SESSION STORAGE*/

// developer tools -> application -> local storage and session storage

//LOCAL STORAGE-> javascript allows us to store some values in local browser for a particular website and once stored we can read that value any number of times

//SESSION STORAGE-> the key value pair is stored for a particular session. once the session is over the values are gone

//local storage is under window object
//setting an item as a key value in localStorage
//localStorage.setItem('Name','Rahul');
console.log(window.localStorage);

//retreive->
//console.log(window.localStorage.Name);
console.log(typeof window.localStorage);

//let name=localStorage.getItem('Name');//if we enter a bogus key then we will get null as a output
//console.log(name);

//clear local storage
//localStorage.clear();

//removing a particular key from localStorage
//localStorage.removeItem('Name');

//you cannot add arrays in localStorage
//but there is a way to overcome this limitation

//example->
let arr=[1,2,3,4,5,6,7,8,9];

localStorage.setItem('Numbers',arr);
let value=localStorage.getItem('Numbers');
console.log(value);
console.log(typeof value);//here the array is stored as string

//solution workaround-> use JSON.stringify and JSON.parse

localStorage.setItem('NumberArray',JSON.stringify(arr));
let numArray=localStorage.NumberArray;
console.log(typeof numArray);//string
//retrieving the array

let arrayNum=JSON.parse(localStorage.getItem('NumberArray'));
console.log(arrayNum);
//now you can perform all the operations on the array


//SAME OPERATIONS WORKS FOR sessionStorage

//sessionStorage.setItem('sessionNAME','rahulgolani')
//commenting to check value pertains after i close the browser
// the value does not pertain for sessionStorage, but it pertains for localStorage
