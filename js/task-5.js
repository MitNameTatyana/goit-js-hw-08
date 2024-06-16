function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector('.change-color');
const spanElem = document.querySelector('.color');

btnElem.addEventListener('click', onBtnElemClick);

function onBtnElemClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanElem.textContent = getRandomHexColor();
}
