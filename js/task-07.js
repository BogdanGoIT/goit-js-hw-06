// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControlEl = document.querySelector('input#font-size-control');
const spanTextEl = document.querySelector('#text');

console.log(fontSizeControlEl);

fontSizeControlEl.addEventListener('input', onSizeControl);

function onSizeControl() {
    spanTextEl.style.fontSize = `${fontSizeControlEl.value}px`
}