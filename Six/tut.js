/*STRINGS*/


const name = 'Rahul'
const greet = 'Good Morning'

console.log(greet + ' ' + name);

//multi row strings by using concatenation operator

html = '<h1>Hello World</h1>' +
  '<p>This is next line</p>'
console.log(html);
//but this way of writing multiline strings is a overhead

//another way is to use concat method

//concat menthod
html = html.concat('this is a concatenated string', ' ', 'second')
console.log(html);

//template literal (later) to generate html tags

//length
console.log(html.length);

//toLowerCase
console.log(html.toLowerCase());

//toUpperCase
console.log(html.toUpperCase());

//does not maipulate original string it is just returning the value

console.log(html);

//indexing
console.log(html[0]);

console.log(html.indexOf('Hello')); //gives the index of first occurence of the given substring
//if substring not present then -1
console.log(html.lastIndexOf('<')); //gives the last index of

console.log(html.charAt(4)); //finding the value at a given index

console.log(html.endsWith('second')); //returns true if the string ends with the given string

//check if the given string is present using includes
console.log(html.includes('Hello')); //returns true if the substring is present in string

//slicing using substring
console.log(html.substring(0, 3)); //slicing the string (index included,index excluded)

console.log(html.slice(-4)); //slice works same as substring difference is if we use negatine index in slice the we get the index number of characters from the last

//to check -ve index in substring

//split function

console.log(html.split(' ')); //split the string in array

//replace
console.log(html.replace('Hello', 'Bye')); //only replaces the first occurence


//template literal

let myHtml = `Hello ${name} ${greet}
<h1>Hello world</h1
`;
console.log(myHtml);
// document.body.innerHTML = myHtml;

fruit = 'orange\'' //escape sequence \
console.log(fruit);