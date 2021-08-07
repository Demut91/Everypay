const slider = document.querySelector ('.slider-line');
let shift = 0;

function slidershift () {
  shift += 1440;
  if (shift > 4320) {
    shift = 0;
  }
  slider.style.right = shift + 'px';
}

function sliderback () {
  shift = shift - 1440;
  if (shift < 0) {
    shift = 4320;
  }
  slider.style.right = shift + 'px';
}

export {slidershift, sliderback};
