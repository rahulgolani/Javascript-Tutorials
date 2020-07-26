console.log("Destructuring");

[a, b] = [1, 2]
console.log(a, b);

[a, b, c, d, e, f] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//skips the last 3 values
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

[a, b, c, d, e, ...f] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//but if used with 3 dots then all the values will be present in array
//rest elements should be the last elements
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//we can also do this in object

({
  a,
  b,
  c
} = {
  a: 1,
  b: 2,
  c: 3
})
console.log(a, b, c);

({
  a,
  b,
  c,
  ...d
} = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
})

console.log(a, b, c, d);

//rest elements will be stored as an object

let fruits = ["Apples", "Oranges", "Mangoes"];
[a, b, c] = fruits
console.log(a, b, c); //destructuring

//Object Destructuring
let laptop = {
  model: "Dell Inspiron",
  age: "2 years",
  ram: "4 gb",
  start: function() {
    console.log("started");
  }
}

//now we can get the object values using destructuring
let {
  model,
  age,
  ram,
  start
} = laptop
console.log(model, age, ram);

start();


//clock exercise
//onload="function; setInterval('funtion',1000)"