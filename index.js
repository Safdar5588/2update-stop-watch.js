




let startBtn = document.querySelector(".btnStart");
let resetBtn = document.querySelector(".btnReset");
let output = document.querySelector(".output");

let miliSecond = 0;
let second = 0;
let minute = 0;

let isRunning = false;


function display() {
    let min = minute < 10 ? "0"+ minute : minute
    let sec = second < 10 ? "0" + second :second
    let msec = miliSecond < 10 ? "0" + miliSecond :miliSecond
    output.innerHTML = min + ":" +sec+ ":" +msec;
}


function start() {
    miliSecond++;
    if (miliSecond == 10) {
        miliSecond = 0;
        second++;
        if (second == 60) {
            second = 0;
            minute++;
        }
    }
    display();
}
let timer; 
startBtn.addEventListener("click", function() {
    if (!isRunning) {
        timer = setInterval(start, 100);
        isRunning = true;
        startBtn.innerHTML = "Pause";
    } else {
        clearInterval(timer);
        isRunning = false;
        startBtn.innerHTML = "Resume";
    }
});


resetBtn.addEventListener("click", function() {
    miliSecond = 0;
    second = 0;
    minute = 0;
    display();
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startBtn.innerHTML = "Start";
    }
});
