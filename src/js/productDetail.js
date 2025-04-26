const productos = [
    {
      id: 1,
      categoria: "Arte",
      seccion: "Esculturas",
      nombre: "Buda de oración",
      precio: 40000,
      descripcion: "Figura pintada a mano, ideal para decorar tu hogar.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 2,
      categoria: "Arte",
      seccion: "Esculturas",
      nombre: "Buda portavelas",
      precio: 40000,
      descripcion: "Escultura artesanal perfecta para ambientar con luz y calma.",
      imagen: "assets/imagenes/budaportavelas.jpg"
    },
    {
      id: 3,
      categoria: "Arte",
      seccion: "Esculturas",
      nombre: "Buda color cobre",
      precio: 40000,
      descripcion: "Elegante figura de Buda en tono cobre para un toque espiritual.",
      imagen: "assets/imagenes/budacobre.jpg"
    },
    {
      id: 4,
      categoria: "Arte",
      seccion: "Esculturas",
      nombre: "Los 3 sabios",
      precio: 60000,
      descripcion: "Figuras pintadas a mano, los 3 sabios: no ver, no escuchar y no hablar.",
      imagen: "assets/imagenes/3budas.jpg"
    },
    {
      id: 5,
      categoria: "Arte",
      seccion: "Esculturas",
      nombre: "Buda durmiente",
      precio: 30000,
      descripcion: "Representación serena del Buda en descanso, ideal para decorar.",
      imagen: "assets/imagenes/budadelado.jpg"
    },
    {
      id: 6,
      categoria: "Arte",
      seccion: "Esculturas",
      nombre: "Virgen maria",
      precio: 50000,
      descripcion: "Escultura espiritual de la Virgen María, símbolo de fe y protección.",
      imagen: "assets/imagenes/virgenmaria.jpg"
    },
    {
      id: 7,
      categoria: "Arte",
      seccion: "Esculturas",
      nombre: "Alas porta velas",
      precio: 50000,
      descripcion: "Decoración con alas que sostienen velas, ideal para crear ambiente.",
      imagen: "assets/imagenes/alasdeangel.jpg"
    },
    {
      id: 8,
      categoria: "Arte",
      seccion: "Esculturas",
      nombre: "Cuadro de caballos",
      precio: 60000,
      descripcion: "Cuadro artístico que captura la fuerza y elegancia de los caballos.",
      imagen: "assets/imagenes/caballos.jpg"
    },
    {
      id: 9,
      categoria: "Arte",
      seccion: "Esculturas",
      nombre: "La ultima cena",
      precio: 60000,
      descripcion: "Representación detallada de La Última Cena, ideal para el hogar.",
      imagen: "assets/imagenes/ultimacena.jpg"
    }
  ];
  
  
  // Obtener ID desde la URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  
  // Buscar producto
  const producto = productos.find(p => p.id === id);
  
  if (!producto) {
    document.querySelector("main").innerHTML = "<h2 style='text-align:center; padding: 2rem;'>Producto no encontrado</h2>";
  } else {
    // Llenar los elementos del HTML
    document.getElementById("productImage").src = producto.imagen;
    document.getElementById("productImage").alt = producto.nombre;
    document.getElementById("productName").textContent = producto.nombre;
    document.getElementById("productPrice").textContent = `$${producto.precio.toLocaleString()}`;
    document.getElementById("productDescription").textContent = producto.descripcion;
    document.getElementById("productCategory").textContent = producto.categoria;
    document.getElementById("productSection").textContent = producto.seccion;
  
    // Manejo de cantidad
    let cantidad = 1;
    const quantityEl = document.getElementById("quantity");
  
    document.getElementById("increaseBtn").addEventListener("click", () => {
      cantidad++;
      quantityEl.textContent = cantidad;
    });
  
    document.getElementById("decreaseBtn").addEventListener("click", () => {
      if (cantidad > 1) {
        cantidad--;
        quantityEl.textContent = cantidad;
      }
    });
  
    // Función para obtener el carrito desde localStorage
    function getCart() {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    }
  
    // Función para guardar el carrito en localStorage
    function saveCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount(); // Actualizar el contador del carrito
    }
  
    // Función para actualizar el contador del carrito
    function updateCartCount() {
      const cart = getCart();
      const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);
      document.getElementById("cart-count").textContent = totalItems; // Actualizar el contador en el header
    }
  
    // Agregar al carrito
    document.getElementById("addToCartBtn").addEventListener("click", () => {
      const cart = getCart();
      const existingProduct = cart.find(item => item.id === producto.id);
  
      if (existingProduct) {
        existingProduct.cantidad += cantidad; // Aumentar cantidad si el producto ya está en el carrito
      } else {
        cart.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          descripcion: producto.descripcion,
          imagen: producto.imagen,
          categoria: producto.categoria,
          seccion: producto.seccion,
          cantidad: cantidad
        });
      }
  
      saveCart(cart); // Guardar el carrito actualizado en localStorage
      alert(`Agregado ${cantidad}x "${producto.nombre}" al carrito`);
    });
  
    // Actualizar el contador en el header cuando se carga la página
    updateCartCount();
  }
  