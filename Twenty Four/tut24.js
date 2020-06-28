// Date in Time

let today = new Date(); //present date
console.log(today);

console.log(typeof today); //refernce data type
// otherDate = new Date('08-24-1996');
otherDate = new Date()
// format - mm-dd-yyyy
// format - August 24 1996
// format - 08/24/1996
// more info on mozilla date
console.log(otherDate);
console.log(otherDate.getDay());
// 0 for Sunday till 6 for Saturday

console.log(otherDate.getDate());
console.log(otherDate.getMinutes());
console.log(otherDate.getHours());
console.log(otherDate.getSeconds());
console.log(otherDate.getTime()); //returns the number of seconds from 1st Jan 1970(epoch)
console.log(otherDate.getMilliseconds());
console.log(otherDate.getMonth());
console.log(otherDate.getFullYear());
console.log(otherDate.getYear()); //number of years from 1900
otherDate.setDate(23);
console.log(otherDate);
otherDate.setMonth(0);
otherDate.setFullYear(1996);
otherDate.setHours(1);
otherDate.setMinutes(2);
otherDate.setSeconds(3);
console.log((otherDate));