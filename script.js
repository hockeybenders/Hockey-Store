const cart = [];
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", (e) => {
    const product = e.target.closest(".product");
    const name = product.querySelector("select.quantity").dataset.name;
    const quantitySelect = product.querySelector("select.quantity");
    const quantity = quantitySelect.value;
    const price = quantitySelect.options[quantitySelect.selectedIndex].dataset.price;
    const type = quantitySelect.dataset.type;

    let color = "";
    if (product.querySelector("select.color")) {
      color = product.querySelector("select.color").value;
    }

    const item = { name, quantity, price, color, type };
    cart.push(item);
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.color ? item.color + ", " : ""}paquet de ${item.quantity}) - ${item.price}$`;
    cartItems.appendChild(li);
    total += parseFloat(item.price);
  });

  totalElement.textContent = total.toFixed(2);
}

document.getElementById("checkout").addEventListener("click", () => {
  alert("Merci pour votre commande! (paiement à venir 🚀)");
});
