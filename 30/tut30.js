// Prototype inheritance


//defining a Prototype for object
const proto = {
  slogan: function() {
    return 'Just do it!';
  },
  changeName: function(newName) {
    this.name = newName
  }
}

// now we can create an object using the above Prototype using Object.create

obj = Object.create(proto);
obj.name = 'Rahul';
obj.profession = 'Engineer';
// console.log(obj);


// Another way to create object

obj2 = Object.create(proto, {
  name: {
    value: 'Rahul',
    writable: true //for the proto to work and update the values
  },
  profession: {
    value: 'Engineer'
  }
})
obj2.changeName('Golani') //now this will not work since in this way of object creation we need to define which properties are writable, defining name as writable
// console.log(obj2);


function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

//adding method in prototype
Employee.prototype.slogan = function() {
  return 'Just do it!';
}

let obj3 = new Employee('Rahul', 400000, 2);
console.log(obj3);
console.log(obj3.slogan());

//Inheritance

function Programmer(name, salary, experience, language) {
  //Programmer is  also an Employee so basically it should inherit the properties of the employee
  Employee.call(this, name, salary, experience); //call Employee constructor in this object's ref with the values
  this.language = language;
}
// console.log((prog));
//but slogan is not inherited, for that we need to explicitly inherit
Programmer.prototype = Object.create(Employee.prototype); //inheriting the prototype
//But the constructor is still not inherited, that too will be explicitly done
Programmer.prototype.constructor = Programmer;

prog = new Programmer('Rahul', 400000, 2, 'Javascript')
console.log(prog);