

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

let sectHeight = document.querySelector('.sect-wrap').scrollHeight;


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


