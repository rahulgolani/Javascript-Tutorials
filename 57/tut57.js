console.log("Javascript Maps");

//Map is a key value pair, any type of value can be used as key

const map = new Map();
console.log(map);

let key1 = "one",
  key2 = {},
  key3 = function() {};

map.set(key1, "One");
map.set(key2, "Two");
map.set(key3, "Three");
console.log(map);

console.log(map.get(key1));
console.log(map.size);

//we can use for of loop to traverse through the map

for ([key, value] of map) {
  console.log(key, value);
}

//to fetch only keys
for (key of map.keys()) {
  console.log(key);
}

//getting only values
for (value of map.values()) {
  console.log(value);
}

//we can also use for each loop to iterate

//order of parentheses should be same
map.forEach((value, key) => {
  console.log('key is', key);
  console.log('value is', value);
})

//converting map to array
let arr = Array.from(map);
console.log(arr);

let keys = Array.from(map.keys());
let values = Array.from(map.values());
console.log(keys);
console.log(values);

arr.forEach((element) => {
  console.log(element[0], element[1]);
})