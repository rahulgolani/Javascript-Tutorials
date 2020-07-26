console.log("Javascript Symbols");

//symbols is a new primitive data type introduced in es6

let sym = Symbol("symbol")
console.log(sym);

//Symbol is not a constructor and it is not to be used with new keyword
console.log(typeof sym);

// each identifier sinitialized with symbol is unique
let sym2 = Symbol("symbol");
console.log(sym == sym2);

//but in case of strings then this will return true

let a = "symbol";
let b = "symbol";
console.log(a == b);

//use of sybmol is to create unique keys/values with same identifiers

let k1 = Symbol();
let k2 = Symbol();

let myObj = {};
myObj[k1] = "rahul";
myObj[k2] = "golani";
console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);

//with k1 and k2 being different

//cannot use myobj.k1 as it will search for key k1

//IMPORTANT
//Symbols are ignored in for in loop
//JSON.stringify also ignores the symbols