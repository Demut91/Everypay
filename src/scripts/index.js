import '../styles/styles.scss';
import forms from '../scripts/forms';
import {slidershift, sliderback} from '../scripts/slider.js';


const anchors = document.querySelectorAll ('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener ('click', function (e) {
    e.preventDefault ();
    const blockID = anchor.getAttribute ('href').substr (1);
    document.getElementById (blockID).scrollIntoView ({
      behavior: 'smooth',
      block: 'start',
    });
  });
}


document.querySelector('.slider-next').onclick = slidershift
document.querySelector('.slider-prev').onclick = sliderback



let buttonBurger = document.querySelector ('.burger');
let nav = document.querySelector ('.nav');
let burgeritem1 = document.querySelector ('.burger__item-first');
let burgeritem2 = document.querySelector ('.burger__item-second');
buttonBurger.onclick = function () {
  nav.classList.toggle ('animation');
  burgeritem1.classList.toggle('burger-rotate1')
  burgeritem2.classList.toggle('burger-rotate2')
};


forms ();
