console.log("Javascript sets");

let set = new Set();
//set stores unique values
console.log(set);

//adding values
set.add("this");
set.add("that");
console.log(set);
set.add("this");
console.log(set);

//can also use constructor to initialize the set
// let set2 = new Set([1, 2, 3, 4, 5, 6, 6, 6, {
//   a: 1,
//   b: 2
// }])
// console.log(set2);
// console.log(set2.size); //unique entries

let result = set.has("this"); //boolean value, checks if the value exists
console.log(result);

//removing the elements from set
// set.delete("that");
// console.log(set);

//iterating through the set

for (item of set) {
  console.log(item);
}

//can iterate through foreach as well

set.forEach((element) => {
  console.log(element);
})

var arr = Array.from(set);
console.log(arr);

//helpful in removing duplicates