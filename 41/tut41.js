console.log("Arrow Functions");

//regular function
function getName() {
  return "My name is Rahul Golani";
}

console.log(getName());

//regular function type2
const getName2 = function() {
  return "My name is Rahul Golani";
}

console.log(getName2());

//converting it into arrow function
const getName3 = () => {
  return "My name is Rahul Golani";
}

console.log(getName3());

//arrow functions does not require to use function keyword
//one liners does not require us to use braces/return
//one liners automatically return, but if you chose to use return keyword, you will have to use braces
const getName4 = () => "My name is rahulgolani"
console.log(getName4());

//if you have to return object in arrow function then you will have to use parentheses

const getName5 = () => ({
  name: "Rahul Golani"
});

console.log(getName5());

//if you have to pass parameters, then 2 cases arrive
// 1) Single Parameter

const greet = name => "Good Morning " + name;
console.log(greet("Rahul Golani"));
//single parameter do not require parentheses

// 2) Multiple Parameters
const greet2 = (type, name) => `Good ${type} ${name}`;
console.log(greet2("Evening", "Rahul Golani"));
//Multiple parameters require to use parentheses