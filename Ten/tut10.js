/*Functions and Scope*/

function greet(name) {

  console.log(`Good Morning ${name}`);
  return 1; //without this this will return undefined
}

let name = 'Rahul'
greet(name);
name = 'XYZ'
greet(name);

//default argument

function greetMe(name, thank = 'Thank You') {
  console.log(`Good Morning ${name} and ${thank}`);
}

greetMe(name, 'Thanks')
greetMe(name)

//creating function in variable
let mygreet = function(name) {
  console.log(`Good Evening ${name}`);
}
mygreet('Rahul')

//can use functions in objects as well
const obj = {
  name: 'Rahul',
  game: function() { //Anonymous function
    return "PUBG";
  }
}

console.log(obj.game());

/*Scope*/
var i = 10

{
  let i = 900; //now if i remove the upper var there will be error since i is limited to this scope only and there will be no variable named i at line 46
  console.log(i);
}
console.log(i);

function getName(name) {
  var i = 9 //local to the scope if declared a new variable using var
  //but if not used var then it will modify the global variable
  //same goes with let
  console.log(i);
  return `${name}`;
}

console.log(getName('Rahul'));
console.log(i);