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


const galeryEl = document.querySelector('ul.gallery');

const element = images.map(({ url, alt }) => {

  // const galeryItemEl = document.createElement('li')
  // const galeryImgEl = document.createElement('img');
  // galeryImgEl.classList.add('galery__img');
  // galeryImgEl.src = url;
  // galeryImgEl.alt = alt;

  // galeryItemEl.appendChild(galeryImgEl);

  // return galeryItemEl;
  
  galeryEl.insertAdjacentHTML("afterbegin", `<li><img class="galery__img" src="${url}" alt="${alt}"></li>`);
})



// galeryEl.insertAdjacentHTML("afterbegin", element);