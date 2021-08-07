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
buttonBurger.onclick = function () {
  nav.classList.toggle ('desktop-only');
};


forms ();
