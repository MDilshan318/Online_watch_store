document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('luxury_cart')) || [];
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<div style="color: white; text-align: center; padding: 50px; font-size: 1.2rem;">Your shopping bag is currently empty.</div>';
        totalEl.textContent = 'Total: $0.00';
        return;
    }

    container.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #333; color: white;";
        
        div.innerHTML = `
            <div style="display: flex; align-items: center; gap: 20px;">
                <img src="${item.image}" style="width: 70px; height: 70px; object-fit: cover;">
                <div>
                    <h4 style="margin: 0; font-family: 'Playfair Display', serif;">${item.name}</h4>
                    <p style="margin: 5px 0; color: #b1915e;">$${item.price.toLocaleString()}</p>
                </div>
            </div>
            <button onclick="removeFromCart(${index})" style="background: transparent; color: #ff4444; border: 1px solid #ff4444; padding: 5px 15px; cursor: pointer;">Remove</button>
        `;
        container.appendChild(div);
    });

    totalEl.textContent = `Total: $${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('luxury_cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('luxury_cart', JSON.stringify(cart));
    renderCart();
    updateCartCount(); // main.js හි ඇති function එක
}