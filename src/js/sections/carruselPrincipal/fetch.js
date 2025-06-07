export async function getData() {
  try {
    const response = await fetch("js/sections/carruselPrincipal/data.json");
    if (!response.ok) {
      throw new Error("No se pudo cargar el carrusel.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener el carrusel:", error);
    return [];
  }
}
