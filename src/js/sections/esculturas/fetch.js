
export async function getData() {
  const response = await fetch('js/sections/esculturas/data.json');
  const data = await response.json();
  return data;
}



 
// Function to render the sections
async function rendersections() {
    const sections = await getData();
    const container = document.getElementById('esculturas');
    
    if (!container) {
        console.error('Container element not found');
        return;
    }
 
    if (sections.length === 0) {
        container.innerHTML = `
            <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                <p>No sections found.</p>
            </div>
        `;
        return;
    }
      //limpiar el contenido del contenedor antes de agregar nuevos elementos
    container.innerHTML = sections.map(item => `
    <div class="esculturas">
        <div class="product-card">
            ${item.imagen ? `
                <div class="info">
                   <img src="${item.imagen}" alt="${item.nombre}">
                </div>
            ` : ''}
            <h4>${item.nombre}</h4>
            <p>$${item.precio.toLocaleString()}</p>
            <small>${item.descripcion}</small>
        </div>
    </div>
`).join('');

}