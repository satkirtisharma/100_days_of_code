document.addEventListener("DOMContentLoaded", () => {
    let openBtn = document.getElementById("openBtn");
    let closeBtn = document.getElementById("closeBtn");
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    let stream;

    openBtn.addEventListener("click", () => {
        // Accessing the user camera and video.
        mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((streamObj) => {
                stream = streamObj;
                // Changing the source of video to current stream.
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
                // Show close button and hide open button
                openBtn.style.display = "none";
                closeBtn.style.display = "block";
            })
            .catch(alert);
    });

    closeBtn.addEventListener("click", () => {
        if (stream) {
            // Stop the stream and close the webcam
            stream.getTracks().forEach(track => track.stop());
            video.srcObject = null;
            // Show open button and hide close button
            openBtn.style.display = "block";
            closeBtn.style.display = "none";
        }
    });
});
