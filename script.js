var hour = "00";
var minute = "00";
var seconds = "00";

// set element id of minute, hours & seconds

var appendHour = document.getElementById("hour");
var appendMinute = document.getElementById("minute");
var appendSeconds = document.getElementById("seconds");

// making id for buttom 

var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval; // to store timer values

// this function will run when click on start

function startTimer() {
  hour++;
  if (hour < 9) { appendHour.innerHTML = "0" + hour; }
  if (hour > 9) { appendHour.innerHTML = hour;  }
  if (hour > 99){ 
                 minute++;
                 appendMinute.innerHTML = "0" + minute;
                 hour = 0;
                 appendHour.innerHTML = "0" + 0;
                }
   if (minute > 9) { appendMinute.innerHTML = minute;     }
  if (minute > 60){ 
                 seconds++;
                 appendSeconds.innerHTML = "0" + seconds;
                 minute = 0;
                 appendMinute.innerHTML = "0" + 0;
                }
   if (seconds > 9) { appendSeconds.innerHTML = seconds;     }
}

buttonStart.onclick = function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  minute = "00";
  seconds = "00";
  hour = "00";
  appendHour.innerHTML = hour;
  appendMinute.innerHTML = minute;
  appendSeconds.innerHTML = seconds;
};