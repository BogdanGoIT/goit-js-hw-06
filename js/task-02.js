const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navItemEl = document.querySelector('ul#ingredients');
console.log(navItemEl);

const ingredItems = (items) => {

  return items.map(element => {
    const ingredEl = document.createElement("li");

    ingredEl.textContent = element;
    ingredEl.classList.add('item');
    
    return ingredEl;

  });

}

const elementsLi = ingredItems(ingredients);
console.log(elementsLi);
navItemEl.append(...elementsLi);

