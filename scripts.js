setInterval(setClock,1000)
const hourHand = document.querySelector("[data-hour-hand]");
const minHand  = document.querySelector("[data-min-hand]");
const secHand  = document.querySelector("[data-sec-hand]");

var welcome = document.getElementById('welcome');
var digital = document.getElementById("watch");
var analog  = document.getElementById("sa3a");
var stopwatch   = document.getElementById("stopwatch");
var alarm   = document.getElementById("alarm");

var checkBoxDigital = document.getElementById("checkDigital");
var checkBoxAnalog  = document.getElementById("checkAnalog");
var checkBoxstopwatch   = document.getElementById("checkstopwatch");
var checkBoxAlarm   = document.getElementById("checkAlarm");

function setClock(){
    const currentDate = new Date() // get the date

    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours   = currentDate.getHours();

    const secsec1   = (seconds - seconds % 10) / 10;
    const secsec2   = seconds % 10;
    const minmin1   = (minutes - minutes % 10) / 10;
    const minmin2   = minutes % 10;
    const hourhour1 = (hours - hours % 10) / 10;
    const hourhour2 = hours % 10;

    document.getElementById("heur1").innerHTML = hourhour1;
    document.getElementById("heur2").innerHTML = hourhour2;
    document.getElementById("min1").innerHTML  = minmin1;
    document.getElementById("min2").innerHTML  = minmin2;
    document.getElementById("sec1").innerHTML  = secsec1;
    document.getElementById("sec2").innerHTML  = secsec2;
    
    
    const secondRation = seconds / 60; // sec/60
    const minuteRation = (secondRation + minutes) / 60; // (sec+min)/60
    const hourRation   = (minuteRation + hours) / 12;    // (sec+min+hour)/12

    setRotation(secHand, secondRation);
    setRotation(minHand, minuteRation);
    setRotation(hourHand, hourRation);
}


function setRotation(element, rotationRation) {
    element.style.setProperty('--rotation', rotationRation * 360)
}

var seconds = 00; 
var tens = 00; 
var minutes = 00;

var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");

var startPause = document.getElementById("start");
var ol = document.getElementById("laps")

function onStart()
{
    if (startPause.innerHTML == "Start" || startPause.innerHTML == "Resume") 
    {
        Interval = setInterval(startstopwatch);   
        startPause.innerHTML = "Pause"

    }
    else
    {
        clearInterval(Interval);
        startPause.innerHTML = "Resume"

    }

}
function onLap()
{
    if (startPause.innerHTML != "Start")
    {
        var newLI = document.createElement('li');
        ol.appendChild(newLI).innerHTML = appendMinutes.innerHTML + ":" + appendSeconds.innerHTML + ":" + appendTens.innerHTML;
    }
}

function onReset()
{
        clearInterval(Interval);
        tens = 00;
        seconds = 00;
        minutes = 00;
        appendMinutes.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendTens.innerHTML = "00";
        startPause.innerHTML = "Start"

        ol.textContent = "";
}


  function startstopwatch () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59 )
    {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;

    }
    if (minutes > 9 )
    {
        appendMinutes.innerHTML = minutes;
    }
  }

function  onCheckDigital()
{

    if (checkBoxDigital.checked == true){
        digital.style.display = "block";
        analog.style.display = "none";
        stopwatch.style.display = "none";
        alarm.style.display = "none";
        welcome.style.display = "none";

        checkBoxAlarm.checked = false;
        checkBoxAnalog.checked = false;
        checkBoxstopwatch.checked = false;

    } else {
        digital.style.display = "none";
        welcome.style.display = "block";
    }
    
}

function  onCheckAnalog()
{
    if (checkBoxAnalog.checked == true){
        analog.style.display = "block";
        digital.style.display = "none";
        stopwatch.style.display = "none";
        alarm.style.display = "none";
        welcome.style.display = "none";

        checkBoxAlarm.checked = false;
        checkBoxDigital.checked = false;
        checkBoxstopwatch.checked = false;

    } else {
        analog.style.display = "none";
        welcome.style.display = "block";
    }
    
}

function  onCheckstopwatch()
{
    if (checkBoxstopwatch.checked == true){
        stopwatch.style.display = "block";
        analog.style.display = "none";
        digital.style.display = "none";
        alarm.style.display = "none";
        welcome.style.display = "none";

        checkBoxAlarm.checked = false;
        checkBoxAnalog.checked = false;
        checkBoxDigital.checked = false;
    } 
    else 
    {
        stopwatch.style.display = "none";
        welcome.style.display = "block";
    }
    
}

function  onCheckAlarm()
{
    if (checkBoxAlarm.checked == true){
        alarm.style.display = "block";
        analog.style.display = "none";
        digital.style.display = "none";
        stopwatch.style.display = "none";
        welcome.style.display = "none";

        checkBoxDigital.checked = false;
        checkBoxAnalog.checked = false;
        checkBoxstopwatch.checked = false;

    } else {
        alarm.style.display = "none";
        welcome.style.display = "block";
    }
    
}








setClock()




