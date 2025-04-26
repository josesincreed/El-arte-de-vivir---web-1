
        const track = document.getElementById('carouselTrack');
        const images = track.querySelectorAll('img');
        let currentIndex = 0;
        const total = images.length;
      
        function updateSlide() {
          track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
      
        function moveSlide(direction) {
          currentIndex = (currentIndex + direction + total) % total;
          updateSlide();
          resetAutoSlide();
        }
      
        // Auto deslizar cada 10 segundos
        let autoSlide = setInterval(() => {
          moveSlide(1);
        }, 10000);
      
        function resetAutoSlide() {
          clearInterval(autoSlide);
          autoSlide = setInterval(() => {
            moveSlide(1);
          }, 10000);
        }
   