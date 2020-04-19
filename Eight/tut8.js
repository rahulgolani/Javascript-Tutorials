/*Conditinal Statements*/

let age=29

// = is assignment operator
// == is equality operator
if (age==23){
  console.log('age is 23');
}
else if (age==29){
  console.log('age is 29');
}
else{
  console.log('age is not 23');
}

let i='90'
if (i==90){
  console.log('i is 90');
}
//here == operator only check the value. It does not care about the type

//if you want to check the type+value then use === operator

if (i===90){
  console.log(true);
}
else{
  console.log(false);
}

if (age!=23){ //not equal to operator
  console.log('age is not 23');
}

// !== if value and type both are not equal to the value

if (i!==90)
{
  console.log(true);
}
else{
  console.log(false);
}

//check is the variable is present or not

if (typeof vari !== 'undefined'){
  console.log('variable is present');
}
else
{
  console.log('variable is not present');
}

let doesDrive=true
age=15
//and operator
if (doesDrive && age>19){
  console.log('You can drive');
}
else{
  console.log('You cannot drive');
}

//or operator
if (doesDrive || age>19){
  console.log('You can drive');
}
else{
  console.log('You cannot drive');
}

//Ternary operator
age=56
console.log(age==45? 'age is 45':'age is not 45');

//switch case Statements
age=90
switch (age) {
  case 18:
    console.log('You are 18');
    break;
  case 23:
    console.log('You are 23');
    break;
  case 56:
    console.log('You are 56');
    break;
  default:
    console.log('you are unknown');
    break;

}
//if break is removed the after the condition is true after it all the logs statement will be executed
