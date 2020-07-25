console.log("alarm");

setBtn = document.getElementById('set');
stopBtn = document.getElementById('stop');
setBtn.addEventListener('click', (e) => {
  e.preventDefault();
  time = document.getElementById('datetime').value;
  console.log(`setting alarm for ${time}`);
  alarmTime = new Date(time);
  nowTime = new Date();
  console.log(alarmTime);

  timeToAlarm = alarmTime - nowTime;
  console.log((timeToAlarm));
  if (timeToAlarm > 0) {
    setTimeout(() => {
      play();
    }, timeToAlarm)
  }
});

stopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  stop()
  // time = document.getElementById('datetime').value;
  console.log(time);
});


function play() {
  var audio = new Audio('sound.mp3');
  audio.play();
}