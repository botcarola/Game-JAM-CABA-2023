// Diálogos
const dialogos = [{
    texto: {
        0: 'Hola, ¿cómo estás?',
        1: 'jaa',
        2: '2sdsad'
    },
    personaje: 'Ana María',
    imagen: 'img/woman.png'

},
{
    texto: {
        0: 'Hola, ¿cómo estás?',
        1: 'jaa',
        2: '2sdsad'
    },
    personaje: 'Juan',
    imagen: 'img/man.png'

},
{
    texto: {
        0: 'Hola, ¿cómo estás?',
        1: 'jaa',
        2: '2sdsad'
    },
    personaje: 'Ana María',
    imagen: 'img/woman.png'
}];

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
}, 30);
}

// Método para avanzar al siguiente diálogo
function mostrarSiguienteDialogo() {
if (indiceDialogo < dialogos.length) {
    const dialogo = dialogos[indiceDialogo];
    textoDialogo.textContent = '';
    nombrePersonaje.textContent = dialogo.personaje;
    imagenPersonaje.src = dialogo.imagen; // Agregar esta línea
    mostrarTexto(`${dialogo.texto[0]}`);
    // ${dialogo.personaje}:
    indiceDialogo++;
    botonRetroceder.disabled = false;
} else {
    botonAvanzar.disabled = true;
}
}

// Método para retroceder al anterior diálogo
function mostrarDialogoAnterior() {
if (indiceDialogo > 1) {
    indiceDialogo--;
    textoDialogo.textContent = '';
    nombrePersonaje.textContent = dialogos[indiceDialogo - 1].personaje;
    imagenPersonaje.src = dialogos[indiceDialogo - 1].imagen;
    mostrarTexto(`${dialogos[indiceDialogo - 1].texto}`);
    // ${dialogos[indiceDialogo - 1].personaje}: 
}

if (indiceDialogo === 1) {
    botonRetroceder.disabled = true;
}
botonAvanzar.disabled = false;
}

botonAvanzar.addEventListener('click', mostrarSiguienteDialogo);
botonRetroceder.addEventListener('click', mostrarDialogoAnterior);

botonRetroceder.disabled = true;