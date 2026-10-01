const elementoZoom = document.querySelector('.zoom-elemento');

// Definimos los tamaños que quieres
const tamanoInicial = 500;  // Empieza en 500px
const tamanoFinal = 15000;  // Termina en 15000px para un zoom gigante

// Altura total de scroll sobre la que se desarrollará el efecto (puedes ajustarla si quieres que la animación sea más rápida o más lenta)
const alturaScrollMax = 1000; 

function actualizarZoom() {
    // Obtenemos los píxeles que el usuario ha bajado haciendo scroll
    let scrollTop = window.scrollY;
    
    // Calculamos el progreso de 0.0 (inicio) a 1.0 (final del recorrido)
    let progreso = scrollTop / alturaScrollMax;
    
    // Limitamos el progreso para que no baje de 0 ni suba de 1
    progreso = Math.max(0, Math.min(1, progreso));
    
    // Calculamos el tamaño actual interpolando entre 500 y 15000
    let anchoActual = tamanoInicial + (tamanoFinal - tamanoInicial) * progreso;
    
    // Aplicamos el nuevo ancho al elemento
    elementoZoom.style.width = anchoActual + 'px';
    
    // Solicitamos el siguiente frame para que vaya fluido
    requestAnimationFrame(actualizarZoom);
}

// Iniciamos la animación
requestAnimationFrame(actualizarZoom);
const botonAudio = document.getElementById('btn-audio');
const audioInstitucional = document.getElementById('audio-institucional');

botonAudio.addEventListener('click', () => {
    if (audioInstitucional.paused) {
        audioInstitucional.play();
        botonAudio.textContent = "Pausar Himno";
        botonAudio.classList.add("reproduciendo");
    } else {
        audioInstitucional.pause();
        botonAudio.textContent = "Himno Institucional";
        botonAudio.classList.remove("reproduciendo");
    }
});
const btnHamburguesa = document.getElementById('btnHamburguesa');
const navOverlay = document.getElementById('navOverlay');
const enlacesMenu = document.querySelectorAll('.enlace-menu');

// Abrir y cerrar menú al hacer clic en la hamburguesa
btnHamburguesa.addEventListener('click', () => {
    btnHamburguesa.classList.toggle('activo');
    navOverlay.classList.toggle('activo');
});

// Cerrar el menú automáticamente al hacer clic en cualquier opción
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        btnHamburguesa.classList.remove('activo');
        navOverlay.classList.remove('activo');
    });
});