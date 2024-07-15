document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "Someone purchased this product!",
        "Someone liked this product!",
        "This item is trending now!",
        "Hurry, only a few left in stock!"
    ];

    const imagePaths = [
        "images/image1.png",
        "images/image2.png",
        "images/image3.png",
        "images/image4.png",
        "images/image5.png",
        "images/image6.png",
        "images/image7.png",
        "images/image8.png"
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

    // Testimonios Animados
    const reviews = document.querySelectorAll('.review');
    let currentReview = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            if (i === index) {
                review.classList.add('show');
            } else {
                review.classList.remove('show');
            }
        });
    }

    function nextReview() {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    }

    setInterval(nextReview, 5000);

    // Inicializar el primer testimonio
    showReview(currentReview);
});
