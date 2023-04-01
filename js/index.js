// Botones Inicio
const start = document.querySelector('.start');
const load = document.querySelector('.load');
const settings = document.querySelectorAll('.settings');
const fullScreen = document.querySelector('.window');


// Botones configuración
const mute = document.querySelector('.mute');
const volumen = document.querySelector('#volumen');
const save = document.querySelector('.save');
const back = document.querySelector('.back[data-page="menu"]');
const exit = document.querySelector('.exit');

// Elementos
const cuerpo = document.body;
const preloader = document.querySelector(".preloader");

// Pestañas
const inicio = document.querySelector('.inicio');
const configuracion = document.querySelector('.configuracion');
const novela = document.querySelector('.novela');

// TOTAL
const mainMenu = document.querySelector('#main-menu');
const tablero = document.querySelector('#interfaz-tablas');

// Comprobar pestaña
let ultimaPantalla = 'inicio';
let pantallaAnterior = 'inicio';

// Botón para empezar una nueva partida
start.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    tablero.style.display = 'flex';

    pantallaAnterior = ultimaPantalla;
    ultimaPantalla = 'tablero';
});

// Botón para acceder a configuración
settings.forEach(setting => {
    setting.addEventListener('click', () => {
    pantallaAnterior = ultimaPantalla;
    ultimaPantalla = 'configuracion';
    
    inicio.style.display = 'none';
    novela.style.display = 'none';
    configuracion.style.display = 'block';
    });
});

// Botón para guardar
let guardarClicked = false;
save.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.setItem('mute', mute.checked);
    localStorage.setItem('volumen', volumen.value);
    guardarClicked = true;
});

// Botón para volver hacia atrás
back.addEventListener('click', (event) => {
    event.preventDefault();
    if (pantallaAnterior === 'inicio') {
        // Si la pantalla anterior fue inicio, redirigir al usuario a la pantalla de inicio
        inicio.style.display = 'block';
        novela.style.display = 'none';
        configuracion.style.display = 'none';
    } else if (pantallaAnterior === 'novela') {
        // Si la pantalla anterior fue novela, redirigir al usuario a la pantalla de novela
        inicio.style.display = 'none';
        novela.style.display = 'flex';
        configuracion.style.display = 'none';
    } else {
        // Si la pantalla anterior no es ni inicio ni novela, redirigir al usuario a la pantalla de inicio
        inicio.style.display = 'block';
        novela.style.display = 'none';
        configuracion.style.display = 'none';
    }

    // Actualizar el valor de la pantalla actual y la pantalla anterior
    ultimaPantalla = pantallaAnterior;
    pantallaAnterior = cuerpo.dataset.pagina;
});

// Volumen Modal
const audio = document.querySelector('.audio');
const modalContainer = document.querySelector('.modal__container');
const modal = document.querySelector('.modal');
const playButton = document.querySelector('.play-music');
const stopButton = document.querySelector('.stop-music');

if (!localStorage.getItem('modalActive')) {
    modalContainer.style.display = 'block';

    playButton.addEventListener('click', function() {
        audio.currentTime = 0;
        audio.play();
        modalContainer.style.display = 'none';
    });

    stopButton.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
        modalContainer.style.display = 'none';
    });

    localStorage.setItem('modalActive', true);
} else {
    modalContainer.style.display = 'none';
}

// Preloader
window.addEventListener('load', function() {
    setTimeout(() => {
        preloader.classList.add("fadeOut");
    }, 1000);
});

// Volumen
// Nos preguntamos si el volumen está muteado para luego definirle un volumen
if (localStorage.getItem('mute') === 'true') {
    mute.checked = true;
    audio.volume = 0;
    volumen.value = 0;
} else {
    mute.checked = false;
    audio.volume = localStorage.getItem('volumen') || 0.5;
    volumen.value = localStorage.getItem('volumen') || 0.5;
}

// 
window.addEventListener('beforeunload', (event) => {
    if(!back){
        audio.pause();
        localStorage.setItem('audioCurrentTime', audio.currentTime);
        localStorage.setItem('mute', mute.checked);
        localStorage.setItem('volumen', audio.volume);
    }
});

if (localStorage.getItem('audioCurrentTime')) {
    audio.currentTime = localStorage.getItem('audioCurrentTime');
}

// Barra de volumen
volumen.addEventListener('input', () => {
    if (!mute.checked) {
        audio.volume = volumen.value;
    } else {
        volumen.value = audio.volume;
    }
    localStorage.setItem('volumen', audio.volume);
});

// Checkbox para mutear
mute.addEventListener('change', () => {
    if (mute.checked) {
        audio.volume = 0;
        volumen.value = audio.volume;
    } else {
        audio.volume = volumen.value;
    }
    localStorage.setItem('mute', mute.checked);
});

// audio.play();

// Fulscreen
fullScreen.addEventListener('click', () => {
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



// Acceder a tablero (jornada)
// let objeto = {
//     stageActual: 1,
//     empleadaCasoMain: 'Ana María',
//     clienteCasoMain: 'Roberto',
//     clienteCasoSecundarioA: 'Roberto',
//     empleadaCasoSecundarioA: 'Ana María'
// };

// const objetoJSON = JSON.stringify(objeto);

// const jornada = document.querySelector(".jornada");

// jornada.addEventListener('click', empezarJornada);


// function empezarJornada() {
//     window.location.href = 'novela.html';
//     localStorage.setItem('miObjeto', objetoJSON);
// }








// TABLERO

const contenedores = {
    mainMenu: document.querySelector("#main-menu"),
    notificaciones: document.querySelector(".notificaciones")
}

const interfazTablas = {
    carouselEmpleadas: document.querySelector("#cards-em"),
    descripcionEmpleadas: document.querySelector("#descripcion-empleadas"),
    atributoEmpleadas: document.querySelector("#atributo-empleadas")
}


// NOTIFICACIONES

const notificacion = () => {
    const dialogo = `
        <div class="notificacion">
            <div class="notificacion-img">
                <img src="./assets/avatares/aylen1.jpg" alt="chat con aylen">
            </div>
            <div class="container-notificacion">
                <p class="texto-notificacion">
                    ¡Bienvenida a la oficina, Hoy tenemos un par de casos interesantes!
                </p>
            </div>
            
        </div>
    `
    contenedores.notificaciones.innerHTML = dialogo
}

notificacion()

// TABLA EMPLEADAS

const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

const getData = async ( url ) => {
    const res = await fetch(url)
    const info = await res.json()
    return info
} 

const cardsAHtml = ( data ) => {
    const nodos = data.reduce( ( acc, value ) => {
        return acc + `
            <div class="swiper-slide card-empleada" id="empleada-${ value.id }">
                <div class="container-img">
                    <img class="img-empleada" src=${ value.avatar } alt="avatar de ${ value.nombre }">
                </div>                
                <span class="nombres">
                    ${ value.nombre }
                </span>
            </div>
        `
    }, "")    
    return nodos
}

const descripcionAHtml = ( data ) => {    
    return `
        <div class="renglon"></div>
        <div class="info-empleada">
            <p class="descripcion-texto">
                ${ data.descripcion }
            </p>
        </div>
    `   
}

const atributoAHtml = ( data ) => {    
    return `
        <div class="atributos-empleada">
            <span class="texto-atributo">
                Atributo: <span class="especial">${ data.atributos[0].tipo }</span>
            </span>
        </div>
    `   
}

const descripcionVacia = ( ) => {
    return `
    <div class="info-empleada">
        <p class="descripcion-texto">
        Es venezolana, de 42 años, casada hace 20 años, con 2 hijos. Se recibió hace años de psicóloga, pero jamás ejerció porque decidió quedarse en casa a criarlos. Ahora que ya han crecido, desea comenzar su profesión y aportar al hogar económicamente. Su sueño es comprarse una casa.
        </p>
        <div class="atributos-empleada">
            <span class="texto-atributo">
                Atributo: Paciente
            </span>
        </div>
    </div>
`  
}

interfazTablas.descripcionEmpleadas.innerHTML = descripcionVacia()
interfazTablas.atributoEmpleadas.innerHTML = descripcionVacia()

const getInfoEmpleada = ( id, data ) => data.find( element => element.id === Number(id.slice(9)))

getData("./assets/data/empleadas.json")
.then( data => {
    interfazTablas.carouselEmpleadas.innerHTML = cardsAHtml(data)
    descripcionCards(document.querySelectorAll(".card-empleada"), data)
})

const descripcionCards = ( cards, data ) => {
    console.log(cards)
    for ( let i = 0; i < cards.length; i++ ) {
        cards[i].onmouseover = ( event ) => {
            if ( event.target.classList.contains("img-empleada")) {
                const info = getInfoEmpleada( cards[i].id, data)              
                interfazTablas.descripcionEmpleadas.innerHTML = info ? descripcionAHtml(info) : descripcionVacia()
                interfazTablas.atributoEmpleadas.innerHTML = info ? atributoAHtml(info) : descripcionVacia()
            }           
        }      
    } 
}