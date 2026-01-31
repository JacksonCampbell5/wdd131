const hamburger = document.querySelector('#menu');
const navMenu =document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
})
const filteredTempleList = document.querySelector("#filtered-temple-list");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Ogden Utah",
    location: "Ogden Utah, United States",
    dedicated: "2014, 21 September ",
    area: 112232,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/400x250/ogden-utah-temple-1300442-wallpaper.jpg"
  },
  {
    templeName: "Apia Samoa",
    location: "Pesega, Apia Samoa",
    dedicated: "2005, 4 September",
    area: 18691,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah United States",
    dedicated: "1884, 17–19 May ",
    area: 119619,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-760446-wallpaper.jpg"
  },
  
  // Add more temple objects here...
];
const home = document.querySelector(`#home`)
const old = document.querySelector(`#old`)
const newTemple = document.querySelector(`#new`)
const large = document.querySelector(`#large`)
const small = document.querySelector(`#small`)
let newTempleList = "";
makeTempleCards(temples);
filteredTempleList.innerHTML = newTempleList;




function makeTempleCards(templeList){ 
    newTempleList = "";
    templeList.forEach(temple => {
        newTempleList += `<figure>
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"</td>
        </figure>`;
    });
    
}

home.addEventListener('click', () => {
    makeTempleCards(temples);
    filteredTempleList.innerHTML = newTempleList;
})
old.addEventListener('click', () => {
    makeTempleCards(temples.filter( temple => temple.dedicated.charAt(1) === '8'));
    filteredTempleList.innerHTML = newTempleList;  
})
newTemple.addEventListener('click', () => {
    makeTempleCards(temples.filter( temple => temple.dedicated.charAt(0) === '2'));
    filteredTempleList.innerHTML = newTempleList;
})
large.addEventListener('click', () => {
    makeTempleCards(temples.filter( temple => temple.area > 90000));
    filteredTempleList.innerHTML = newTempleList;
})
small.addEventListener('click', () => {
    makeTempleCards(temples.filter( temple => temple.area < 10000));
    filteredTempleList.innerHTML = newTempleList;
})



