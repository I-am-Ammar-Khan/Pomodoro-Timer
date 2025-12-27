const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
const min25 = document.getElementById("min25");
const min5 = document.getElementById("min5");
const min10 = document.getElementById("min10");
let timeLeft = 1500;
let interval;
let current_timer = 1500;

const updateTimer = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.innerHTML = `${minutes}:${seconds}`
    document.title = `${minutes}:${seconds} | Pomodoro Timer`;
}

const startTimer = () => {

    if (interval) return; // multiple start se bachane ke liye
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        // Tab Title


        if (timeLeft === 0) {
            clearInterval(interval);
            interval = null;
            // alert("Time's up!");
            let sound = new Audio("sounds/alarm.wav")
            sound.play()
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);

};
const stopTimer = () => {
    clearInterval(interval);
    interval = null
};
const resetTimer = () => {
    clearInterval(interval);
    interval = null
    timeLeft = current_timer;
    updateTimer();
};


function setMinutes(min) {
    clearInterval(interval);
    interval = null
    if (min === 'min25') {
        timeLeft = 1500;
        current_timer = 1500;
    } else if (min === 'min5') {
        timeLeft = 300;
        current_timer = 300;
    } else if (min === 'min10') {
        timeLeft = 600
        current_timer = 600;
    }
    updateTimer();
}

function getCheckedRadioValue(radioName) {
    // Select the first checked input with the given name
    const checkedInput = document.querySelector(`input[name="${radioName}"]:checked`);

    // Check if an element was found and return its value
    if (checkedInput) {
        return checkedInput.value;
    }

    // Return null or some other indicator if nothing is checked
    return null;
}

min25.addEventListener("click", () => setMinutes('min25'))
min5.addEventListener("click", () => setMinutes('min5'))
min10.addEventListener("click", () => setMinutes('min10'))
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
