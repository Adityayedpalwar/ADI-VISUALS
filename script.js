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

    let allVideos = document.querySelectorAll(".card video");

    allVideos.forEach(video => {

        if(video !== clickedVideo){
            video.pause();
            video.muted = true;
            video.controls = false;
        }
    });

    // If clicked video is paused → play it
    if(clickedVideo.paused){
        clickedVideo.muted = false;
        clickedVideo.controls = true;
        clickedVideo.play();
    } 
    else {
        clickedVideo.pause();
    }
}
