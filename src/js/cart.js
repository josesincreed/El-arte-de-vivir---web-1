// Función para obtener el carrito desde localStorage
function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  
  // Función para guardar el carrito en localStorage
  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // Función para calcular el total del carrito
  function calculateCartTotal(cart) {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }
  
  // Función para actualizar la visualización del carrito
  function updateCartUI() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");
  
    if (cartItemsContainer && cartTotalElement) {
      cartItemsContainer.innerHTML = "";
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
        cartTotalElement.textContent = "$0";
      } else {
        cart.forEach(item => {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
          
          cartItem.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <div>
              <p><strong>${item.nombre}</strong></p>
              <p>Precio: $${item.precio.toLocaleString()}</p>
              <p>Cantidad: ${item.cantidad}</p>
            </div>
            <p>Total: $${(item.precio * item.cantidad).toLocaleString()}</p>
          `;
          
          cartItemsContainer.appendChild(cartItem);
        });
  
        const total = calculateCartTotal(cart);
        cartTotalElement.textContent = `$${total.toLocaleString()}`;
      }
    }
  }
  
  // Función para limpiar el carrito
  function clearCart() {
    localStorage.removeItem("cart");
    updateCartUI();
    updateCartCount(); // También actualiza el contador
  }
  
  // Función para actualizar el contador del carrito en el header
  function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    const cartCountElement = document.getElementById("cart-count");
  
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
      cartCountElement.classList.remove("hidden"); // Siempre visible
    }
  }
  
  // Esperar a que cargue el DOM
  document.addEventListener("DOMContentLoaded", () => {
    // Si existe el botón de limpiar carrito, se le asigna el evento
    const clearCartBtn = document.getElementById("clearCartBtn");
    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", clearCart);
    }
  
    updateCartUI();      // Solo afecta si hay elementos del carrito
    updateCartCount();   // Siempre actualiza el contador
  });
  