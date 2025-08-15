//handles logic taking first li and appending to end
function rotateCarosel () {
    const watches = document.querySelector("#watches")
    const watchList = document.getElementsByTagName("li");
    watches.appendChild(watchList[0])
}

//rotates carosel at intervals of 5 seconds
//const interValID = setInterval(rotateCarosel,5000)




