// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
    nameInput: document.querySelector('input#name-input'),
    nameOutput: document.querySelector('span#name-output'),
}

refs.nameInput.addEventListener('input', onInputName);



function onInputName(event) {
    if (event.currentTarget.value === "") {
        refs.nameOutput.textContent = 'Anonymous';
    }
    else {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
    
}