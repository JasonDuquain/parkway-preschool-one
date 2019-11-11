/* zenscroll code */

!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():function n(){document&&document.body?t.zenscroll=e():setTimeout(n,9)}()}(this,function(){"use strict";var t=function(t){return t&&"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){n=n||999,o||0===o||(o=9);var i,r=function(t){i=t},u=function(){clearTimeout(i),r(0)},c=function(t){return Math.max(0,e.getTopOf(t)-o)},a=function(o,i,c){if(u(),0===i||i&&i<0||t(e.body))e.toY(o),c&&c();else{var a=e.getY(),f=Math.max(0,o)-a,s=(new Date).getTime();i=i||Math.min(Math.abs(f),n),function t(){r(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-s)/i),o=Math.max(0,Math.floor(a+f*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(o),n<1&&e.getHeight()+o<e.body.scrollHeight?t():(setTimeout(u,99),c&&c())},9))}()}},f=function(t,e,n){a(c(t),e,n)},s=function(t,n,i){var r=t.getBoundingClientRect().height,u=e.getTopOf(t)+r,s=e.getHeight(),l=e.getY(),d=l+s;c(t)<l||r+o>s?f(t,n,i):u+o>d?a(u-s+o,n,i):i&&i()},l=function(t,n,o,i){a(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(o||t.getBoundingClientRect().height/2)),n,i)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(o=e),{defaultDuration:n,edgeOffset:o}},to:f,toY:a,intoView:s,center:l,stop:u,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(t,o,i){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},o,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var r="history"in window&&"pushState"in history,u=r&&"scrollRestoration"in history;u&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){u&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=i.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=Math.max(0,i.getTopOf(e)-t),o=i.getY()-n;0<=o&&o<9&&window.scrollTo(0,n)}}},9)},!1);var c=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(u){var n=history.state&&"object"==typeof history.state?history.state:{};n.zenscrollY=i.getY();try{history.replaceState(n,"")}catch(t){}}var o=e.getAttribute("href")||"";if(0===o.indexOf("#")&&!c.test(e.className)){var a=0,f=document.getElementById(o.substring(1));if("#"!==o){if(!f)return;a=i.getTopOf(f)}t.preventDefault();var s=function(){window.location=o},l=i.setup().edgeOffset;l&&(a=Math.max(0,a-l),r&&(s=function(){history.pushState({},"",o)})),i.toY(a,null,s)}}},!1)}return i});



let docElement = document.documentElement;
let body = document.body;

/********  CODE FOR THE HOME PAGE  ********/
if (body.classList.contains('Home')) {
    
    if (!sessionStorage.getItem('animation')) {
        
        window.addEventListener('load', (e) => {

            TweenMax.set('.hero__heading', {visibility: 'visible'});
            TweenMax.set('.hero__subheading', {visibility: 'visible'});

            let tl = new TimelineMax();

            let perfect = new SplitText('.hero__wrap .hero__subheading', {type: 'chars, lines'})


            tl.from('.hero__wrap .hero__heading', 2.5, {
                scale: 5,
                opacity: 0,
                transformOrigin: '50% 50%',
                ease: Power2.easeOut
            })
            .staggerFrom(perfect.chars, .3, {
                y: 70,
                opacity: 0,
                rotation: -30,
                ease: Power4.easeOut,
                onComplete: function() {
                    sessionStorage.setItem('animation', 'complete');
                }
            }, .09, "-=1.8")

        });
        
    } else {
        TweenMax.set('.hero__heading', {visibility: 'visible'});
        TweenMax.set('.hero__subheading', {visibility: 'visible'});
    }
    

    let dates = document.querySelectorAll('.current-cal--item');
    
    window.addEventListener('scroll', (e) => {
        dates.forEach((el, idx) => {
            
            if (el.getBoundingClientRect().bottom <= (window.innerHeight + 50)) {
                el.classList.add('current-cal--item--visible');
            } 
            
        });
        
    });
    
    
}

/********  CODE FOR THE ABOUT US PAGE  ********/
if (body.classList.contains('TheAboutUs')) {
    
    let quote = document.querySelector('.aboutus__quote');
    
    window.addEventListener('scroll', (e) => {
        if (quote.getBoundingClientRect().bottom < window.innerHeight / 1.5) {
            quote.classList.add('visible');
        } 
    });

}

/********  CODE FOR THE PROGRAM PAGE  ********/
if (body.classList.contains('TheProgram')) {
    let tables = document.querySelectorAll('.program__table');
    
    window.addEventListener('scroll', (e) => {
        tables.forEach((el, idx) => {
            
            if (el.getBoundingClientRect().bottom <= (window.innerHeight + 50)) {
                el.classList.add('program__table--visible');
            } 
            
        });
        
    });
    
}

if (body.classList.contains('TheStaff')) {
    
    let staffUl = document.querySelector('.staff__teachers-list');
    let staffLinks = document.querySelectorAll('.staff__teachers-link');
    let staffDivs = document.querySelectorAll('.staff__teachers-listout');
    
    staffUl.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (e.target.classList.contains('staff__teachers-link') && !e.target.classList.contains('staff__teachers-link--current')) {
            
            staffLinks.forEach((el, idx) => {
                el.classList.remove('staff__teachers-link--current');
                staffDivs[idx].classList.remove('staff__teachers-listout--visible');
                e.target.classList.add('staff__teachers-link--current');
                
                if (e.target.getAttribute('href').slice(1) === staffDivs[idx].getAttribute('data-id')) {
                    
                    staffDivs[idx].classList.add('staff__teachers-listout--visible');
                }
            })
        }
    });
      
}

////////////////////////////////////////
/********* THESE ARE UNIVERAL **********/
////////////////////////////////////////

/***********  STICKY HEADER  ***********/

let header = document.querySelector('.header');
let hero = document.querySelector('.hero');
let headerHeight = header.getBoundingClientRect().height + 'px';


window.addEventListener('scroll', (e) => {
    
    if (hero.getBoundingClientRect().top < -1) {
        header.classList.add('sticky');
        docElement.style.paddingTop = headerHeight;
    } else {
        header.classList.remove('sticky')
        docElement.style.paddingTop = 0;
    }
    
});


/******* HIGHTLIGHT INDIVIDUAL PAGES ******/
let menuAnchs = document.querySelectorAll('.header__nav-link');

document.addEventListener('DOMContentLoaded', (e) => {
    menuAnchs.forEach((el) => {    
        if (body.className === el.getAttribute('data-title').replace(/\s/, "")) {
            el.classList.add('clicked');
            el.parentNode.classList.add('clicked-parent');
        }
    });
});


/********   BACK TO TOP BTN  *********/
let bttBtn = document.querySelector('.js-btt-btn');
let highestHeight = docElement.scrollHeight;

window.addEventListener('scroll', (e) => {
    (window.pageYOffset > (highestHeight / 8)) ? bttBtn.classList.add('active') : bttBtn.classList.remove('active');
});

/* REMOVING THIS SINCE THE BTN HAS A TARGET - THIS GOT IT SCROLLING ON MOBILE!!!
bttBtn.addEventListener('click', (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
});
*/

/****** Copyright year  ********/
let year = document.querySelector('.year');
year.textContent = new Date().getFullYear();



