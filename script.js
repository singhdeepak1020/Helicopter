
var audioEl = document.getElementById('sound');

function playAudio() {
    audioEl.play();
}
function pauseAudio() {
    audioEl.pause();
    audioEl.currentTime = 0;
}

document.body.addEventListener('mouseenter', playAudio);
document.body.addEventListener('mouseleave', pauseAudio);