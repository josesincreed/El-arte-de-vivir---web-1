document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", message);
  
    
    this.reset();
  
    
    const notification = document.createElement("div");
    notification.textContent = "¡Mensaje enviado!";
    notification.classList.add("form-notification");
    document.body.appendChild(notification);
  
   
    setTimeout(() => {
      notification.remove();
    }, 3000);
  });
  