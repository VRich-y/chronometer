var sec=00
var min=00
var hr=00
var internal

function doubleDigits(digit){
    if(digit < 10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    timer()
    interval = setInterval(timer,1000)
}
function pause(){
    clearInterval(interval)
}
function stop(){
    clearInterval(interval)
    sec=00
    min=00
    document.getElementById('timer').innerText='00:00:00'
}
function timer(){
    sec=sec+1 //pode-se usar apenar sec++
    if(sec==60){
        min++
        sec=00
        if(min==60){
            hr++
            min=00
    }
    
    }
    document.getElementById('timer').innerText=doubleDigits(hr)+':'+doubleDigits(min)+':'+doubleDigits(sec)
}

