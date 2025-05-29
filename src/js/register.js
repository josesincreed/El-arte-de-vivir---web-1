document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!nombre || !email || !password) {
        alert("Por favor completa todos los campos.");
        return;
      }
  
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      const existe = usuarios.some(usuario => usuario.email === email);
      if (existe) {
        alert("Este correo ya está registrado. Intenta con otro.");
        return;
      }
  
      const nuevoUsuario = { nombre, email, password };
      usuarios.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
      alert("¡Registro exitoso! Ya puedes iniciar sesión.");
      window.location.href = "login.html";
    });
  });
  