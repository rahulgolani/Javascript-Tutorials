/* Conversion and Coercion*/

let age=23
console.log(age + typeof age);
//converting into string

age=String(age)//s capital
console.log(age+typeof age);

let boolVar=true;//1 or 0
console.log(typeof boolVar);

boolVar=String(true)
console.log(typeof boolVar);

let date=new Date();
console.log(date);
console.log(String(date));
console.log(typeof date);

let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr.length); //returns the number of elements
arr=String(arr);
console.log(arr);
console.log(arr.length+typeof arr); //length does not include the square brackets returns the number of characters

//toString

var i=20
console.log(i.toString()); //does not store i as string
console.log(typeof i);// will still return type as number

let str=Number('343')
console.log(typeof str);// Number function is used to convert into numbers

str=Number('343d4')
console.log(str,typeof str);// while converting into number there was a problem as d was in between so JS returned NaN (not a number)

str=Number(true)
console.log(str, typeof str);//converts true to 1 false to 0

var array=Number([1,2,3,4,5])
console.log(array, typeof array);//NaN

//you can re-assign any variable but cannot declare it again

//parseInt  and parseFloat
 var j='34.0983'
 console.log(j,typeof j);
 j=Number(j)//converts into number as it is
 console.log(j,typeof j);
 j=parseInt(j) //converts into integer value
 console.log(j,typeof j);
 j=parseFloat('34.0983')// converts into float value
 console.log(j,typeof j);

console.log(j.toFixed(2));//toFixed is used to restrict the number upto certain decimal points

//TYPE COERCION
console.log('Type COERCION');
let x='698'
let y=34
console.log(x+y);// here javascript converts number to string and concatenates both
