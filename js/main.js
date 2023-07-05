// Funcion que controla la cantidad de elementos que se muestran en el display

function mostrarProductos() {
    const contenedor = document.querySelectorAll('.product-container');
    const anchoPantalla = window.innerWidth;

    if (anchoPantalla >= 1024 && anchoPantalla <= 1280) {
        for (let i = 0; i < contenedor.length; i++) {
        const elementos = contenedor[i].children;
        for (let j = 0; j < elementos.length; j++) {
            if (j < 5) {
            elementos[j].style.display = 'block';
            } else {
            elementos[j].style.display = 'none';
            }
        }
        }
    } else if (anchoPantalla >= 768 && anchoPantalla <= 1024) {
        for (let i = 0; i < contenedor.length; i++) {
        const elementos = contenedor[i].children;
        for (let j = 0; j < elementos.length; j++) {
            if (j < 4) {
            elementos[j].style.display = 'block';
            } else {
            elementos[j].style.display = 'none';
            }
        }
        }
    } else if (anchoPantalla >= 180 && anchoPantalla <= 768) {
        for (let i = 0; i < contenedor.length; i++) {
        const elementos = contenedor[i].children;
        for (let j = 0; j < elementos.length; j++) {
            if (j < 4) {
            elementos[j].style.display = 'flex';
            } else {
            elementos[j].style.display = 'none';
            }
        }
        }
    } else {
        for (let i = 0; i < contenedor.length; i++) {
        const elementos = contenedor[i].children;
        for (let j = 0; j < elementos.length; j++) {
            elementos[j].style.display = 'block';
        }
        }
    }
    }

    mostrarProductos();

    // Escucha el evento de redimensionamiento de la ventana y vuelve a ejecutar la función
    window.addEventListener('resize', mostrarProductos);


