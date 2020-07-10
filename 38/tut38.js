setTimeout(() => {
  console.clear();
  console.log('Dictionary Exercise');
}, 3000);

getBtn = document.getElementById('getDefinition');
getBtn.addEventListener('click', getDefinitionUtil);

function getDefinitionUtil() {
  let word = document.getElementById('word').value;
  // var data = null;
  const xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;

  xhr.open('GET', `https://api.datamuse.com/words?ml=${word}`, true);

  // xhr.setRequestHeader("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");
  // xhr.setRequestHeader("x-rapidapi-key", "4c7434da11msh0683dffb4880db6p17f661jsndd975a1df2ca");


  // xhr.addEventListener("readystatechange", function() {
  //   if (this.readyState === this.DONE) {
  //     console.log(this.responseText);
  //   }
  // });
  xhr.onload = function() {
    if (this.status === 200) {
      let wordObj = JSON.parse(this.responseText);
      console.log(wordObj);
      let str = '';
      wordObj.forEach(function(element) {
        str += `<li>${element.word}</li>`
      });
      document.getElementById('definitions').innerHTML = str;
    } else {
      console.log('Some error occured');
    }
  }

  xhr.send();


}