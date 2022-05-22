const categoryEl = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${categoryEl.length}`);

for (const category of categoryEl) {
    console.log("Category: ", category.querySelector('h2').textContent);
    console.log("Elements: ", category.querySelectorAll('ul li').length);
}



// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3