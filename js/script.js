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


/**********  TABS  **********/

let navlist = document.querySelector('.navlist');
let anchs = document.querySelectorAll('.navlist a');

let sects = document.querySelectorAll('.sect-wrap div');

let sectWrap = document.querySelector('.sect-wrap');
let sectHeight = sectWrap.scrollHeight;

console.log(sectHeight)

/*

navlist.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (e.target.tagName === 'A' && !e.target.classList.contains('active')) {

        sects.forEach((el, idx) => {
            
            el.classList.add('hidden');
            anchs[idx].classList.remove('active');
            el.style.height = 0;
            
            if (e.target.getAttribute('href').slice(1) === el.getAttribute('id')) {
                e.target.classList.add('active');
                el.classList.remove('hidden');
                el.style.height = sectHeight + 'px';
            }
            
            
        });
    }
});

*/

/**********  ACCORDION  **********/

let accordions = document.querySelectorAll('.accordion');

accordions.forEach((el, idx) => {
    el.addEventListener('click', function(e) {
        let content = this.nextElementSibling;
        
        if (content.style.maxHeight) {
            this.classList.remove('is-open');
            content.style.maxHeight = null;
        } else {
            for (let i = 0; i < accordions.length; i++) {
                accordions[i].nextElementSibling.style.maxHeight = null;
                accordions[i].classList.remove('is-open');
            }
            content.style.maxHeight = `${content.scrollHeight}px`;
            this.classList.add('is-open');
        }
    });
});





/****** Coryright year  ********/

let year = document.querySelector('.year');

console.log(year);

year.textContent = new Date().getFullYear();






