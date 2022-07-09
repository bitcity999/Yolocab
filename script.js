const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const backToTop = document.querySelector(".back-to-top")
const links = document.querySelectorAll(".nav-links li")
const main = document.querySelector("main")

window.onscroll = bTTBtnCheck();

// ................ Nav links Toggler ...............

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("toggle");
    navLinks.classList.toggle("open")
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})

// ............ Back To Top Button .............

function bTTBtnCheck() {
    if (window.pageYOffset > main.offsetTop) { 
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
}