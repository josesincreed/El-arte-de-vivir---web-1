document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    {
      id: 16,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulsera de rosa",
      precio: 10000,
      descripcion: "Pulsera decorativa con detalle central en forma de rosa.",
      imagen: "assets/imagenes/manilladerosaroja.jpg"
    },
    {
      id: 17,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulsera tipo uva",
      precio: 10000,
      descripcion: "Diseño artesanal con cuentas agrupadas como racimos de uva.",
      imagen: "assets/imagenes/manillamorada.jpg"
    },
    {
      id: 18,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulsera de coral rojo",
      precio: 10000,
      descripcion: "Pulsera vibrante elaborada con coral rojo auténtico.",
      imagen: "assets/imagenes/manilladerosa.jpg"
    },
    {
      id: 19,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulsera de coral rosa",
      precio: 10000,
      descripcion: "Pulsera suave y femenina con cuentas de coral rosado.",
      imagen: "assets/imagenes/manillarosada.jpg"
    },
    {
      id: 20,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulsera turca",
      precio: 10000,
      descripcion: "Pulsera con ojo turco para protección y buena energía.",
      imagen: "assets/imagenes/manilladecolores.jpg"
    },
    {
      id: 21,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulsera Colombia",
      precio: 10000,
      descripcion: "Pulsera con los colores de la bandera de Colombia. ¡Luce tu orgullo!",
      imagen: "assets/imagenes/manillaazul.jpg"
    },
  ];

  const carousel = document.getElementById("carouselContainer");

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

  document.getElementById("nextBtn").addEventListener("click", () => {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    carousel.scrollBy({ left: -320, behavior: "smooth" });
  });

  setInterval(() => {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
  }, 10000);
});
