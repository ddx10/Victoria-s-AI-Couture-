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
    function init3D(modelPath) {
        let scene, camera, renderer, model;

        // Crear la escena
        scene = new THREE.Scene();

        // Crear la cámara
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Crear el renderizador
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('3d-container').appendChild(renderer.domElement);

        // Añadir luz
        const light = new THREE.AmbientLight(0x404040);
        scene.add(light);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        // Cargar el modelo GLTF
        const loader = new THREE.GLTFLoader();
        loader.load(modelPath, function (gltf) {
            model = gltf.scene;
            scene.add(model);
        }, undefined, function (error) {
            console.error(error);
        });

        // Animar el modelo
        function animate() {
            requestAnimationFrame(animate);
            if (model) {
                model.rotation.y += 0.01;
            }
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

    // Agregar listeners a los elementos de la galería para mostrar el contenedor 3D con el modelo correspondiente
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const modelPath = this.getAttribute('data-model');
            document.getElementById('3d-container').scrollIntoView({ behavior: 'smooth' });
            init3D(modelPath);
        });
    });
});
