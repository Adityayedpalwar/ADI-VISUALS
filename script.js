function filterSelection(category){
    let items = document.querySelectorAll(".card");

    items.forEach(item=>{
        if(category==="all" || item.classList.contains(category)){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    });
}
function toggleSound(clickedVideo){

    let allVideos = document.querySelectorAll("video");

    // Pause all background videos
    allVideos.forEach(video => {
        video.pause();
        video.muted = true;
    });

    // Create overlay
    let overlay = document.createElement("div");
    overlay.classList.add("video-overlay");
    document.body.appendChild(overlay);

    // Clone video
    let zoomVideo = clickedVideo.cloneNode(true);
    zoomVideo.classList.add("video-zoom");
    zoomVideo.muted = false;
    zoomVideo.controls = true;

    document.body.appendChild(zoomVideo);

    zoomVideo.play();

    // Animate zoom
    setTimeout(() => {
        zoomVideo.classList.add("video-zoom-active");
    }, 50);

    // 🔥 CLOSE FUNCTION
    function closeVideo(){
        zoomVideo.pause();

        // Exit fullscreen if active
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }

        zoomVideo.remove();
        overlay.remove();

        // Remove listeners
        document.removeEventListener("keydown", escHandler);
    }

    // ESC key support
    function escHandler(e){
        if(e.key === "Escape"){
            closeVideo();
        }
    }

    document.addEventListener("keydown", escHandler);

    // Click anywhere to close
    overlay.onclick = closeVideo;
}