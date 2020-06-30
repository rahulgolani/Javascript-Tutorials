//ES6 classes and inheritance

class Employee {
  constructor(name, experience, division) {
    this.name = name;
    this.experience = experience;
    this.division = division;
  }

  slogan() { //function keyword not required over here
    return `My name is ${this.name}`;
  }

  joiningYear() {
    return 2020 - this.experience;
  }

  static add(a, b) {
    //static method is a method which can be called without creating a class object, directly by using the classname.method
    return a + b;
  }
}

//Creating a new class and inheriting it from the Employee class

class Programmer extends Employee { //use extends keyword to extend from a class
  constructor(name, experience, division, language) {
    super(name, experience, division); //super keyword is used to call the constructor of the parent class
    this.language = language;
  }

  favouriteLanguage() {
    if (this.language == 'Python') {
      return 'Python';
    } else {
      return 'Javascript';
    }
  }
}


emp1 = new Employee();
console.log(emp1); //this won't give error because the values will be taken as undefined
emp1 = new Employee('Rahul', 2, 'IT');
console.log(emp1); //constructor - class Employee
console.log(emp1.slogan());
console.log(emp1.joiningYear());

console.log(Employee.add(5, 5)); //calling static method


prog1 = new Programmer('Rahul', 2, 'IT', 'Python');
console.log(prog1);
console.log(prog1.favouriteLanguage());
console.log(prog1.joiningYear());