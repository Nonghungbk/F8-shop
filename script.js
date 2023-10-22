document.addEventListener("DOMContentLoaded", function() {
    const cartLink = document.getElementById("cart-link");
    const cart = document.getElementById("cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const buyButtons = document.querySelectorAll(".buy-button");

    let cartContents = [];
    
    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const price = parseFloat(this.getAttribute("data-price"));
            cartContents.push(price);
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cartContents.forEach(price => {
            const li = document.createElement("li");
            li.textContent = "$" + price;
            cartItems.appendChild(li);
            total += price;
        });
        cartTotal.textContent = "Tổng tiền: $" + total;
        if (cartContents.length > 0) {
            cart.classList.remove("hidden");
        } else {
            cart.classList.add("hidden");
        }
    }

    cartLink.addEventListener("click", function() {
        updateCart();
    });
});
