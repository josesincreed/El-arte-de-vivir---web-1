document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que se recargue la página

  const nombre = document.getElementById('nombres').value;
  alert(`¡Formulario enviado con éxito, ${nombre}!`);

  this.reset(); // Opcional: limpia el formulario después de enviar
});
