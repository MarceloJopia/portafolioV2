document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cardProyecto');
    const modals = document.querySelectorAll('.lightbox-modal');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const modal = document.getElementById(target);
            
            if (modal) {
                modal.style.display = 'block';
                modal.querySelector('.lightbox-close').addEventListener('click', function() {
                    modal.style.display = 'none';
                });

                // Agregar evento para cerrar modal al hacer clic fuera de él
                modal.addEventListener('click', function(event) {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                    }
                });
            }
        });
    });

    // Cerrar modal si se hace clic fuera de cualquier modal abierto
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('lightbox-modal')) {
            event.target.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cardProyecto');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const modal = document.getElementById(target);
            const slider = modal.querySelector('.lightbox-slider');
            const images = slider.querySelectorAll('img');
            const prevButton = modal.querySelector('.lightbox-prev');
            const nextButton = modal.querySelector('.lightbox-next');
            let currentSlide = 0;

            // Función para mostrar la imagen actual
            function showSlide(index) {
                images.forEach((img, i) => {
                    if (i === index) {
                        img.style.display = 'block';
                    } else {
                        img.style.display = 'none';
                    }
                });
            }

            // Mostrar la primera imagen al abrir el modal
            showSlide(currentSlide);

            // Botón siguiente
            nextButton.addEventListener('click', function() {
                currentSlide = (currentSlide + 1) % images.length;
                showSlide(currentSlide);
            });

            // Botón anterior
            prevButton.addEventListener('click', function() {
                currentSlide = (currentSlide - 1 + images.length) % images.length;
                showSlide(currentSlide);
            });

            // Cerrar modal al hacer clic fuera del contenido
            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });

            // Cerrar modal al hacer clic en el botón de cerrar
            modal.querySelector('.lightbox-close').addEventListener('click', function() {
                modal.style.display = 'none';
            });

            // Agregar evento para cerrar modal al presionar ESC
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    modal.style.display = 'none';
                }
            });
        });
    });
});
