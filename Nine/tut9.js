/*LOOPS*/
/* loops->
1) for
2) while
3) do while
*/

//a=12;
//increment operators
//a+=1;
//a++;
//++a;
//console.log(a);

/*
for (let i=0; i<100;i++){
  console.log(i);
}
*/

/*
Entry controlled loop
j=0;
while (j<100){
  console.log(j);
  j++;
}
*/

//exit controlled loop
/*
k=11
do{
console.log(k);
k+=1;

}while(k<10)
*/

//break and continue

/*
for (let i=0; i<10;i++){
  if (i==5){
    break;
  }
  console.log(i);
}

console.log();

for (let i=0; i<10;i++){
  if (i==5){
    continue;//skip an iteration
  }
  console.log(i);
}

*/

//iterators
let arr=[1,2,3,4,5];
//for each loop
//can use any of the arguments
arr.forEach(function(element,index,array){
  console.log(element,index,array);
})

let obj={
  name:'Rahul',
  age:23,
  os:'windows'
}

//iterator for objects
for (let key in obj){
  console.log(`The ${key} of obj is ${obj[key]}`);
}
