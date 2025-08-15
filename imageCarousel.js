//handles logic taking first li and appending to end
function rotateCaroselLeft () {
    const watches = document.querySelector("#watches")
    const watchList = document.getElementsByTagName("li");
    watches.appendChild(watchList[0])
}

//handles logic taking first li and appending to end
function rotateCaroselRight () {
    const watches = document.querySelector("#watches")
    const watchList = document.getElementsByTagName("li");
    watches.prepend(watchList[4])
    

}






function caroselControls () {
    //rotates carosel at intervals of 5 seconds
    const caroselTimer = setInterval(rotateCaroselLeft,5000)

    const previous = document.querySelector(".previous");
    previous.addEventListener("click", rotateCaroselLeft);

    const nextSlide = document.querySelector(".next");
    nextSlide.addEventListener("click", rotateCaroselRight);
}


caroselControls();