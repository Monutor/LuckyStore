$(document).ready(function(){

  $('.main__slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: ['<img src="images/main-slider-img/left-arrow.svg" alt="">','<img src="images/main-slider-img/circle-right.svg" alt="">'],
    autoplay: true,
  });
  
  $('.sellers-slider').owlCarousel({
    items: 4,
    autoWidth: true,
    margin: 20,
    nav: true,
    loop: true,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    autoplay: true,
  });

});