//* /////////////////////////////////////////////////////////
//* DOM Variables
const btnHex = document.querySelector('#hex');
const btnRgb = document.querySelector('#rgb');

//* /////////////////////////////////////////////////////////
//* Event Listener
console.log(randomColor());
console.log(randomColor('hex'));
console.log(randomColor('rgb'));

//* /////////////////////////////////////////////////////////
//* Functions
function randomHexa() {
  return Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function random8BitDecimal() {
  return Math.floor(Math.random() * 256);
}

function randomColor(type = 'hex') {
  let color = '';
  if (type === 'hex') {
    color = '#';
    for (let i = 0; i < 3; i++) {
      color += randomHexa();
    }
  }

  if (type === 'rgb') {
    color = `rgb(${random8BitDecimal()}, ${random8BitDecimal()}, ${random8BitDecimal()})`;
  }

  return color;
}
