
setInterval(setClock,1000)
const hourHand = document.querySelector("[data-hour-hand]");
const minHand = document.querySelector("[data-min-hand]");
const secHand = document.querySelector("[data-sec-hand]");


function setClock(){
    const currentDate = new Date() // get the date

    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();

    const secsec1 = (seconds - seconds % 10) / 10;
    const secsec2 = seconds % 10;
    const minmin1 = (minutes - minutes % 10) / 10;
    const minmin2 = minutes % 10;
    const hourhour1 = (hours - hours % 10) / 10;
    const hourhour2 = hours % 10;

    document.getElementById("heur1").innerHTML = hourhour1;
    document.getElementById("heur2").innerHTML = hourhour2;
    document.getElementById("min1").innerHTML = minmin1;
    document.getElementById("min2").innerHTML = minmin2;
    document.getElementById("sec1").innerHTML = secsec1;
    document.getElementById("sec2").innerHTML = secsec2;
    
    
    const secondRation = seconds / 60; // sec/60
    const minuteRation = (secondRation + minutes) / 60; // (sec+min)/60
    const hourRation = (minuteRation + hours) / 12;    // (sec+min+hour)/12

    setRotation(secHand, secondRation);
    setRotation(minHand, minuteRation);
    setRotation(hourHand, hourRation);
}


function setRotation(element, rotationRation) {
    element.style.setProperty('--rotation', rotationRation * 360)
}

function onCheck() {
    var checkBox = document.getElementById("myCheck");
    var digital = document.getElementById("watch");
    var analog = document.getElementById("sa3a");

    if (checkBox.checked == true){
        digital.style.display = "none";
        analog.style.display = "block";
    } else {
        digital.style.display = "block";
        analog.style.display = "none";
    }
  }

setClock()




