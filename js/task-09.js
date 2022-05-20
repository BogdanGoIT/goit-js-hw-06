function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorEl = document.querySelector('button.change-color');
const spanColorEl = document.querySelector('.color');
const body = document.querySelector('body');

changeColorEl.addEventListener('click', valueChangeColor);

function valueChangeColor() {
  console.log('click')
  spanColorEl.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}