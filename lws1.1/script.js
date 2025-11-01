// catch DOM elements
const button = document.getElementById("button");
const price = document.getElementById("price");
const total = document.getElementById("total");

// state or date
const productPrice = 5000;
let totalPrice = 0;

// set product price initially
price.innerText = `BDT ${productPrice}`;
total.innerText = `Total: BDT ${totalPrice}`;

button.addEventListener("click",()=>{
    totalPrice += productPrice;

    // update ui
    total.innerText = `Total: BDT ${totalPrice}`;
})