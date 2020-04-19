/*UNDERSTANDING DOM AND CREATING A WEBSITE LAYOUT*/

//multiple elements can contain the same class
//but the id for all must be unique

console.log(document);
//DOM is nothing but a object
//and it is a structural representation of our html page

console.log(typeof document);

//we can manipulate dom using javascript
//dom has a tree structure

console.log(document.all);//gives all the tags used in the web page
//console.log(document.body);//gives the body tag from the html page
//document.all cannot be traversed by for loop

//we can use Array.from(a) using this we can create an array from html collection
a=document.all
arr=Array.from(a)
arr.forEach(function(element){
  console.log(element);
})

//getting links from the web page
//document.links
//document.links[0]//indexing
//document.links[0].href getting the href property

//document.images and document.scripts
