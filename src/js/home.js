document.addEventListener("DOMContentLoaded", () => {
    const ambientadoresSection = document.getElementById("ambientadores");
    const cremasSection = document.getElementById("cremas");
    const multiusosSection = document.getElementById("multiusos");
  
    const ambientadores = productos.filter(p => p.categoria === "Hogar" && p.seccion === "Ambientadores");
    const cremas = productos.filter(p => p.categoria === "Hogar" && p.seccion === "Cremas corporales");
    const multiusos = productos.filter(p => p.categoria === "Hogar" && p.seccion === "Multiusos");
  
    // Contenedor Ambientadores
    const ambientadoresContainer = document.createElement("div");
    ambientadoresContainer.classList.add("product-grid");
    ambientadoresContainer.id = "ambientadoresContainer";
    ambientadoresSection.appendChild(ambientadoresContainer);
    ambientadores.forEach(prod => {
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
      ambientadoresContainer.appendChild(card);
    });
  
    // Contenedor Cremas Corporales
    const cremasContainer = document.createElement("div");
    cremasContainer.classList.add("product-grid");
    cremasContainer.id = "cremasContainer";
    cremasSection.appendChild(cremasContainer);
    cremas.forEach(prod => {
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
      cremasContainer.appendChild(card);
    });
  
    // Contenedor Multiusos
    const multiusosContainer = document.createElement("div");
    multiusosContainer.classList.add("product-grid");
    multiusosContainer.id = "multiusosContainer";
    multiusosSection.appendChild(multiusosContainer);
    multiusos.forEach(prod => {
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
      multiusosContainer.appendChild(card);
    });
  });
  