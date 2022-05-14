const btnDecremrntEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');


let counterValue = 0;

btnDecremrntEl.addEventListener('click', () => {
    
    counterValue -= 1;

    btnDecremrntEl.textContent = counterValue;
    console.log(btnDecremrntEl)
});


btnIncrementEl.addEventListener('click', () => {
    
    counterValue += 1;

    btnIncrementEl.textContent = counterValue;
    console.log(btnIncrementEl)
});



