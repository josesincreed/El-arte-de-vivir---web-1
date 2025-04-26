
    document.addEventListener("DOMContentLoaded", () => {
      const esculturasContainer = document.getElementById("esculturasContainer");
  
      const esculturas = productos.filter(p => p.categoria === "Arte" && p.seccion === "Esculturas");

  
      esculturas.forEach(prod => {
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
        esculturasContainer.appendChild(card);
      });
    });
  