/*Arrays and Objects*/

let num = [1, 2, 3, 4, 5]
const fruits = ['apple', 'banana', 'grape', 'guava']
const mixedArr = ['rahul', 23, ['Physics', 'Chemistry', 'Maths']]
console.log(num, fruits, mixedArr);

//another way to create array
const arr = new Array(23, 24, 'Rahul');
console.log(arr);

//array index starts from 0
console.log(fruits[0]);

//arrays have properties and methods
console.log(arr.length); //since length is not used with parentheses it is a property

console.log(Array.isArray(arr)); //method
fruits[0] = 'pineapple'
console.log(fruits);

ind = num.indexOf(1)
console.log(ind); //gives the index of the element

//can also mutate array (modifying)
num.push(34) //appends at the end of the array
console.log(num);

num.unshift(0) //appends at the start
console.log(num);

num.pop() //removes from the end
console.log(num);

num.shift() //removes from the start
console.log(num);

num.splice(1, 2); //removes the elements from the given index and number of elements to be removed
console.log(num);

num.reverse(); //reverse the array
console.log(num);
num2 = [11, 12, 13]
num = num.concat(num2)
console.log(num);

/*Objects*/

let myObj = {
  name: 'Rahul',
  age: 23,
  qualification: 'B Tech',
  subjects: ['p', 'c', 'm']
}
// Accessing the elements from an object
console.log(myObj);
console.log(myObj.qualification);
console.log(myObj.subjects);
console.log(myObj['name']);