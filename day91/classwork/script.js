let cart = [];
let total = 0;

function addToCart(productName, price) {
    // Add product to the cart array
    cart.push({ name: productName, price: price });

    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');

    // Clear the existing cart items
    cartItems.innerHTML = '';

    // Recalculate total
    total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;

    // Add each item to the cart display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
}
