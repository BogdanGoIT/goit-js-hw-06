const categoryEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryEl.length}`);

for (const category of categoryEl) {
    console.log("Category: ", category.firstElementChild.textContent);
    console.log("Elements: ", category.querySelectorAll('ul>li').length);
}

