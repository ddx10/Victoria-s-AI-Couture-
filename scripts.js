document.addEventListener('DOMContentLoaded', function () {
    const messages = [
        "Someone purchased this product!",
        "Someone liked this product!",
        "This item is trending now!",
        "Hurry, only a few left in stock!"
    ];

    function createPopup(message) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = message;
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
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        createPopup(randomMessage);
    }

    setInterval(showRandomPopup, 20000);
});
