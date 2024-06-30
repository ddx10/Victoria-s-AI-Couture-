document.addEventListener('DOMContentLoaded', function () {
    const messages = [
        "Someone purchased this product!",
        "Someone liked this product!",
        "This item is trending now!",
        "Hurry, only a few left in stock!"
    ];

    const imagePaths = [
        "https://via.placeholder.com/24", // Imagen pequeña de prueba
        "https://via.placeholder.com/24", // Imagen pequeña de prueba
        "https://via.placeholder.com/24", // Imagen pequeña de prueba
        "https://via.placeholder.com/24"  // Imagen pequeña de prueba
    ];

    function createPopup(message, imgSrc) {
        const popup = document.createElement('div');
        popup.className = 'popup';

        const img = document.createElement('img');
        img.src = imgSrc;
        img.onerror = function() {
            console.error(`Error loading image: ${imgSrc}`);
        };

        const text = document.createElement('span');
        text.textContent = message;

        popup.appendChild(img);
        popup.appendChild(text);
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('show');
        }, 100);

        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 500);
        }, 5000);
    }

    function showRandomPopup() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];
        const randomImage = imagePaths[randomIndex];
        createPopup(randomMessage, randomImage);
    }

    setInterval(showRandomPopup, 20000);
});

