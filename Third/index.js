//console.clear()

//Variable in JS
//variable is nothing but a container to store something
//var,let and const using these keywords with which we can create variables

var name = 'Rahul';//can use backticks `` and double quotes as well
var surname= `Golani`;
console.log(name);
console.log(surname);

var age;
age=23

console.log(age);

var occupation;
console.log(occupation);//undefined because we did not assigned any value

/*
Rules for defining variables->

1) cannot start with numbers
2) can start with letter, _ or $ [avoid _ and $]
3) case sensitive
*/

// with the modern javascript var is not used

const CompanyName='Infosys';
console.log(CompanyName);
//CompanyName='' //Constant variable cannot be reassigned
//const gender;//Constant variable must be initialized at the time of declaration

// var has global scope and let has block level scope
var city='Kanpur'  //global scope
{
  let city='Pune'// increases readability dont have to worry if i have used a variable with var earlier
  console.log(city);//block level scope if let is not used then the change will be made in global variable
}
console.log(city);

const arr1=[1,2,3,4,5,6]
console.log(arr1);

arr1.push(45)// adds a element in array

console.log(arr1);
//making a array const does not prevent it from elements to be added. Const function is to prevent any reassignment

//arr1=[34]// this will throw error

// Most common programming case types
/*

1) camelCase [mostly used]
2) kebab-case
3) snake_case
4) PascalCase

*/
