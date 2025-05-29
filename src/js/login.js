document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Previene que recargue la página
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const users = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      const userFound = users.find(user => user.email === email && user.password === password);
  
      if (userFound) {
        alert("Inicio de sesión exitoso");
        window.location.href = "profile.html";
      } else {
        alert("Datos ingresados inválidos. Intenta de nuevo.");
      }
    });
  });
  