// Object Oriented Programming

// object is a unique entity which has properties and methods
let person = {
  name: 'Rahul'
}
console.log(typeof person);


//Object literals to create objects
let car = {
  name: 'Maruti 800',
  topSpeed: 89,
  run: function() {
    console.log('CAR IS RUNNING');
  }
}

console.log(car.name); //1 way to access
console.log(car['name']); //2 way to access
car.run();


//Creating a constructor to initialize/create objects
function GeneralCar(name, speed) {
  this.name = name;
  this.speed = speed;
  this.run = function() {
    console.log(`${this.name} is running`);
  }
}

bmw = new GeneralCar('BMW', 200);
console.log(bmw.name);
console.log(bmw.speed);
bmw.run();

alto = new GeneralCar('Alto', 100)
console.log(alto.name);
console.log(alto.speed);
alto.run();