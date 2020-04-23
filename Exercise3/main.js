/*
QUESTION: add a event listener to heading element and whenever user clicks on the heading a div tag should be created and whenever user clicks on the div tag it should be editable and onve the user puts the content it should be stored in the localStorageand whenever we reload the page we should get the updated content
*/

//grabbing the heading element
let headingEle=document.querySelector('#heading');
//console.log(headingEle);

//adding a click event listener
headingEle.addEventListener('click',create_new);
//variable for new element
var newEle;

function create_new(e) {
  newEle=document.createElement('li');//creating new element
  newEle.setAttribute('id','newEle');//setting its attribute
  newEle.innerText='This is a newly created element';

  //grabbing the element under which we will put the new element
  let ul=document.querySelector('ul.list');
  //appending the element
  ul.appendChild(newEle);

  //adding event to newelement so that it turns into an editable element
  newEle.addEventListener('click',function(){
    let editableEle=document.createElement('input');//creating editable element
    editableEle.setAttribute('type','text');
    editableEle.setAttribute('id','editableEle');
    //console.log(editableEle);

    newEle.replaceWith(editableEle);//replacing the newElewith editableEle

    //adding the eventlistener so that when the user takes away the mouse the editableEle gets converted into a normal li element with new value
    editableEle.addEventListener('mouseleave',function(){
      let text=document.getElementById('editableEle').value;
      localStorage.setItem('val',text);//storing the value in localStorage
      editableEle.replaceWith(newEle);
      newEle.innerText=localStorage.getItem('val');
    })




  })
}
