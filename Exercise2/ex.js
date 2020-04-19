url='https://codewithharry.com/';
location.href=url;
link=document.links
script=document.scripts

link_Array=Array.from(link)
link_Array.forEach(function(element){
  console.log(element.href);
})

script_Array=Array.from(script)
script_Array.forEach(function(element){
  console.log(element.href);
})
