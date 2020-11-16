//initial values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Display values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Initial timer state
let interval = null;
let isStarted = false;

function start(){

    //Increment seconds
    seconds++;

    //Increment minutes
    if (seconds/60 === 1) {
        seconds = 0;
        minutes++;
    }

    //Increment hours
    if (minutes/60 === 1) {
        console.log({minutes})
        minutes = 0;
        hours++;
    }

    (seconds < 10 ) ? displaySeconds = "0" + seconds.toString() : displaySeconds = seconds ;
    (minutes < 10 ) ? displayMinutes = "0" + minutes.toString() : displayMinutes = minutes ;
    (hours < 10 ) ? displayHours = "0" + hours.toString() : displayHours = hours;
    document.getElementById("timeDisplay").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


window.startStop = function() {
    if(!isStarted) {
        interval = window.setInterval(start, 0.5)
        document.getElementById("startTimer").innerHTML = "Pause";
        isStarted = true;
    } else {
        window.clearInterval(interval);
        document.getElementById("startTimer").innerHTML = "Start"
        isStarted = false;
    }
    document.getElementById("lap").hidden = false;
}

//Reset timer to 00:00:00
function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("timeDisplay").innerHTML = "00:00:00";
    document.getElementById("startTimer").innerHTML = "Start";
    document.getElementById("lap").hidden = true;
    
}

