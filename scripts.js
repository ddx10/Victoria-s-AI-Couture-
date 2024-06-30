document.addEventListener('DOMContentLoaded', function () {
    const messages = [
        { text: "Someone purchased this product!", img: "images/user1.jpg" },
        { text: "Someone liked this product!", img: "images/user2.jpg" },
        { text: "This item is trending now!", img: "images/user3.jpg" },
        { text: "Hurry, only a few left in stock!", img: "images/user4.jpg" }
    ];

    function createPopup(message) {
        const popup = document.createElement('div');
        popup.className = 'popup';

        const img = document.createElement('img');
        img.src = message.img;

        const text = document.createElement('span');
        text.textContent = message.text;

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
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        createPopup(randomMessage);
    }

    setInterval(showRandomPopup, 20000);
});
