window.addEventListener('load', start);

var globalRed = 0;
var globalGreen = 0;
var globalBlue = 0;

function start() {
  console.log('Page ready.');
}

function redInput() {
  globalRed = document.querySelector('#range-red').value;

  document.querySelector('#text-red').value = globalRed;

  simulateColors();
}

function greenInput() {
  globalGreen = document.querySelector('#range-green').value;

  document.querySelector('#text-green').value = globalGreen;

  simulateColors();
}

function blueInput() {
  globalBlue = document.querySelector('#range-blue').value;

  document.querySelector('#text-blue').value = globalBlue;

  simulateColors();
}

function simulateColors() {
  simulator = document.querySelector('#simulator');

  simulator.style.backgroundColor =
    //prettier.ignore
    `rgb( ${this.globalRed}, ${this.globalGreen}, ${this.globalBlue} )`;
}
