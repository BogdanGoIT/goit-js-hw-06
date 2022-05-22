const btnDecremrntEl = document.querySelector('[data-action="decrement"]');
const spanValueEl = document.querySelector('#value');
const btnIncrementEl = document.querySelector('[data-action="increment"]');


let counterValue = 0;

btnDecremrntEl.addEventListener('click', () => {
    
    counterValue -= 1;
    spanValueEl.textContent = counterValue;

});


btnIncrementEl.addEventListener('click', () => {
    
    counterValue += 1;
    spanValueEl.textContent = counterValue;

});






