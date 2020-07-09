//Callback functions

console.log('Callback functions');

//Take a use case that we have a online class and we have to enroll students and take roll calls of the students

const students = [{
    name: 'Rahul',
    subject: 'Javascript'
  },
  {
    name: 'Ram',
    subject: 'Java'
  }
]

//Suppose that the output is coming from the server

// now we have to enroll the students and fetch the students

function enrollStudent(student, callback) {
  setTimeout(function() {
    students.push(student);
    callback(); //calling the callback function
    console.log('Student pushed');
  }, 3000)
}

function getStudent() {
  setTimeout(function() {
    let str = '';
    students.forEach(function(element) {
      str += `<li>${element.name}</li>`;
    });
    document.getElementById('students').innerHTML = str;
    console.log('Student fethced');
  }, 1000)
}

newStudent = {
  name: 'Mayank',
  subject: 'DSA'
}
// enrollStudent(newStudent);
// getStudent();

//now what is happening is since we have used setTimeout, the requests will continue to un in background and the requests will not be blocked. So student will be pushed after 3 seconds but the student is fetched after 1 second. So the new student enrolled will not be visible in the list.

//Callback function is nothing but a funtion inside a function, like we have forEach and setTimeout, for forEach is a synchronous and setTimeout is asynchronous.

// what we can do is we can call enrollStudent function and specify the getStudent function as Callback in it, mentioning that ki after you enroll the student please fetch the updated list of the students

enrollStudent(newStudent, getStudent);
// getStudent();//now instead of calling it separately we can specify this as a callback function

//so callback function will hold the function and prevent it to be called