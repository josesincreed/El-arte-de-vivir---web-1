import { getData as getArte } from './sections/esculturas/fetch.js';
import { getData as getPulseras } from './sections/pulseras/fetch.js';
import { getData as getCollares } from './sections/collares/fetch.js';
import { getData as getAretes } from './sections/aretes/fetch.js';

document.addEventListener("DOMContentLoaded", async () => {
  const arte = await getArte();
  const pulseras = await getPulseras();
  const collares = await getCollares(); 
  const aretes = await getAretes();


  renderProductos(arte, "Esculturas", "esculturas");
  renderProductos(pulseras, "Pulseras", "pulseras");
  renderProductos(collares, "Collares", "collares");
  renderProductos(aretes, "Aretes", "aretes");
});




function renderProductos(productos, seccion, contenedorId) {
  const container = document.getElementById(contenedorId);
  if (!container) return;

  const filtrados = productos.filter(p => p.categoria === "Arte" && p.seccion === seccion);
  if (filtrados.length === 0) {
    container.innerHTML = `<p>No hay productos para mostrar en esta sección.</p>`;
    return;
  }

  const grid = document.createElement("div");
  grid.classList.add("product-grid");
  grid.id = `${contenedorId}Container`;

  filtrados.forEach(prod => {
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
    grid.appendChild(card);
  });

  container.appendChild(grid);
}
