document.getElementById('contactForm').addEventListener('submit', function (evento) {
  evento.preventDefault(); // Evita el envío del formulario

  // Obtiene los valores de los campos del formulario
  const nombres = document.getElementById('nombres').value.trim();
  const apellidos = document.getElementById('apellidos').value.trim();
  const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
  const residencia = document.getElementById('residencia').value.trim();
  const discapacidad = document.getElementById('discapacidad').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const correo = document.getElementById('correo').value.trim();

  // Verifica si los campos están vacíos
  if (!nombres || !apellidos || !fechaNacimiento || !residencia || !discapacidad || !telefono || !correo) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Crea un objeto con los datos del formulario
  const datos = {
    nombres: nombres,
    apellidos: apellidos,
    fechaNacimiento: fechaNacimiento,
    residencia: residencia,
    discapacidad: discapacidad,
    telefono: telefono,
    correo: correo
  };

  // Convierte el objeto a una cadena JSON
  const jsonStr = JSON.stringify(datos, null, 2);

  // Crea un Blob con los datos JSON
  const blob = new Blob([jsonStr], { type: 'application/json' });

  // Crea un enlace de descarga
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = 'datos_formulario.json';

  // Simula un clic en el enlace para iniciar la descarga
  enlace.click();

  // Libera el objeto URL creado
  URL.revokeObjectURL(enlace.href);
});
