const featuredSlide = document.querySelector('.featured-slides');
const allSlides = document.querySelectorAll('.featured-slides img');

const leftBtn = document.querySelector('#galleryLeft');
const rightBtn = document.querySelector('#galleryRight');

let counter = 1;
const size = 1280;

featuredSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

rightBtn.addEventListener('click',()=>{
    if (counter >= allSlides.length - 1) return;
    featuredSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    featuredSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

leftBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    featuredSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    featuredSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

featuredSlide.addEventListener('transitionend', ()=>{
    if (allSlides[counter].id === 'lastClone'){
        featuredSlide.style.transition = "none";
        counter = allSlides.length -2;
        featuredSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (allSlides[counter].id === 'firstClone'){
        featuredSlide.style.transition = "none";
        counter = allSlides.length - counter;
        featuredSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

