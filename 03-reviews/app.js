'use strict';

//************** LOCAL REVIEWS DATA **************/
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//************** SELECTING ELEMENTS **************/
const imageEl = document.querySelector('.img-person');
const authorEl = document.querySelector('.author');
const jobEl = document.querySelector('.job');
const infoEl = document.querySelector('.info');

const prevBtnEl = document.querySelector('.btn-prev');
const nextBtnEl = document.querySelector('.btn-next');
const randomBtnEl = document.querySelector('.btn-random');

//************** FUNCTIONS **************/
const showPerson = function (id) {
  const person = reviews[id];
  imageEl.src = person.img;
  authorEl.textContent = person.name;
  jobEl.textContent = person.job;
  infoEl.textContent = person.text;
};

//************** STARTING CONDITIONS **************/
let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => showPerson(currentItem));

//************** BUTTON PREV FUNCTIONALITY **************/
prevBtnEl.addEventListener('click', () => {
  console.log('Prev');
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//************** BUTTON NEXT FUNCTIONALITY **************/
nextBtnEl.addEventListener('click', () => {
  console.log('Next');
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//************** BUTTON RANDOM FUNCTIONALITY **************/
randomBtnEl.addEventListener('click', () => {
  console.log('Random');

  currentItem = Math.trunc(Math.random() * reviews.length);
  showPerson(currentItem);
});
