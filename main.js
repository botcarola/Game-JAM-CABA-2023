// Botones Inicio
const start = document.querySelector('.start');
const load = document.querySelector('.load');
const settings = document.querySelectorAll('.settings');
const fullscreen = document.querySelector('.window');


// Botones configuración
const mute = document.querySelector('.mute');
const volumen = document.querySelector('#volumen');
const save = document.querySelector('.save');
const back = document.querySelector('.back');
const exit = document.querySelector('.exit');

// Elementos
const audio = document.querySelector('.audio');

// Pestañas
const inicio = document.querySelector('.inicio');
const configuracion = document.querySelector('.configuracion');
const novela = document.querySelector('.novela');

// Comprobar pestaña
let ultimaPantalla = 'inicio';

start.addEventListener('click', () => {
    inicio.style.display = 'none';
    novela.style.display = 'flex';

    ultimaPantalla = 'novela';
});

settings.forEach(setting => {
    setting.addEventListener('click', () => {
    inicio.style.display = 'none';
    novela.style.display = 'none';
    configuracion.style.display = 'block';
    });
});

save.addEventListener('click', () => {
    localStorage.setItem('mute', mute.checked);
    localStorage.setItem('volumen', volumen.value);
});

back.addEventListener('click', () => {
    inicio.style.display = 'none';
    configuracion.style.display = 'none';
    novela.style.display = 'flex';
});

// back.addEventListener('click', () => {
//     if (ultimaPantalla === 'novela') {
//         inicio.style.display = 'none';
//         configuracion.style.display = 'none';
//         novela.style.display = 'flex';
//     } else {
//         inicio.style.display = 'flex';
//         configuracion.style.display = 'none';
//         novela.style.display = 'none';
//     }
// });

// Volumen
if (localStorage.getItem('mute') === 'true') {
    mute.checked = true;
    audio.volume = 0;
    } else {
        mute.checked = false;
        audio.volume = localStorage.getItem('volumen') || 0.5;
        volumen.value = localStorage.getItem('volumen') || 0.5;
}



window.addEventListener('beforeunload', () => {
    if (!save.clicked) {
        audio.pause();
        localStorage.setItem('audioCurrentTime', audio.currentTime);
    }
});

if (localStorage.getItem('audioCurrentTime')) {
    audio.currentTime = localStorage.getItem('audioCurrentTime');
}

volumen.addEventListener('input', () => {
    if (!mute.checked) {
        audio.volume = volumen.value;
    }
});

mute.addEventListener('change', () => {
    if (mute.checked) {
        audio.volume = 0;
    } else {
        audio.volume = volumen.value;
    }
});

audio.play();

// Fulscreen
fullscreen.addEventListener('click', () => {
if (document.fullscreenElement) {
    document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});

// Salir
exit.addEventListener('click', () => {
    if (confirm("¿Está seguro de que desea salir?")) {
        window.close();
    }
});

// Diálogos
const dialogos = [
    {
        texto: 'Hola, ¿cómo estás?',
        personaje: 'Ana María',
        imagen: 'woman.png'

    },
    {
        texto: 'Estoy bien, gracias. ¿Y vos?',
        personaje: 'Juan',
        imagen: 'man.png'

    },
    {
        texto: 'Más o menos. Tuve un día complicado.',
        personaje: 'Ana María',
        imagen: 'woman.png'
    }
];

let indiceDialogo = 0;
// Atributos personaje
const imagenPersonaje = document.querySelector('.img');
const nombrePersonaje = document.querySelector('.name-empleada');
const textoDialogo = document.querySelector('.dialogo');

// Botones
const botonAvanzar = document.querySelector('.siguiente');
const botonRetroceder = document.querySelector('.anterior');

function mostrarTexto(texto) {
    let i = 0;
    const intervalo = setInterval(() => {
        textoDialogo.textContent += texto.charAt(i);
        i++;
        if (i > texto.length) {
            clearInterval(intervalo);
        }
    }, 50);
}

function mostrarSiguienteDialogo() {
    if (indiceDialogo < dialogos.length) {
        const dialogo = dialogos[indiceDialogo];
        textoDialogo.textContent = '';
        nombrePersonaje.textContent = dialogo.personaje;
        imagenPersonaje.src = dialogo.imagen; // Agregar esta línea
        mostrarTexto(`${dialogo.personaje}: ${dialogo.texto}`);
        indiceDialogo++;
        botonRetroceder.disabled = false;
    } else {
        botonAvanzar.disabled = true;
    }
}

function mostrarDialogoAnterior() {
    if (indiceDialogo > 1) {
        indiceDialogo--;
        textoDialogo.textContent = '';
        nombrePersonaje.textContent = dialogos[indiceDialogo - 1].personaje;
        imagenPersonaje.src = dialogos[indiceDialogo - 1].imagen;
        mostrarTexto(`${dialogos[indiceDialogo - 1].personaje}: ${dialogos[indiceDialogo - 1].texto}`);
    }

    if (indiceDialogo === 1) {
        botonRetroceder.disabled = true;
    }
    botonAvanzar.disabled = false;
}

botonAvanzar.addEventListener('click', mostrarSiguienteDialogo);
botonRetroceder.addEventListener('click', mostrarDialogoAnterior);

botonRetroceder.disabled = true;