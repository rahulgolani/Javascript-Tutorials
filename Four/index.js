/*
javascript is a dynamically typed language

data types in javascript
1) primitive [base] [memory allocations are in stack]
2) reference [derived] [objects] [memory allocations are in heap (dynamic)]

 primitive data types->
string (collection of characters) , numbers, boolean (true/false) , null(intentional empty value), undefined (default value), symbol(new intriduced in ES6)

reference data types->
arrays, object literals, functions,dates

*/
//string
var name='Rahul';
console.log('My name is '+ name);

//typeof operator - tells the datatype of the variable
//usage typeof variable
console.log(typeof name);

var age=23;
console.log(typeof age);

var isGraduate=true;
console.log(typeof isGraduate);

var isNull=null;
console.log(typeof isNull); //null has a bogus return value It is a primitive datatype but its return value is object

var undef=undefined
console.log(typeof undef);


////Reference data types

//arrays
var arr=[1,2,3,4,true,'hello']//can contain any primitive datatype
console.log(arr);
console.log( typeof arr);//reference datatypes have type object

//object literals

let marks={a:90, b:34,c:89}
console.log(marks);
console.log(typeof marks);

function getName()
{

}

console.log(typeof getName);//type of function is function

let date=new Date();
console.log(typeof date);//object
