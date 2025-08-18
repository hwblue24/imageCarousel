let offSetCount = 0;

//handles logic taking first li and appending to end
function rotateCaroselLeft () {
    const watches = document.querySelector("#watches")
    const watchList = document.getElementsByClassName("watchList");
    watches.appendChild(watchList[0])
    offSetCount-=1;
    console.log(offSetCount);
    if(offSetCount<-4) {
        offSetCount = 0;
    }
    
}

//handles logic taking  last li and moves to front
function rotateCaroselRight () {
    const watches = document.querySelector("#watches")
    const watchList = document.getElementsByClassName("watchList");
    watches.prepend(watchList[4])
    offSetCount+=1; 
    console.log(offSetCount)
    if(offSetCount>4) {
        offSetCount = 0;
    }
}


function caroselControls () {
    //rotates carosel at intervals of 5 seconds
    const caroselTimer = setInterval(rotateCaroselRight,5000)
    
    //controls previous arrow 
    const previous = document.querySelector(".previous");
    previous.addEventListener("click", rotateCaroselLeft);
    
    //controls next arrow
    const nextSlide = document.querySelector(".next");
    nextSlide.addEventListener("click", rotateCaroselRight);
}

//parent ul resets to initial position
function navDefaultPosition () {
    const snapShotOffSet = offSetCount;
        if(snapShotOffSet>0){
            for (let i = 0; i<snapShotOffSet; i++) {
                rotateCaroselLeft();
            }
        }else if(snapShotOffSet<0)  {
            for ( let i = snapShotOffSet; i<0; i++) {
                rotateCaroselRight();
            }
        }
        
}

function offSetPositions (e) {
    navDefaultPosition();
    console.log(offSetCount)
    if (e.target.classList.contains("dot2")) {
        rotateCaroselRight();
    } else if (e.target.classList.contains("dot3")) {
        for (let i = 0; i < 2; i++) {
            rotateCaroselRight();
        }
    } else if (e.target.classList.contains("dot4")) {
        rotateCaroselLeft();
    } else if (e.target.classList.contains("dot5")) {
        for (let i = 0; i < 2; i++) {
            rotateCaroselLeft();
        }
    }
        
}

const navButtons = document.querySelector("#navButtons")
navButtons.addEventListener("click", navDefaultPosition)
navButtons.addEventListener("click", offSetPositions)
//caroselControls();