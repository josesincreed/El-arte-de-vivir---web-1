import { getData as getAmbientadores } from './sections/ambientadores/fetch.js';
import { getData as getCremas } from './sections/cremas/fetch.js';
// Si tienes otro fetch para multiusos:
import { getData as getMultiusos } from './sections/multiUsos/fetch.js';


document.addEventListener("DOMContentLoaded", async () => {
  const ambientadores = await getAmbientadores();
  renderProductos(ambientadores, "Ambientadores", "ambientadores");

  const cremas = await getCremas();
  renderProductos(cremas, "Cremas corporales", "cremas");

  const multiusos = await getMultiusos();
  renderProductos(multiusos, "Multiusos", "multiusos");
});


function renderProductos(productos, seccion, contenedorId) {
  const container = document.getElementById(contenedorId);
  if (!container) return;

  const filtrados = productos.filter(p => p.seccion === seccion);
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
