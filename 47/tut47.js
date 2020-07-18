console.log("Metacharacters");

let regex = /rahul/i;

//metcharacters

// 1) ^ -> means expression starts with
regex = /^M/;

// 2) exp$ -> ends with
regex = /ipt$/;

// 3) . -> matches any one character
regex = /r.hul/i;

// 4) * -> matches 0 or more character
regex = /r*hul/i;

// 5) ? -> optional
regex = /rah?ul/i; //after ra h is optional, it can be it can be not
// if /rahul?/ is written then rahum will match as l is optional but rahumj will not match

// 5) escape sequence \ used to match exact * or . etc
regex = /r\*hul/i;

let str = "My name is Rahul and Rahul codes in Python. Rahul also codes in javascript";

let result = regex.exec(str);
console.log(result);