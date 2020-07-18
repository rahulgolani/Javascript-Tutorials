console.log("Regular Expressions");
//used to search patterns in a string

//double slach is a comment, but if we write something in between, then it becomes a regular expression literal

let reg = /rahul/g; //regular expression literal
// let reg = /rahul/i; // i for case insensitive
// console.log(reg.source); //whatever is written inside regular expression literal

// Functions to match expressions
// 1) exec()-> returns array for a match and null for no match

let sentence = "My name is rahul golani rahul golani";
let result = reg.exec(sentence); //literal.exec(string)
// console.log(result);

//if we want to check the second rahul, then we can set a flag g (global) in reg, now the string will be searched globally, and second exec will return the next index and third exec will return null(so we can iterate and use this as a termination condition)

// result = reg.exec(sentence); //literal.exec(string)
// console.log(result);
//console.log(result.input);// if result is null so this line will throw error
// result = reg.exec(sentence); //literal.exec(string)
// console.log(result);


// 2) test() -> returns true or false

result = reg.test(sentence);
// console.log(result);

// 3) match() -> returns array on match and null on no match
//different from exec in way that it is applied on string

result = sentence.match(reg);
console.log(result);

//if used with global flag, it will return the exact number of matches with use of only one match

// 4) search() -> returns index of first match else -1
//this is also applied on string

result = sentence.search(reg);
console.log(result);

// 5) replace()-> returns new replaced string with all the replacements

result = sentence.replace(reg, "Shreya");
console.log(result);
//if all the match should be replaced, then we have to give global flag