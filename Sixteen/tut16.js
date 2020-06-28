/*Creating, removing and replacing elements*/

let ele = document.createElement('li'); //creates a html element
ele.className = 'child'; //set the class
ele.id = 'last'; //set the id
ele.setAttribute('name', 'li'); //set any attribute
ele.innerText = 'appended list';
//can also use innerHTML
console.log(ele);

//now to append in dom under ul, so first grab the ul element

let ul = document.querySelector('ul.list');
console.log(ul);
ul.appendChild(ele);

//alternative for innerHTML and innerText
let ele2 = document.createElement('li');
let text = document.createTextNode('i am a text node');
ele2.appendChild(text);
ele2.className = 'child';
ele2.id = 'hello';
console.log(ele2);
ul.appendChild(ele2);

//replacing an element
//replacing ele2 with a heading

let ele3 = document.createElement('h3');
let tnode = document.createTextNode('Replacing text node');
ele3.id = 'ele3';
ele3.className = 'ele3';
ele3.appendChild(tnode);
console.log(ele3);
//method to replace an element
ele2.replaceWith(ele3);

//replacing child node
ul.replaceChild(ele2, document.getElementById('l'));
//format(new node,child node to be replaced)

//removing the node
ul.removeChild(document.getElementById('lui'))

//some additonal functions->
let attr = ele2.getAttribute('class') //returns the attribute value
console.log(ele2, attr);
console.log(ele2.hasAttribute('id')); //returns a boolean value if the attribute is present
ele2.removeAttribute('id'); //removes the attribute
console.log(ele2);