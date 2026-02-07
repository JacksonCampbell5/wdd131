let productList = document.querySelector("#product-list");
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
let newProductList = "";
    products.forEach(product => {
        newProductList += `<option value="${product.id}">${product.name}</option>`;
    });
productList.innerHTML += newProductList;

let num = 0;
if (localStorage.getItem('reviewsCompleted') !== null){
    num = Number(JSON.parse(localStorage.getItem('reviewsCompleted')));
    num += 1;
}
localStorage.setItem('reviewsCompleted', num);