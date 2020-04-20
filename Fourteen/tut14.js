/*HTML ELEMENT SELECTORS IN JAVASCRIPT*/
//DOM SELECTORS

//2 types->
/*
1) single element selector
2) multiple element selector
*/

// single element selectors

//1)
let element=document.getElementById('first')// does not contain 's' in ELEMENT, that is why single
console.log(element);

console.log(element.className);//gets the class name of the element
console.log(element.childNodes);//gets the child nodes
console.log(element.parentNode);//gets the parent tag
console.log(element.style.color='red');//can manipulate css from javascript
console.log(element.style);//can see the possible styles present

//console.log(element.innerText);
//console.log(element.innerHTML);
//element.innerText='Rahul'
//element.innerHTML='<b>Rahul Golani</b>';

//2) Query Selectors

//let ele=document.querySelector('.container')//use css selector in it
//console.log(ele);
//querySelector only gives the single element- first element

//let ele2=document.querySelector('#first');
//console.log(ele2);


/*Multi element selector*/

//1)
//let ele3=document.getElementsByClassName('child');
//console.log(ele3);
//can access these using indexes
//or you can create an array out of it

//chaining
let ele4=document.getElementsByClassName('container');
console.log(ele4[0].getElementsByClassName('child'));

let elems=document.getElementsByTagName('div')//using tag name
console.log(elems);

//we can also iterate within these elements
//iterating the elements to make every tag text bold
elemsArray=Array.from(elems);
elemsArray.forEach(function(i){
  i.style.fontWeight="bold"
})
