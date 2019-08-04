let tl = new TimelineMax({repeat: 1, yoyo: true, repeatDelay: 2});


let perfect = new SplitText('.hero__wrap .hero__subheading', {type: 'chars, lines'})



tl.from('.hero__wrap .btn', 2.4, {
    y: 500,
    opacity: 0,
    ease: Power2.easeOut
})
.from('.hero__wrap .hero__heading', 2.5, {
    x: -600,
    opacity: 0,
    ease: Power2.easeOut
}, "-=2")
.staggerFrom(perfect.chars, .7, {
    y: 70,
    opacity: 0,
    rotation: -30,
    ease: Power4.easeInOut
}, .1, "-=2.3")




/***********  TESTIMONIAL SLIDER  ***********/

$(document).ready(function(){
  $('.hero').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
  });
});




/****** Coryright year  ********/

let year = document.querySelector('.year');
year.textContent = new Date().getFullYear();






