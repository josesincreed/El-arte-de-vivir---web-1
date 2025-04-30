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
    },
    // Pulseras
    {
      id: 10,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulsera de los 7 nudos",
      precio: 7000,
      descripcion: "Pulsera de protección hecha a mano con 7 nudos simbólicos.",
      imagen: "assets/imagenes/7nudos.jpg"
    },
    {
      id: 11,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Denarios de oración",
      precio: 10000,
      descripcion: "Pulsera espiritual con cuentas para acompañar tus oraciones.",
      imagen: "assets/imagenes/denarios.jpg"
    },
    {
      id: 12,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulseras personalizables",
      precio: 10000,
      descripcion: "Diseña tu pulsera a tu gusto: colores, nombres y símbolos.",
      imagen: "assets/imagenes/manillasconnombres.jpg"
    },
    {
      id: 13,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulseras de nudos",
      precio: 9000,
      descripcion: "Pulseras tejidas con nudos decorativos y resistentes.",
      imagen: "assets/imagenes/manillasdenudoz.jpg"
    },
    {
      id: 14,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulsera de coral",
      precio: 10000,
      descripcion: "Hermosa pulsera hecha con cuentas de coral natural.",
      imagen: "assets/imagenes/manillablamcaazul.jpg"
    },
    {
      id: 15,
      categoria: "Arte",
      seccion: "Pulseras",
      nombre: "Pulsera de coral verde",
      precio: 10000,
      descripcion: "Pulsera con cuentas de coral en tonos verdes vibrantes.",
      imagen: "assets/imagenes/manillademar.jpg"
    },
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
    //collares
    {
      id: 22,
      categoria: "Arte",
      seccion: "Collares",
      nombre: "Collar con dije de rosa",
      precio: 18000,
      descripcion: "Elegante collar con un dije en forma de rosa, ideal para un toque femenino.",
      imagen: "assets/imagenes/rosa.jpg"
    },
    {
      id: 23,
      categoria: "Arte",
      seccion: "Collares",
      nombre: "Collar con coral verde",
      precio: 18000,
      descripcion: "Collar adornado con coral verde, ideal para un look natural.",
      imagen: "assets/imagenes/colladijedeestrella.jpg"
    },
    {
      id: 24,
      categoria: "Arte",
      seccion: "Collares",
      nombre: "Collar de mascota",
      precio: 18000,
      descripcion: "Collar con un diseño único de mascota, ideal para los amantes de los animales.",
      imagen: "assets/imagenes/collarplateado.jpg"
    },
    {
      id: 25,
      categoria: "Arte",
      seccion: "Collares",
      nombre: "Collar de coral azul",
      precio: 18000,
      descripcion: "Collar con piezas de coral azul, perfecto para un estilo bohemio.",
      imagen: "assets/imagenes/collarazul.jpg"
    },
    {
      id: 26,
      categoria: "Arte",
      seccion: "Collares",
      nombre: "Collar de coral blanco",
      precio: 18000,
      descripcion: "Hermoso collar con coral blanco, ideal para complementar tu look elegante.",
      imagen: "assets/imagenes/collardemarblanco.jpg"
    },
    {
      id: 27,
      categoria: "Arte",
      seccion: "Collares",
      nombre: "Collar con dije de flor",
      precio: 18000,
      descripcion: "Collar delicado con un dije en forma de flor, para un toque romántico.",
      imagen: "assets/imagenes/collarcoloridodijeflor.jpg"
    },
    {
      id: 28,
      categoria: "Arte",
      seccion: "Collares",
      nombre: "Camandula de oracion",
      precio: 18000,
      descripcion: "Camándula tradicional para oración, ideal para momentos de meditación.",
      imagen: "assets/imagenes/camandula.jpg"
    },
    {
      id: 29,
      categoria: "Arte",
      seccion: "Collares",
      nombre: "Collar de coral cobre",
      precio: 18000,
      descripcion: "Collar de coral cobre, para un estilo único y elegante.",
      imagen: "assets/imagenes/collarcobre.jpg"
    },
    {
      id: 30,
      categoria: "Arte",
      seccion: "Collares",
      nombre: "Camandula dorada",
      precio: 18000,
      descripcion: "Camándula dorada para oración, perfecta para el camino espiritual.",
      imagen: "assets/imagenes/camnduladorada.jpg"
    },
    //aretes
    {
      id: 31,
      categoria: "Arte",
      seccion: "Aretes",
      nombre: "Aretes tipo planta",
      precio: 11000,
      descripcion: "Aretes inspirados en la naturaleza con diseño de planta.",
      imagen: "assets/imagenes/aretaplanta.jpg"
    },
    {
      id: 32,
      categoria: "Arte",
      seccion: "Aretes",
      nombre: "Aretes tipo hoja",
      precio: 11000,
      descripcion: "Aretes con diseño elegante de hoja, perfectos para cualquier ocasión.",
      imagen: "assets/imagenes/hojacafe.jpg"
    },
    {
      id: 33,
      categoria: "Arte",
      seccion: "Aretes",
      nombre: "Aretes arbol mistico",
      precio: 11000,
      descripcion: "Aretes con figura de árbol místico que representa crecimiento y sabiduría.",
      imagen: "assets/imagenes/aretesarboles.jpg"
    },
    {
      id: 34,
      categoria: "Arte",
      seccion: "Aretes",
      nombre: "Aretes clasicos",
      precio: 11000,
      descripcion: "Aretes de estilo clásico que combinan con todo.",
      imagen: "assets/imagenes/aretasazules.jpg"
    },
    {
      id: 35,
      categoria: "Arte",
      seccion: "Aretes",
      nombre: "Aretes de aro verde marino",
      precio: 11000,
      descripcion: "Aros en color verde marino que aportan un toque fresco y elegante.",
      imagen: "assets/imagenes/areteredondoazul.jpg"
    },
    {
      id: 36,
      categoria: "Arte",
      seccion: "Aretes",
      nombre: "Aretes multi color",
      precio: 11000,
      descripcion: "Aretes vibrantes con múltiples colores para un look alegre.",
      imagen: "assets/imagenes/areteredondo.jpg"
    },
    {
      id: 37,
      categoria: "Arte",
      seccion: "Aretes",
      nombre: "Aretes Ying y yang",
      precio: 7000,
      descripcion: "Aretes con símbolo Ying y Yang, equilibrio entre energía positiva y negativa.",
      imagen: "assets/imagenes/aretecorazonjinjan.jpg"
    },
    {
      id: 38,
      categoria: "Arte",
      seccion: "Aretes",
      nombre: "Pendientes de corazon",
      precio: 7000,
      descripcion: "Pendientes románticos con forma de corazón.",
      imagen: "assets/imagenes/aretespequenosdecorazon.jpg"
    },
    {
      id: 39,
      categoria: "Arte",
      seccion: "Aretes",
      nombre: "Aretes de corazon negros",
      precio: 7000,
      descripcion: "Aretes elegantes con diseño de corazón en color negro.",
      imagen: "assets/imagenes/corazonnegro.jpg"
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
  