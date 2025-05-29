const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query === "") {
    searchResults.style.display = "none";
    return;
  }

  const resultadosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(query)
  );

  if (resultadosFiltrados.length > 0) {
    resultadosFiltrados.forEach(prod => {
      const item = document.createElement("div");
      item.classList.add("search-result-item");
      item.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <div>
          <strong>${prod.nombre}</strong><br>
          <span>$${prod.precio.toLocaleString()}</span>
        </div>
      `;

      // Redirigir al hacer clic
      item.addEventListener("click", () => {
        window.location.href = `product.html?id=${prod.id}`;
      });

      searchResults.appendChild(item);
    });
    searchResults.style.display = "block";
  } else {
    searchResults.innerHTML = "<div class='search-result-item'>No se encontraron productos</div>";
    searchResults.style.display = "block";
  }
});
