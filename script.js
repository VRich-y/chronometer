var sec = 0;
var min = 0;
var hr = 0;
var interval;
var isWorking = false;

function doubleDigits(digit) {
    if (digit < 10) {
        return '0' + digit;
    } else {
        return digit;
    }
}

function start() {
    if (!isWorking) {
        timer();
        interval = setInterval(timer, 1000);
    }
}

function pause() {
    clearInterval(interval);
    isWorking = false;
}

function stop() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0; 
    document.getElementById('timer').innerText = '00:00:00';
    isWorking = false;
}

function timer() {
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
        if (min == 60) {
            hr++;
            min = 0;
        }
    }
    document.getElementById('timer').innerText = doubleDigits(hr) + ':' + doubleDigits(min) + ':' + doubleDigits(sec);
    isWorking = true;
}