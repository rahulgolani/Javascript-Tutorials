console.log("Shorthand character classes");


// 1) 1 word character \w
let regex = /\wahul/; //\w takes a alphanumeric word or _

// 2) More than one word character
regex = /\w+ahul/;
//raa%aahul - it will only match aahul

// 2) non word character \W
regex = /\Wgolani/;
//matches " golani"

// more than 1 non word
regex = /\W+golani/;
// matches "  $%^%$golani"

// 3) digit
regex = /\d999/;
// more than one digit
regex = /\d+9999/;

// 4) non digit \D
regex = /\D999/;
// more than 1 non digit
regex = /\D+999/;

// 5) whitespace character \s

regex = /\sraahul/;
// more than 1 whitespace
regex = /\s+raahul/;
//matches " \traahul"

// 6) non whitespace character \S
regex = /\Sani/;
//more than 1 non whitespace character

regex = /\S+ani/;

// 7) Word Boundary, means after certain characters a new word should start \b

regex = /name\b/;
//after name a new word starts


// 8) Assertions conditional
regex = /g(?=o)/; //match only if there is a o after g 'golani'

// regex = /g(?!o)/; //match only if there is no o after g ''gplani

let str = "My name is \traahul golani yy999";
let result = regex.exec(str);
console.log(result);