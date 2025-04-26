document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Obtener datos del formulario
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Imprimir en consola
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", message);
  
    // Limpiar formulario
    this.reset();
  
    // Mostrar notificación
    const notification = document.createElement("div");
    notification.textContent = "¡Mensaje enviado!";
    notification.classList.add("form-notification");
    document.body.appendChild(notification);
  
    // Quitar la notificación luego de 3 segundos
    setTimeout(() => {
      notification.remove();
    }, 3000);
  });
  