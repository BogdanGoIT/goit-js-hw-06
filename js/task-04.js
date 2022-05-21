const btnDecremrntEl = document.querySelector('[data-action="decrement"]');
const spanValueEl = document.querySelector('#value');
const btnIncrementEl = document.querySelector('[data-action="increment"]');


let counterValue = 0;

btnDecremrntEl.addEventListener('click', () => {
    
    counterValue -= 1;

    btnDecremrntEl.textContent = counterValue;
    spanValue();
    console.log(btnDecremrntEl)
});


btnIncrementEl.addEventListener('click', () => {
    
    counterValue += 1;

    btnIncrementEl.textContent = counterValue;
    spanValue();
    console.log(btnIncrementEl);
});


function spanValue() {
    spanValueEl.textContent = counterValue;
}




