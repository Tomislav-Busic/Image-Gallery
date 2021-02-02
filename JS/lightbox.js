function init(){
    window.console.log("Welcome, user with a new browser!");
    var lightBoxElement = "<div id='lightbox'>";
    lightBoxElement += "<div id='overlay' class='hidden'></div>";
    lightBoxElement += "<img class='hidden' id='big-image'>";
    lightBoxElement += "</div>";
    document.querySelector("body").innerHTML += lightBoxElement;
    //vraćanje iz velike slike u malu
    var bigImage = document.querySelector("#big-image");
    bigImage.addEventListener("click", toggle, false);
    prepareThumbs();
}

function toggle(event){
    var clickedImage = event.target;
    var bigImage = document.querySelector("#big-image");
    var overlay = document.querySelector("#overlay");
    bigImage.src = clickedImage.src;
    if(overlay.getAttribute("class") === "hidden"){
        overlay.setAttribute("class", "showing");
        bigImage.setAttribute("class", "showing");
    } else{
        overlay.setAttribute("class", "hidden");
        bigImage.setAttribute("class", "hidden");
    }
}

function prepareThumbs(){
    var liElements = document.querySelectorAll("ul#images li");
    var i = 0;
    var image, li;
    while(i < liElements.length){
        li = liElements[i];
        li.setAttribute("class", "lightbox");
        image = li.querySelector("img");
        image.addEventListener("click", toggle, false);
        i += 1;
    }
}
document.addEventListener("DOMContentLoaded", init, false);