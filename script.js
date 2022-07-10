const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const backToTop = document.querySelector(".back-to-top")
const links = document.querySelectorAll(".nav-links li")
const main = document.querySelector("main")

var slideIndexO = 1
var slideIndexT = 1

showSlideO(slideIndexO)
showSlideT(slideIndexT)

window.onscroll = bTTBtnCheck();

// ................ Nav links Toggler ...............

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("toggle");
    navLinks.classList.toggle("open")
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})

// ............ Carousel-1 .............

function plusSlideO(n) {
  showSlideO(slideIndexO += n)
}

function showSlideO(n) {
  var i
  const slides = document.getElementsByClassName("slideO")
  if (n > slides.length) { slideIndexO = 1 }
  if (n < 1) { slideIndexO = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[slideIndexO - 1].style.display = "flex"
}

// ............ Carousel-2 .............

function plusSlideT(n) {
  showSlideT(slideIndexT += n)
}

function showSlideT(n) {
  var i
  const slides = document.getElementsByClassName("slideT")
  if (n > slides.length) { slideIndexT = 1 }
  if (n < 1) { slideIndexT = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[slideIndexT - 1].style.display = "flex"
}


// ............ Back To Top Button .............

function bTTBtnCheck() {
    if (window.pageYOffset > main.offsetTop) { 
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
}