let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(productName + " ajouté au panier !");
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}