
        function toggleMenu() {
        const menu = document.getElementById('mobileMenu');
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        }
        window.addEventListener('resize', () => {
         const menu = document.getElementById('mobileMenu');
         if (window.innerWidth > 768) {
         menu.style.display = 'none';
         }
        });
 