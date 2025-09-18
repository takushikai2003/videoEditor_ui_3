const preview_canvas = document.getElementById("preview_canvas");

preview_canvas.width = 640;
preview_canvas.height = 480;

const play_icon = document.getElementById("play_icon");
const pause_icon = document.getElementById("pause_icon");

play_icon.addEventListener("click",()=>{
    play_icon.hidden = true;
    pause_icon.hidden = false;
});

pause_icon.addEventListener("click",()=>{
    play_icon.hidden = false;
    pause_icon.hidden = true;
})