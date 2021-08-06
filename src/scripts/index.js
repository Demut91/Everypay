import "../styles/styles.scss";
import forms from '../scripts/forms';
import slidershift from '../scripts/slider.js'


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


forms();


let buttonBurger = document.querySelector('.burger');
let nav = document.querySelector('.nav');

buttonBurger.onclick = function () {
    nav.classList.toggle('desktop-only');    
}

