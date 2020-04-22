/*TRAVERSING THE DOM*/

let cont=document.querySelector('.container');
console.log(cont);//getting the element
console.log(cont.childNodes);//getting all the child elements [this method includes the new line, comment nand text under the element]
console.log(cont.children);//children is used to get rid of the text, new line and comment inside an element

//avoid using childNodes because even if removing a single blank line the length of the html collection will change and this can lead to a coe breakdown

console.log(cont.children[2].nodeName);//name of the node
console.log(cont.children[2].nodeType);

//NODE TYPES->
/*
NUMBERS    ----   TYPE
1) element
2) ATTRIBUTE
3) TEXT node
8) comment
9) document
10) DOCTYPE
*/

let element=document.querySelector('.container')
//console.log(element.children[1]);
//console.log(element.children[1].children);
//console.log(element.children[1].children[0].children);

//we can traverse in children as shown above

//getting the first child of any element

console.log(element.firstChild);//this gives the first child from the list of childNodes

//If you want the child element the use firstElementChild

console.log(element.firstElementChild);

//similarly we have lastChild and lastElementChild

console.log(element.lastChild);
console.log(element.lastElementChild);

//childElementCount

console.log(element.childElementCount);//gives the count of children

//getting the parent of a node--parentNode
console.log(element.firstElementChild.parentNode);

//getting the sibling use--nextSibling ang to get the next element sibling use nextElementSibling

console.log(element.firstElementChild.nextElementSibling.nextElementSibling);
