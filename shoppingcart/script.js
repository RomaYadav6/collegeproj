document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 28.89 },
    { id: 2, name: "Product 2", price: 19.29 },
    { id: 3, name: "Product 3", price: 59.89 },
  ];
  let cart = [];

  const prod = document.getElementById("product-list");
  const cartitem = document.getElementById("cart-items");
  const emptycart = document.getElementById("empty-cart");
  const carttotalmsg = document.getElementById("cart-total");
  const totalprice = document.getElementById("total-price");
  const checkout = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productdiv = document.createElement("div");
    productdiv.classList.add("productc");
    productdiv.innerHTML = `
      <span>${product.name} - $${product.price}</span>
      <button data-id="${product.id}">Add to cart</button>
    `;
    prod.appendChild(productdiv);
  });

  prod.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productid = parseInt(e.target.getAttribute("data-id"));
      const prodi = products.find((p) => p.id === productid);
      addTCart(prodi);
    }
  });

  function addTCart(prodi) {
    cart.push(prodi);
    rendercart();
  }

  function rendercart() {
    cartitem.innerText = "";
    let totprice = 0;
    if (cart.length > 0) {
      emptycart.classList.add("hidden");
      carttotalmsg.classList.remove("hidden");
      cart.forEach((item) => {
        totprice += item.price;
        const cartitems = document.createElement("div");
        cartitems.classList.add("productc");
        cartitems.innerHTML = `
          ${item.name} - $${item.price}
          <button data-id="${item.id}">Delete</button>
        `;
        cartitem.appendChild(cartitems);
      });
      totalprice.textContent = `$${totprice}`;
    } else {
      emptycart.classList.remove("hidden");
      carttotalmsg.classList.add("hidden");
    }
  }

  checkout.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout successfully");
    rendercart();
  });

  cartitem.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const itemId = parseInt(e.target.getAttribute("data-id"));
      cart = cart.filter((item) => item.id !== itemId);
      rendercart();
    }
  });
});
