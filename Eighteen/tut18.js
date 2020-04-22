/*MORE ON EVENTS*/

//here in the html page we have used a form in which there is a button. when we click the button we are redirected to youtube.com as defined in the form action so we have to bypass the default behaviour using Javascript

let btn=document.getElementById('btn');//grabbing the element
console.log(btn);

btn.addEventListener('click',func1);//adding a event listener

function func1(e) {
  e.preventDefault();//to bypass the default beaviour
  console.log('Thanks');
  console.log(e);
}

//double click event

btn.addEventListener('dblclick',func2);

function func2(e) {
  console.log('Thanks its a double click');
}

//mousedown and mouseup event

btn.addEventListener('mousedown',func3);
btn.addEventListener('mouseup',func4);

function func3(e) {
  e.preventDefault();
  console.log('Thanks its a mousedown');

}

function func4(e) {
  e.preventDefault();
  console.log('Thanks its a mouseup');

}

//mouseenter and mouseleave event

let li=document.querySelector('#l');
console.log(li);

li.addEventListener('mouseenter',func5);
li.addEventListener('mouseleave',func6);

function func5(e) {
  console.log('Thanks its a mouse enter');
}

function func6(e) {
  console.log('Thanks its a mouse leave');
}

//mousemove event

document.querySelector('.container').addEventListener('mousemove',func7);

function func7(e) {
  console.log(e.offsetX,e.offsetY);
  console.log('You moved your mouse');
  document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${14})`;//here as the mouse moves the backgroundColor will change
}//rgb values are from 0-255
