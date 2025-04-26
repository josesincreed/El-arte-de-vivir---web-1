document.addEventListener("DOMContentLoaded", () => {
    // TODO: todo tu código JavaScript aquí adentro
  
    const productos = [
      {
        nombre: "Buda de oración",
        precio: 40000,
        descripcion: "Figura pintada a mano, ideal para decorar tu hogar.",
        imagen: "assets/imagenes/budaazul.jpg",
        enlace: "producto.html?id=1"
      },
      {
        nombre: "Collar con dije de rosa",
        precio: 18000,
        descripcion: "Representa la pureza y el amor, ideal para toda ocasión.",
        imagen: "assets/imagenes/rosa.jpg",
        enlace: "producto.html?id=3"
      },
      {
        nombre: "Aretes de hoja de café",
        precio: 11000,
        descripcion: "Aretes de acero inoxidable con hoja de café, ideales para el día a día.",
        imagen: "assets/imagenes/hojacafe.jpg",
        enlace: "producto.html?id=8"
      },
      {
        nombre: "Aretes de mantra azul marino",
        precio: 11000,
        descripcion: "Aretes de acero inoxidable con mantra, ideales para el día a día.",
        imagen: "assets/imagenes/areteredondoazul.jpg",
        enlace: "producto.html?id=4"
      },
      {
        nombre: "Buda portavelas",
        precio: 40000,
        descripcion: "Buda portavelas pintado a mano, ideal para decorar tu hogar.",
        imagen: "assets/imagenes/budaportavelas.jpg",
        enlace: "producto.html?id=5"
      },
      {
        nombre: "Denarios de oración",
        precio: 10000,
        descripcion: "Denarios de oración, ideales para meditar.",
        imagen: "assets/imagenes/denarios.jpg",
        enlace: "producto.html?id=6"
      },
      {
        nombre: "Camandula de oración",
        precio: 18000,
        descripcion: "Camandula hecha a mano, ideal para orar.",
        imagen: "assets/imagenes/camandula.jpg",
        enlace: "producto.html?id=7"
      },
      {
        nombre: "Pulsera de los 7 nudos",
        precio: 7000,
        descripcion: "Pulsera de hilo rojo con 7 nudos, ideal para tus chakras.",
        imagen: "assets/imagenes/7nudos.jpg",
        enlace: "producto.html?id=2"
      }
    ];
  
    const carousel = document.getElementById("carouselContainer");
  
    productos.forEach(prod => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.onclick = () => window.location.href = prod.enlace;
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
  