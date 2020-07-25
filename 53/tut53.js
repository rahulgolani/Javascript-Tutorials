console.log("Generators");

// Suppose we want an array of 1 lakh numbers, so creating a array and storing it in memory is not a good idea, so we can use generators to generate values on the fly

function* numbersGen() {
  //only generate number when the generator funtion is called
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = numbersGen()
console.log(gen.next()); //object containing value, done
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());