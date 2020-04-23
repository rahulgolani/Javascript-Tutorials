/*INTRODUCTION*/
console.time('Total')

console.log('hello');

/*
ways to insert java script->
1) Use the <script> here </script> tag
2) Use external file <script src="index.js"></script> script:src emmet
index.js is the js file give project path in src

Console is a powerful tool for debugging [info,alert,warn], for analysing the web page, to check the variables used.

when run console.log in browser it returns undefined.[has not returned anything]

can also use console as calculator


*/

console.log(45+5)
console.log([1,2,3,4,5])
console.log({name:'Rahul',age:23}) //javascript object

console.table({name:'Rahul',age:23}) // logs the object in tabular form

console.warn('This is warning')//warning

//console.clear()//clears the Console

//Use semi:colon in the code
console.timeEnd('Total') //if you want to check the total time your javascript code took then this method is handy. just use the console.time at start with a identifier and in the end use console.timeEnd with the same identifier

//Assertions

console.assert(566<189,'Age greater than 189 is not possible')
//assert come in handy where you want to check for some conditions
console.error('this is an error');// to throw error

//This is a single line comment

/*This is a
multiline comment
*/
//console.info('he')
