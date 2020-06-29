//Object Prototypes

let obj1 = {
  name: 'Rahul',
  profession: 'Engineer',
}
console.log(obj1);
// If we check in console, under object, name, profession is present, addtionally there is a __proto__ also mentioned there

// If we want to build a website so you have bootstrap, google chrome already built for you so you can use them to build website on top of that, similarly when you purchase a new laptop so the basic configurations are done for you and you can customize your laptop as you wish oon top of that. Similarly when you define a object using object literal, javscript provides you with a basic template of object which is Object.prototype and on top of that you can define your own properties and methods as you want


// If we create a new object using constructor

function Obj(name) {
  this.name = name;
}

obj2 = new Obj('Rahul');
console.log(obj2);

// So using constructor we are creating a new prototype Obj which has constructor in it, and this is inherited from the Object.prototype

// Can we change the prototype of which we made using constructor?

//If we want to include some utility functions like getters and setters so instead of defining them as a part of our costructor we can include it in our prototype

Obj.prototype.getName = function() {
  return this.name;
}
console.log(obj2.getName());

//so this utility function getName is under the prototype

//ONLY CHANGE THE PROTOTYPE WHICH YOU CREATED, NOT THE ONES INCLUDED IN JAVASCRIPT

// if you type obj.protype you will get error since obj is object literal