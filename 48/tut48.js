console.log("Character Sets");

let regex = /^r/i;

// 1) a-z matches any one character in character set
regex = /R[a-z]hul/;

// 2) only some characters
regex = /R[auy]hul/; //either a,y,u
//any one of a,u,y

// 3) excluding some characters
regex = /R[^ayu]hul/; //^ does not match(not a,y,u)
//can use multiple character setss

// 4) to match a-z or A-Z
regex = /R[a-zA-Z0-9]hul[0-9]/;

// Quantifiers
// Quantifiers are used to specify the quantity of the characters in regex

regex = /Ra{1}hul/; //a should appear only 1 time

//matching 0 time - 2 times
regex = /Ra{0,2}hul/; //0 or 1 or 2


// Groupings
// Use() for Groupings
regex = /R(ah){0,2}ul/;
regex = /R(ah){1}ul([0-9]r){2}/;

let str = "Rahul1r2r Golani";
let result = regex.exec(str);
console.log(result);