var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// ablities progress bar: on scroll
window.onscroll = function() {scrollFunction(), myScroll()};
var counter=0;
function myScroll(){
  if(counter==0){
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650){
      myFunction();
      counter++;
    }
  }
}

// ablities progress bar
function move(num, percentage) {
  var elem = document.getElementsByClassName('containerin');
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= percentage) {
      clearInterval(id);
    } else {
      width++;
      elem[num].style.width = width + '%'; //to do: not staggered
    }
  }
}

// ablities progress bar: call for every bar
function myFunction() {
      move(0,90);
      move(1,95);
      move(2,80);
      move(3,85);
      move(4,70);
      move(5,85);
      move(6,90);
      move(7,70);
}



// to top buttons

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
