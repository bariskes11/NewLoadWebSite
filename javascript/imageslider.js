let slideIndex = 0;
let timer = 0;
const imagecontainer = document.querySelector(".imageslider-container");
const slides = document.getElementsByClassName("slider-image");

showSlide(slideIndex);
startTimer();

function startTimer() {
    // clearInterval(timer);
    // timer = setInterval(function () {
        
    //     showSlide(1); // Change slide every 10 seconds        
    // }, 5000);

}

function showSlideFromClick(n) {
    clearInterval(timer); // Clear the existing timer
    showSlide(n);
    startTimer();
}

function showSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function switchSlide(n) {
    clearInterval(timer); // Clear the existing timer
    showSlides(slideIndex = n);
    startTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-image");
    let dots = document.getElementsByClassName("opacity-set");
    let captionText = document.getElementById("caption");
    if (n > slides.length - 1) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;

    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (imagecontainer == null) {
        console.log("Not at sliding page");
        return;
    }
    
    imagecontainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots[slideIndex].className += " active";
    captionText.innerHTML = dots[slideIndex].alt;
}

