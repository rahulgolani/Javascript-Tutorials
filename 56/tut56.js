console.log("For of and for in loop");

var People = ["Rahul", "Ram", "Mayank", "Prashant"];

// Traditional for loop
// for (let i = 0; i < People.length; i++) {
//   console.log(People[i]);
// }

for (element in People) {
  console.log(People[element]);
}

// for (key in obj) {
//   console.log(obj[key]);
// }

console.log("for of loop");
// ****************for of loop***********************

for (name of People) {
  console.log(name);
}

//if used for in loop, then indexes would have printed
//for in loop can be used to iterate object and for of loop can be used to iterate through an iterable