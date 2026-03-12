document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('luxury_cart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.textContent = cart.length;
    }
}

function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('luxury_cart')) || [];
    
    const product = { id, name, price, image };
    cart.push(product);
    
    localStorage.setItem('luxury_cart', JSON.stringify(cart));
    
    updateCartCount();
    alert(name + " added to your bag!");
}