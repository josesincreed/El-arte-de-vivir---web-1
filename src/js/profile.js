document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("usuarioActual"));
  
    if (!currentUser) {
      alert("No has iniciado sesión.");
      window.location.href = "login.html";
      return;
    }
  
    document.getElementById("userName").textContent = currentUser.name;
  
    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("usuarioActual");
      window.location.href = "login.html";
    });
  });
  