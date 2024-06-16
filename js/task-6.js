function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls > input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', onCreateBtnElClick);

function onCreateBtnElClick() {
  const amount = inputEl.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  let size = 30;
  let markup = [];

  for (let i = 0; i < amount; i++) {
    markup.push(
      `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div> \n`,
    );
    size += 10;
  }

  boxEl.innerHTML = markup.join('');
  inputEl.value = '';
}

destroyBtnEl.addEventListener('click', onDestroyBtnElClick);

function onDestroyBtnElClick() {
  destroyBoxes();
}

function destroyBoxes() {
  boxEl.innerHTML = '';
}
