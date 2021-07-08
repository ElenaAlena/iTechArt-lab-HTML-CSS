let slideIndex = 1;

document.querySelector('.carousel-control_prev').addEventListener('click', ()=>showSlides(-1));
document.querySelector('.carousel-control_next').addEventListener('click', ()=>showSlides(1));

function showSlides(n) {
    slideIndex+= n;
    
const slides = document.getElementsByClassName("carousel-item");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    const currentSlide = document.getElementsByClassName("carousel-item active");
    if(currentSlide.length){
        currentSlide[0].classList.remove("active");
    }
    slides[slideIndex-1].classList.add("active");
  }

