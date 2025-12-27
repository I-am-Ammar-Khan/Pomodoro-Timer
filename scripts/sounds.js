let audio = new Audio(); // this ensures only one audio player which means no overlapping of audios
let current_audio = '';
let active_btn = null;

function playSound(url, id) {
    const btn = document.getElementById(id);

    // same button clicked again
    if (current_audio === url && !audio.paused) {
        audio.pause()
        active_btn.classList.remove("active");
        active_btn = null;
        return;
    }
    // DIFFERENT button clicked → reset old
    if (active_btn) { // Checking if any button was active if yes the remove "active" class
        active_btn.classList.remove("active");
    }

    // audio.pause()
    // audio.currentTime =0;
    audio.src = url; // set Audio object
    audio.loop = true; // loop 
    audio.play(); // Play the sound
    btn.classList.add("active"); // sets active btn
    active_btn = btn; // select the active btn
    current_audio = url; // set currently playing sounds
}