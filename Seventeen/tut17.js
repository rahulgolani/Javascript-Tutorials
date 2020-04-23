
/*EVENTS AND EVENT OBJECT IN JAVASCRIPT*/

//event is an interaction with the browser may it be a mouse click, mouse hover etc
//Javascript provides you with the ability to capture these EVENTS

let element=document.getElementById('heading');
console.log(element);

element.addEventListener('click',function(e){
  console.log(e);//event object
  console.log(e.offsetX);
  let variable=e.target;//target is the important attribute of the event object
  console.log(variable.className);
  console.log(variable.classList);
  list=variable.classList;
  var arr=Array.from(list);
  arr.forEach(function(i){
    console.log(i);
  })
  console.log(variable);
  console.log('You have clicked the heading!');
});
//browser will listen to the click event on the element
//function takes a agrument which is the event object
//e.target will give you the element and on that element you can perform numerous tasks like className o classList etc.

//Mouseover event
element.addEventListener('mouseover',function(e){

  console.log('You have touched the heading!');
});
