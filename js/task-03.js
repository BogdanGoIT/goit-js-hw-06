const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


  // const galeryItemEl = document.createElement('li')
  // const galeryImgEl = document.createElement('img');
  // galeryImgEl.classList.add('galery__img');
  // galeryImgEl.src = url;
  // galeryImgEl.alt = alt;

  // return galeryItemEl;

const galeryImgEl = document.querySelector('ul.gallery');

const galeryItemEl = (items) => items
  .map(({ url, alt }) => `<li><img class="galery__img" src="${url}" alt="${alt}"></li>`)
  .join("");


const elementsImgItems = galeryItemEl(images);

galeryImgEl.insertAdjacentHTML("beforeend", elementsImgItems);