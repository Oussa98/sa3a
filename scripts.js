
setInterval(setClock,1000)
const hourHand = document.querySelector("[data-hour-hand]");
const minHand = document.querySelector("[data-min-hand]");
const secHand = document.querySelector("[data-sec-hand]");


function setClock(){
    const currentDate = new Date() // get the date
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();


    
    
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

setClock()




