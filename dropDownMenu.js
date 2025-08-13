const handlesHoveringOverMenu = function () {
    const menu = document.querySelectorAll(".menu > *");
    menu.forEach((child) => child.style.display = "block")
}

const menu = document.querySelector(".menu");
menu.addEventListener("mouseenter", handlesHoveringOverMenu)

const handlesLeavingMenu = function () {
    const menu = document.querySelectorAll(".menu > *");
    menu.forEach((child) => child.style.display = "none")
}

menu.addEventListener("mouseleave", handlesLeavingMenu)

const changeBackgroundToColor = function (e) {
    const body = document.querySelector("body")
    if(e.target.className === "red") {
        body.style.background = "red";
    } else if(e.target.className === "blue") {
        body.style.background = "blue";
    } else if (e.target.className === "green" ) {
        body.style.background = "green";
    }

}

menu.addEventListener("click", changeBackgroundToColor)