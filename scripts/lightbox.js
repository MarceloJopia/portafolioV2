document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxDate = document.getElementById('lightbox-date');
    const closeBtn = document.querySelector('.lightbox .close');

    document.querySelectorAll('.cardProyecto').forEach(card => {
        card.addEventListener('click', () => {
            const imageUrl = card.style.backgroundImage.slice(5, -2);
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description')
            const date = card.getAttribute('data-date')
            lightboxImage.style.backgroundImage = `url(${imageUrl})`;
            lightboxTitle.textContent = title;
            lightboxDescription.innerHTML = description;
            lightboxDate.textContent = date;

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