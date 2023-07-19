'use strict';

//************** SELECTING ELEMENTS **************/
const valueEl = document.querySelector('.value');
const buttonsEl = document.querySelectorAll('.btn');

//************** STARTING CONDITIONS **************/
let count = 0;

//************** BUTTONS FUNCTIONALITY **************/
buttonsEl.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      valueEl.style.color = 'green';
    }

    if (count < 0) {
      valueEl.style.color = 'red';
    }

    if (count === 0) {
      valueEl.style.color = '#222';
    }

    valueEl.textContent = count;
  });
});
