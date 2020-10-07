window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var appendSeconds = document.getElementById("seconds");
  var appendTens = document.getElementById("tens");
  var btnStart = document.getElementById("btnStart");
  var btnStop = document.getElementById("btnStop");
  var btnReset = document.getElementById("btnReset");
  var intervel;

  btnStart.onclick = function () {
    clearInterval(intervel);
    intervel = setInterval(startTimer, 10);
  };

  btnStop.onclick = function () {
    clearInterval(intervel);
  };

  btnReset.onclick = function () {
    clearInterval(intervel);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + "0";
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
