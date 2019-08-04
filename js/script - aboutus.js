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



