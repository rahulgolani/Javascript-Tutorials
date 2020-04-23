//getting all the links from the web page which inlcudes python in them
let str='python';
let url='https://realpython.com/';
let links=document.links
console.log(links);

let link_array=Array.from(links);
link_array.forEach(function(i){
  if (i.href.includes('python')){
    console.log(i);
  }
})
//limiting the elements with innerHTML with python
