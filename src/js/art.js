document.addEventListener("DOMContentLoaded", () => {
  const esculturasContainer = document.getElementById("esculturasContainer");
  const pulserasSection = document.getElementById("pulseras");
  const collaresSection = document.getElementById("collares");
  const aretesSection = document.getElementById("aretes");

  const esculturas = productos.filter(p => p.categoria === "Arte" && p.seccion === "Esculturas");
  const pulseras = productos.filter(p => p.categoria === "Arte" && p.seccion === "Pulseras");
  const collares = productos.filter(p => p.categoria === "Arte" && p.seccion === "Collares");
  const aretes = productos.filter(p => p.categoria === "Arte" && p.seccion === "Aretes");

  // Renderizar esculturas
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

  // Contenedor Pulseras
  const pulserasContainer = document.createElement("div");
  pulserasContainer.classList.add("product-grid");
  pulserasContainer.id = "pulserasContainer";
  pulserasSection.appendChild(pulserasContainer);
  pulseras.forEach(prod => {
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
    pulserasContainer.appendChild(card);
  });

  // Contenedor Collares
  const collaresContainer = document.createElement("div");
  collaresContainer.classList.add("product-grid");
  collaresContainer.id = "collaresContainer";
  collaresSection.appendChild(collaresContainer);
  collares.forEach(prod => {
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
    collaresContainer.appendChild(card);
  });

  // Contenedor Aretes
  const aretesContainer = document.createElement("div");
  aretesContainer.classList.add("product-grid");
  aretesContainer.id = "aretesContainer";
  aretesSection.appendChild(aretesContainer);
  aretes.forEach(prod => {
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
    aretesContainer.appendChild(card);
  });
});
