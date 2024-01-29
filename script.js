document.addEventListener("DOMContentLoaded", function() {
    // Get the audio element by its ID
    var audio = document.getElementById("myAudio");

    // Add an event listener to play the audio when the page loads
    window.addEventListener("load", function() {
        audio.play();
    });
});

