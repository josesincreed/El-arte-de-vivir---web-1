import { getData } from "./sections/carruselPrincipal/fetch.js";

document.addEventListener("DOMContentLoaded", async () => {
  const track = document.getElementById("carouselTrack");
  const data = await getData();

  if (!track || data.length === 0) return;

  // Renderizar slides
  data.forEach(slide => {
    const div = document.createElement("div");
    div.classList.add("slide");
    div.innerHTML = `
      <img src="${slide.imagen}" alt="${slide.alt}">
      <div class="overlay">
        <h2>${slide.titulo}</h2>
        <p>${slide.descripcion}</p>
        <a href="${slide.botonEnlace}" class="${slide.botonClase}">${slide.botonTexto}</a>
      </div>
    `;
    track.appendChild(div);
  });

  // Lógica de movimiento automático
  let currentIndex = 0;
  const total = data.length;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + total) % total;
    updateSlide();
    resetAutoSlide();
  }

  let autoSlide = setInterval(() => {
    moveSlide(1);
  }, 7000);

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      moveSlide(1);
    }, 7000);
  }
});
