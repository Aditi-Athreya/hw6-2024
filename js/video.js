var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener('DOMContentLoaded', function () {
    var video;

    
    video = document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;

    
    window.addEventListener("load", function() {
        console.log("Good job opening the window");
    });

    
    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
    });

    // JavaScript for displaying play button
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', function () {
        video.play();
        updateVolumeInfo();
    });

    // JavaScript for displaying pause button
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', function () {
        video.pause();
    });

    // JavaScript for displaying slow down button
    const slowerButton = document.getElementById('slower');
    slowerButton.addEventListener('click', function () {
        video.playbackRate -= 0.1;
        console.log('New playback speed:', video.playbackRate);
        updateVolumeInfo();
    });

    // JavaScript to speed up 
    const fasterButton = document.getElementById('faster');
    fasterButton.addEventListener('click', function () {
        video.playbackRate += 0.1;
        console.log('New playback speed:', video.playbackRate);
        updateVolumeInfo();
    });

    // JavaScript for Skip Ahead
    const skipButton = document.getElementById('skip');
    skipButton.addEventListener('click', function () {
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log('Current video location:', video.currentTime);
    });

    // JavaScript for Mute Button
    const muteButton = document.getElementById('mute');
    muteButton.addEventListener('click', function () {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    // JavaScript for volume slider
    const volumeSlider = document.getElementById('slider');
    volumeSlider.addEventListener('input', function () {
        video.volume = volumeSlider.value / 100;
        updateVolumeInfo();
    });

    // JavaScript for volume is
    function updateVolumeInfo() {
        const volumeInfo = document.getElementById('volume');
        volumeInfo.textContent = Math.round(video.volume * 100) + '%';
    }


    const vintageButton = document.getElementById('vintage');
    vintageButton.addEventListener('click', function () {
        video.classList.add('oldSchool');
    });


    const originalButton = document.getElementById('orig');
    originalButton.addEventListener('click', function () {
        video.classList.remove('oldSchool');
    });
});


