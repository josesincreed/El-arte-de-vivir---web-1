// Crear una solicitud
async function createApplication(data) {
  try {
    // Obtiene el array de citas desde localStorage o un array vacío si no existe
    const application = JSON.parse(localStorage.getItem('application')) || [];
    // Agrega la nueva cita al array
    application.push(data);
    // Guarda el array actualizado en localStorage
    localStorage.setItem('application', JSON.stringify(application));
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error('Error:', error.message);
  }
}
 
// Actualizar solicitudes (por índice)
async function updateApplication(index, newData) {
  try {
    // Obtiene el array de citas desde localStorage o un array vacío si no existe
    const application = JSON.parse(localStorage.getItem('application')) || [];
    // Verifica si existe una cita en el índice dado
    if (application[index]) {
      // Actualiza la cita en el índice con los nuevos datos
      application[index] = { ...application[index], ...newData };
      // Guarda el array actualizado en localStorage
      localStorage.setItem('application', JSON.stringify(application));
    } else {
      // Lanza un error si el índice no existe
      throw new Error('Índice no encontrado');
    }
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error('Error:', error.message);
  }
}
 
// Eliminar una cita (por índice)
async function deleteApplication(index) {
  try {
    // Obtiene el array de citas desde localStorage o un array vacío si no existe
    const application = JSON.parse(localStorage.getItem('application')) || [];
    // Verifica si existe una cita en el índice dado
    if (application[index]) {
      // Elimina la cita del array en el índice dado
      application.splice(index, 1);
      // Guarda el array actualizado en localStorage
      localStorage.setItem('application', JSON.stringify(application));
    } else {
      // Lanza un error si el índice no existe
      throw new Error('Índice no encontrado');
    }
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error('Error:', error.message);
  }
}
 
// Obtener todas las citas
async function getApplication() {
  try {
    // Devuelve el array de citas desde localStorage o un array vacío si no existe
    return JSON.parse(localStorage.getItem('application')) || [];
  } catch (error) {
    // Muestra el error en consola si ocurre alguno y retorna un array vacío
    console.error('Error:', error.message);
    return [];
  }
}
 
// Renderizar la lista de citas en el DOM
async function renderApplication() {
  // Obtiene el elemento UL o contenedor donde se mostrarán las citas
  const listaSolicitudes = document.getElementById('lista-solicitudes');
  // Limpia el contenido actual del contenedor
  listaSolicitudes.innerHTML = '';
  // Obtiene todas las citas almacenadas
  const application = await getApplication();
  // Recorre cada cita y la agrega al DOM
  application.forEach((solicitud, index) => {
    // Crea un elemento de lista para la cita
    const solicitudItem = document.createElement('li');
    solicitudItem.classList.add('cita-item');
    // Agrega el contenido HTML de la cita
    solicitudItem.innerHTML = `
      <strong>${solicitud.nombres}</strong><br>
      Apellidos: ${solicitud.apellidos}<br>
      FechaNacimiento: ${solicitud.fechaNacimiento}<br>
      LugarResidencia: ${solicitud.residencia}<br>
      Discapacidad: ${solicitud.discapacidad}<br>
      Telefono: ${solicitud.telefono}<br>
      Correo: ${solicitud.correo}<br>
      Estado: <span style="color: green;">${solicitud.estado}</span>
      <br>
      <button class="editar-solicitud" data-index="${index}">Editar</button>
      <button class="eliminar-solicitud" data-index="${index}">Eliminar</button>
    `;
    // Añade el elemento de la cita al contenedor
    listaSolicitudes.appendChild(solicitudItem);
  });
 
  // Asigna el evento click a todos los botones de eliminar
  document.querySelectorAll('.eliminar-solicitud').forEach(btn => {
    btn.addEventListener('click', async function () {
      // Obtiene el índice de la cita a eliminar
      const idx = this.getAttribute('data-index');
      // Llama a la función para eliminar la cita
      await deleteApplication(idx);
      // Vuelve a renderizar la lista de citas
      renderApplication();
    });
  });
 
  // Asigna el evento click a todos los botones de editar
  document.querySelectorAll('.editar-solicitud').forEach(btn => {
    btn.addEventListener('click', async function () {
      // Obtiene el índice de la cita a editar
      const idx = this.getAttribute('data-index');
      // Solicita al usuario el nuevo estado de la cita
      const nuevoEstado = prompt('Nuevo estado de la cita:', 'Agendada');
      // Si el usuario ingresa un estado, actualiza la cita
      if (nuevoEstado) {
        await updateApplication(idx, { estado: nuevoEstado });
        // Vuelve a renderizar la lista de citas
        renderApplication();
      }
    });
  });
}
 
// Espera a que el DOM esté cargado para asignar eventos y renderizar citas
document.addEventListener('DOMContentLoaded', function () {
  // Obtiene el formulario de citas
  const form = document.getElementById('contactForm');
  // Renderiza las citas existentes al cargar la página
  renderApplication();
 
  // Asigna el evento submit al formulario
  form.addEventListener('submit', async function (e) {
    // Previene el comportamiento por defecto del formulario (recargar la página)
    e.preventDefault();
 
    // Obtiene los valores de los campos del formulario
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const residencia = document.getElementById('residencia').value;
    const discapacidad = document.getElementById('discapacidad').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
 
    // Valida que todos los campos estén completos
    if (!nombres || !apellidos || !fechaNacimiento || !residencia || !discapacidad || !telefono || !correo) {
      alert('Por favor completa todos los campos');
      return;
    }
 
    // Crea el objeto de la nueva cita
    const applicationData = {
      nombres,
      apellidos,
      fechaNacimiento,
      residencia,
      discapacidad,
      telefono,
      correo,
      estado: 'Agendada'
    };
    // Llama a la función para crear la cita
    await createApplication(applicationData);
    // Limpia el formulario
    form.reset();
    // Vuelve a renderizar la lista de citas
    renderApplication();
  });
});
