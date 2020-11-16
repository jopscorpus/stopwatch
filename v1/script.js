let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = "stopped";



function start(){
    console.log("say your prayer little one");

    //Increment seconds
    seconds++;

    //Increment minutes
    if (seconds/60 === 1) {
        seconds = 0;
        minutes++;
        
        //Increment hours
        if (minutes/60 === 1) {
            console.log("don't forget my son, to include everyone")
            mintues = 0;
            hours++;
        }
    }

    //If seconds display
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    document.getElementById("timeDisplay").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

function reset(){
    console.log('Stop');
}

function startStop() {
    if(status === "stopped") {
        interval = window.setInterval(start, 1000)
        document.getElementById("startTimer").innerHTML = "Pause";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("startTimer").innerHTML = "Start"
        status = "stopped";
    }
}

function reset() {
    seconds = 0;
    minutes = 0;
    hours = 0;

    displaySeconds = 0;
    displayMinutes = 0;
    displayHours = 0;

    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    document.getElementById("startTimer").innerHTML = "Start"
    document.getElementById("timeDisplay").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    
}