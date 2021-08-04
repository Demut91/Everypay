import "../styles/styles.scss";

const slider = document.querySelector('.slider-line');
let shift = 0;

function slidershift(){
    shift += 1440;
    if (shift > 4320) {
        shift = 0;
    }
    slider.style.left = -shift + 'px'
};


// setInterval(() => slidershift(), 5000)

// document.querySelector('.go').onclick = slidershift

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

// const slider = document.querySelector('.slider-line');