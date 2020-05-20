window.addEventListener('load', start);

function start() {
  console.log('Page ready.');
}

function redInput() {
  rangeRed = document.querySelector('#range-red').value;

  document.querySelector('#text-red').value = rangeRed;

  simulateColors();
}

function greenInput() {
  rangeGreen = document.querySelector('#range-green').value;

  document.querySelector('#text-green').value = rangeGreen;

  simulateColors();
}

function blueInput() {
  rangeBlue = document.querySelector('#range-blue').value;

  document.querySelector('#text-blue').value = rangeBlue;

  simulateColors();
}

function simulateColors() {
  simulator = document.querySelector('#simulator');

  simulator.style.backgroundColor =
    'rgb(' + this.rangeRed + ',' + this.rangeGreen + ',' + this.rangeBlue + ')';
}
