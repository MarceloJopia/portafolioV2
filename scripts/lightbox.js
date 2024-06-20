document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const closeBtn = document.querySelector('.lightbox .close');

    document.querySelectorAll('.cardProyecto').forEach(card => {
        card.addEventListener('click', () => {
            const imageUrl = card.style.backgroundImage.slice(5, -2);
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');

            lightboxImage.src = imageUrl;
            lightboxTitle.textContent = title;
            lightboxDescription.textContent = description;

            lightbox.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
