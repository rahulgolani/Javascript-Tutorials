console.log('Error Handling');

//if we want to throw a custom error

//assume this is a wrong response from the server
var name = undefined;
if (name != undefined) {
  throw new Error('incorrect response'); //custom error
} else {
  console.log("response");
}

//error Handling
//used to ensure that the code does not stop working because of one error
try {
  //it is like try to do something
  //fsgfg; //invalid syntax will thow an error
  // console.log('rahul'); // if error free code is written, it will execute
  functionrahul();
} catch (e) {
  console.log('are you okay?'); //will handle the error and instead of the error, this message will be printed
  //console.log(e); //printing error
  console.log(e.name); //name of error
  console.log(e.message); //message of error
} finally {
  //whether try executes successfully or error comes, finally always executes
  console.log("finally will execute at all cost");
}

// Types of error in try catch block:
// EvalError : error in eval() function
// RangeError: a number "out of range occurred"
// Reference Error
// TypeError
// SyntaxError
// URIError

// InternalError 
// Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
// RangeError
// Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
// ReferenceError
// Creates an instance representing an error that occurs when de-referencing an invalid reference.
// SyntaxError
// Creates an instance representing a syntax error.
// TypeError
// Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
// URIError
// Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.