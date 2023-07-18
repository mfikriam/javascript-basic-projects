'use strict';

//************** SELECTING ELEMENTS **************/
const btnEl = document.querySelector('.btn');
const colorEl = document.querySelector('.color');
const mainEl = document.querySelector('.main');
const hexEl = document.querySelector('.hex');
const rgbEl = document.querySelector('.rgb');

//************** STARTING CONDITIONS **************/
let colorType = 'hex';

//************** FUNCTIONS **************/
const randomHexaColor = function () {
  function randomHexa() {
    return Math.trunc(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
  }

  return '#' + randomHexa() + randomHexa() + randomHexa();
};

const randomRgbColor = function () {
  function random8BitDecimal() {
    return Math.trunc(Math.random() * 256);
  }

  return `rgb(${random8BitDecimal()}, ${random8BitDecimal()}, ${random8BitDecimal()})`;
};

const hexToRgb = function (hexColor) {
  //? Remove the '#' symbol from the hex color string
  const hex = hexColor.replace('#', '');

  //? Parse the hex values for red, green, and blue components
  const red = parseInt(hex.substr(0, 2), 16);
  const green = parseInt(hex.substr(2, 2), 16);
  const blue = parseInt(hex.substr(4, 2), 16);

  //? Return the RGB values
  return `rgb(${red}, ${green}, ${blue})`;
};

const rgbToHex = function (rgbColor) {
  //? Extract the individual RGB values
  const regex = /(\d+),\s*(\d+),\s*(\d+)/;
  const matches = rgbColor.match(regex);
  const red = parseInt(matches[1]);
  const green = parseInt(matches[2]);
  const blue = parseInt(matches[3]);

  //? Convert the RGB values to hex format
  const hexRed = red.toString(16).padStart(2, '0');
  const hexGreen = green.toString(16).padStart(2, '0');
  const hexBlue = blue.toString(16).padStart(2, '0');

  //? Return the hex color
  return '#' + hexRed + hexGreen + hexBlue;
};

//************** RGB & HEX NAVBAR FUNCTIONALITY **************/
hexEl.addEventListener('click', () => {
  //? Convert color to hex
  if (colorType === 'rgb') {
    const rgbColor = colorEl.textContent;
    colorEl.textContent = rgbToHex(rgbColor);
  }

  colorType = 'hex';
  hexEl.classList.add('active');
  rgbEl.classList.remove('active');
});

rgbEl.addEventListener('click', () => {
  //? Convert color to rgb
  if (colorType === 'hex') {
    const hexColor = colorEl.textContent;
    colorEl.textContent = hexToRgb(hexColor);
  }

  colorType = 'rgb';
  rgbEl.classList.add('active');
  hexEl.classList.remove('active');
});

//************** CLICK ME BUTTON FUNCTIONALITY **************/
btnEl.addEventListener('click', () => {
  const color = colorType === 'hex' ? randomHexaColor() : randomRgbColor();
  colorEl.textContent = color;
  mainEl.style.backgroundColor = color;
});
