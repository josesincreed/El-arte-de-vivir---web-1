import { getData } from './fetch.js';

document.addEventListener("DOMContentLoaded", async () => {
  const productos = await getData();
  const carousel = document.getElementById("carouselContainer");

  if (!carousel) {
    console.error("No se encontró el contenedor del carrusel");
    return;
  }

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.onclick = () => window.location.href = `product.html?id=${prod.id}`;
    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <div class="info">
        <h4>${prod.nombre}</h4>
        <p>$${prod.precio.toLocaleString()}</p>
        <small>${prod.descripcion}</small>
      </div>
    `;
    carousel.appendChild(card);
  });

  // Botones para scrollar el carrusel
  document.getElementById("nextBtn").addEventListener("click", () => {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    carousel.scrollBy({ left: -320, behavior: "smooth" });
  });

  // Scroll automático cada 10 segundos
  setInterval(() => {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
  }, 10000);
});
