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

// setInterval(() => slidershift(), 3000)

// document.querySelector('.go').onclick = slidershift