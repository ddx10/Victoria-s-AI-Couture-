document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const overlayMessage = item.querySelector('.overlay-message');
        
        img.addEventListener('mouseenter', () => {
            overlayMessage.style.opacity = '1';
        });

        img.addEventListener('mouseleave', () => {
            overlayMessage.style.opacity = '0';
        });
    });
});

