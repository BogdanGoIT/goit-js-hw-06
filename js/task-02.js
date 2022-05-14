const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const navItemEl = document.querySelector('ul#ingredients')
console.log(navItemEl)
  
  
ingredients.forEach(element => {
  let ingredEl = document.createElement("li");
  ingredEl.textContent = element;
  ingredEl.classList.add('item');
  
  navItemEl.appendChild(ingredEl);
});


