/*Manipulating websites using javascript window object*/

/*
-DOM-DOCUMENT OBJECT MODEL
-dom object is a part of window
-window object is a global object in client side javascript

*/

console.log(window);//check in browser
//window is a object and alert is present in window
//so you can either write window.alert or simply alert because window is a global variable

alert('hello');//check in browser

//var a=prompt('enter your name');//gives the dialog box with message to enter value and that value will be stored in a

a=confirm('are you sure to delete?')//gives the option to select ok or cancel. returns a boolean value corresponsing to each
console.log(a);

console.log(window.document);
//document comes under window
// all html head comes under document
//this is called DOM and it has a tree structure
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.outerWidth);

//scrollX,scrollY-how much scrolling have you done on the webpage

//location.reload();//reloads the webpage
//location.href='https://www.youtube.com'//redirects you to the link
console.log(location.toString());//gives the url of the current page 

/*
window.history// maintains the history
history.length//give the length of the moved pages
history.go(-1)//takes one step back
*/
