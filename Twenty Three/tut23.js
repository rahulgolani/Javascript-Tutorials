// Math object in Javascript

let x = 3;
let y = 7;
let z;
console.log(z);
z = x + y;
console.log(z);
z = x / y; //exact values no value cutoff
console.log(z);

z = Math;
console.log(z);
console.log(Math.PI);
console.log(Math.round(5.4));
console.log(Math.ceil(5.4));
console.log(Math.floor(5.7));
console.log(Math.floor(-5.6));
console.log(Math.abs(-5));
console.log(Math.abs(-5.7));
console.log(Math.sqrt(5));
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.min(12, 3, 4, 5));
console.log(Math.max(12, 23, 45, 5));

console.log(parseInt(Math.random() * 100));

// a = (0, 1)
// but if we want in range, then
// a_100 = 100 * a = (0, 100)
// a_10_100 = 10 + (100 - 10) * a = (10, 100)

console.log(parseInt(10 + (20 - 10) * Math.random()))