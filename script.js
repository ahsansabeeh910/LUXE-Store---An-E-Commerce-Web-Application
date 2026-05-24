const products = [

{
  id:1,
  name:"Luxury Watch",
  brand:"AUREL",
  category:"Accessories",
  price:549,
  emoji:"⌚"
},

{
  id:2,
  name:"Cashmere Coat",
  brand:"MAISON",
  category:"Apparel",
  price:899,
  emoji:"🧥"
},

{
  id:3,
  name:"Running Sneakers",
  brand:"APEX",
  category:"Footwear",
  price:220,
  emoji:"👟"
},

{
  id:4,
  name:"Leather Wallet",
  brand:"BROGUES",
  category:"Accessories",
  price:120,
  emoji:"💼"
}

];

let filteredProducts = [...products];
let cart = [];

function renderProducts(){

  const grid = document.getElementById("product-grid");

  grid.innerHTML = filteredProducts.map(product => `

    <div class="card">

      <div class="card-img">
        ${product.emoji}
      </div>

      <div class="card-info">

        <div class="brand">
          ${product.brand}
        </div>

        <div class="name">
          ${product.name}
        </div>

        <div class="price">
          ₹${product.price}
        </div>

        <button
          class="add-btn"
          onclick="addToCart(${product.id})"
        >
          Add to Cart
        </button>

      </div>

    </div>

  `).join("");

}

function filterProducts(category){

  if(category === "All"){
    filteredProducts = [...products];
  }

  else{
    filteredProducts = products.filter(
      p => p.category === category
    );
  }

  renderProducts();
}

function searchProducts(){

  const query = document
    .getElementById("search")
    .value
    .toLowerCase();

  filteredProducts = products.filter(product =>

    product.name.toLowerCase().includes(query) ||

    product.brand.toLowerCase().includes(query)

  );

  renderProducts();
}

function sortProducts(type){

  if(type === "low"){
    filteredProducts.sort((a,b) => a.price - b.price);
  }

  else if(type === "high"){
    filteredProducts.sort((a,b) => b.price - a.price);
  }

  renderProducts();
}

function addToCart(id){

  const product = products.find(p => p.id === id);

  cart.push(product);

  updateCart();

  alert(product.name + " added to cart");
}

function updateCart(){

  document.getElementById("cart-count").innerText =
    cart.length;

  const cartItems = document.getElementById("cart-items");

  cartItems.innerHTML = cart.map(item => `

    <div class="cart-item">

      <span>
        ${item.name}
      </span>

      <span>
        ₹${item.price}
      </span>

    </div>

  `).join("");

  const total = cart.reduce(
    (sum,item) => sum + item.price,
    0
  );

  document.getElementById("cart-total").innerText =
    "Total: ₹" + total;
}

function openCart(){

  document
    .getElementById("cart-panel")
    .classList
    .add("open");
}

function closeCart(){

  document
    .getElementById("cart-panel")
    .classList
    .remove("open");
}

renderProducts();