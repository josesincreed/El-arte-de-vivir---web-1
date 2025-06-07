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
    },
    //PRODUCTOS HOGAR
    {
      id: 40,
      categoria: "Hogar",
      seccion: "Ambientadores",
      nombre: "Ambientador en splash Brisa marina",
      precio: 10000,
      descripcion: "Aromatiza tu hogar con una fresca brisa marina.",
      imagen: "assets/imagenes/ambientadorBrisaMarina.jpg"
    },
    {
      id: 41,
      categoria: "Hogar",
      seccion: "Ambientadores",
      nombre: "Ambientador en splash Be Clean",
      precio: 10000,
      descripcion: "Fragancia fresca y limpia para tu espacio.",
      imagen: "assets/imagenes/ambientadorBeClean.jpg"
    },
    {
      id: 42,
      categoria: "Hogar",
      seccion: "Ambientadores",
      nombre: "Ambientador en splash Maracuya",
      precio: 10000,
      descripcion: "Dulce y tropical aroma a maracuyá.",
      imagen: "assets/imagenes/ambientadorBrisaMarina.jpg"
    },
    {
      id: 43,
      categoria: "Hogar",
      seccion: "Ambientadores",
      nombre: "Ambientador en splash Flores del campo",
      precio: 10000,
      descripcion: "Aroma floral para ambientes acogedores.",
      imagen: "assets/imagenes/ambientadorBeClean.jpg"
    },
    {
      id: 44,
      categoria: "Hogar",
      seccion: "Ambientadores",
      nombre: "Ambientador en splas Nuevo Carro",
      precio: 10000,
      descripcion: "Fragancia clásica de carro nuevo.",
      imagen: "assets/imagenes/ambientadorBrisaMarina.jpg"
    },
    {
      id: 45,
      categoria: "Hogar",
      seccion: "Ambientadores",
      nombre: "Ambientador en splash Talco #4",
      precio: 10000,
      descripcion: "Aroma suave y reconfortante a talco.",
      imagen: "assets/imagenes/ambientadorBeClean.jpg"
    },
    {
      id: 46,
      categoria: "Hogar",
      seccion: "Ambientadores",
      nombre: "Ambientador en splash Sandia",
      precio: 10000,
      descripcion: "Refrescante aroma a sandía madura.",
      imagen: "assets/imagenes/ambientadorBrisaMarina.jpg"
    },
    {
      id: 47,
      categoria: "Hogar",
      seccion: "Ambientadores",
      nombre: "Ambientador en splash Citronela",
      precio: 10000,
      descripcion: "Citronela natural, ideal para repeler insectos.",
      imagen: "assets/imagenes/ambientadorBeClean.jpg"
    },
    {
      id: 48,
      categoria: "Hogar",
      seccion: "Cremas corporales",
      nombre: "Crema corporal Pera",
      precio: 6000,
      descripcion: "Hidratante corporal con fragancia a pera.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 49,
      categoria: "Hogar",
      seccion: "Cremas corporales",
      nombre: "Crema corporal Coconut",
      precio: 6000,
      descripcion: "Nutrición tropical con aroma a coco.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 50,
      categoria: "Hogar",
      seccion: "Cremas corporales",
      nombre: "Crema corporal Bon Bon Bun",
      precio: 6000,
      descripcion: "Deliciosa fragancia inspirada en el dulce Bon Bon Bum.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 51,
      categoria: "Hogar",
      seccion: "Cremas corporales",
      nombre: "Crema corporal Pera",
      precio: 6000,
      descripcion: "Crema hidratante con doble carga de aroma a pera.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 52,
      categoria: "Hogar",
      seccion: "Cremas corporales",
      nombre: "Colonia en splash Coconut",
      precio: 20000,
      descripcion: "Refrescante colonia con fragancia de coco.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 53,
      categoria: "Hogar",
      seccion: "Cremas corporales",
      nombre: "Colonia en splash Bon Bon Bum",
      precio: 20000,
      descripcion: "Colonia divertida con aroma a Bon Bon Bum.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 54,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Silicona multiusos emulsionada",
      precio: 14000,
      descripcion: "Ideal para proteger y dar brillo a superficies.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 55,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Limpiador multiusos Limon",
      precio: 10000,
      descripcion: "Aroma cítrico con poder limpiador.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 56,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Limpiador multiusos Canela",
      precio: 10000,
      descripcion: "Aroma cálido a canela para tu hogar.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 57,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Limpiador multiusos Pino",
      precio: 10000,
      descripcion: "Fragancia clásica a pino fresco.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 58,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Limpiador multiusos Cereza",
      precio: 10000,
      descripcion: "Limpieza efectiva con fragancia a cereza.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 59,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Limpiador multiusos Flores del campo",
      precio: 10000,
      descripcion: "Fragancia floral para todos los espacios.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 60,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Limpiador multiusos Limon",
      precio: 10000,
      descripcion: "Versión alternativa del limpiador con aroma a limón.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 61,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Jabon liquido anti bacterial Manzana verde",
      precio: 4500,
      descripcion: "Jabón líquido con aroma fresco de manzana verde.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 62,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Jabon liquido anti bacterial Coco",
      precio: 4500,
      descripcion: "Jabón líquido antibacteriano con aroma tropical.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 63,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Jabon liquido anti bacterial Sandia",
      precio: 4500,
      descripcion: "Refrescante jabón líquido con aroma a sandía.",
      imagen: "assets/imagenes/budaazul.jpg"
    },
    {
      id: 64,
      categoria: "Hogar",
      seccion: "Multiusos",
      nombre: "Jabon liquido anti bacterial Coco y Avena",
      precio: 4500,
      descripcion: "Jabón líquido suave con coco y avena.",
      imagen: "assets/imagenes/budaazul.jpg"
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
  