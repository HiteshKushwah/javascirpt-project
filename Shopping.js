let product1 = {id: 1, name: "laptop", price: 50000};
let product2 = {id: 2, name: "mobile" , price: 18000};
let product3 = {id: 3, name: "dvd", price: 5000};
console.log(product1);

let cart = [];
cart.push(product1);
cart.push(product2);
console.log(cart);

cart.push(product3);
console.log(cart.shift);
let undostock = [];
undostock.push(cart.pop());
console.log(undostock.pop());

function addToCart(cart, product) {
    cart.push(product);
    console.log(`${product.name} added to the cart.`);
  }
  addToCart(cart, product3);
  