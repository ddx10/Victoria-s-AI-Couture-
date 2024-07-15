document.addEventListener('DOMContentLoaded', function () {
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

    // Inicializar la escena 3D
    function init3D() {
        let scene, camera, renderer, cube;

        // Crear la escena
        scene = new THREE.Scene();

        // Crear la cámara
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Crear el renderizador
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('3d-container').appendChild(renderer.domElement);

        // Crear el cubo
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animar el cubo
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();

        // Ajustar el tamaño del renderizador al cambiar el tamaño de la ventana
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    init3D();

    // Agregar listeners a los elementos de la galería para mostrar el contenedor 3D
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('3d-container').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
