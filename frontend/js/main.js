// Page එක load වද්දී update කරන්න
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// Navigation bar එකේ Cart (0) එක update කරන function එක
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('luxury_cart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.textContent = cart.length;
    }
}

// "Add to Cart" බටන් එක එබූ විට වැඩ කරන function එක
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('luxury_cart')) || [];
    
    const product = { id, name, price, image };
    cart.push(product);
    
    localStorage.setItem('luxury_cart', JSON.stringify(cart));
    
    updateCartCount();
    alert(name + " added to your bag!");
}