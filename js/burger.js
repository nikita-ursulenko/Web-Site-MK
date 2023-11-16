const burger = document.querySelector(".divBar") // кнопка

const up = document.querySelectorAll(".bar")

let peremen = 0;

//burger.addEventListener("click", testing())
burger.onclick = testing

function testing() {
    peremen++
    if (peremen %2 == 0) {
        up[0].style.top = "50%"
        up[0].style.transform = "rotateZ(45deg)"
        up[2].style.top = "50%"
        up[2].style.transform = "rotateZ(-45deg)"
        up[1].style.background = "rgba(0, 0, 0, 0)"
    } else {
        up[0].style.top = "0%"
        up[0].style.transform = "rotateZ(0deg)"
        up[2].style.top = "90%"
        up[2].style.transform = "rotateZ(0deg)"
        up[1].style.background = "rgba(0, 0, 0, 0.5)"
    }

}














