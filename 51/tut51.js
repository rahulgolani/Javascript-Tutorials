console.log("Iterators");

function fruitsIterator(arr) {
  let nextIndex = 0; //index
  // returns a object
  return {
    // it contains a function
    //iplementation of next is termed as iterator protocol
    next: function() {
      if (nextIndex < arr.length) {
        // now this function also returns a object
        return {
          value: arr[nextIndex++],
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
}

const myArray = ['Apples', 'Oranges', 'Grapes', 'Guava'];
console.log(myArray);
var iter = fruitsIterator(myArray);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());