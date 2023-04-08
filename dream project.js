var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 2000); 
}

function plusSlides(n) {
  slidePosition += n;
  var slides = document.getElementsByClassName("Containers");
  if (slidePosition > slides.length) {slidePosition = 1}
  if (slidePosition < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePosition-1].style.display = "block";
}

function currentSlide(n) {
  slidePosition = n;
  var slides = document.getElementsByClassName("Containers");
  if (slidePosition > slides.length) {slidePosition = 1}
  if (slidePosition < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePosition-1].style.display = "block";
}
