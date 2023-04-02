// Botones Inicio
const start = document.querySelector('.start');
const load = document.querySelector('.load');
const settings = document.querySelector('.settings');
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
const page = document.querySelector('.page');
const sonidoTablas = document.querySelector('.sonidoTablas');

// Pestañas
const menu = document.querySelector('#main-menu');
const overlay = document.querySelector('.overlay');
const inicio = document.querySelector('.inicio');
const configuracion = document.querySelector('.configuracion');
const novela = document.querySelector('.novela');

// TOTAL
const mainMenu = document.querySelector('#main-menu');
const tablero = document.querySelector('#interfaz-tablas');

// FORM aside
const formStage1 = document.querySelector(".f-stage-1")
const formStage2 = document.querySelector(".f-stage-2")
const formStage3 = document.querySelector(".f-stage-3")


if ( !localStorage.getItem("stageInicio")) {
    localStorage.setItem("stageInicio", JSON.stringify(1))    

} 

if ( localStorage.getItem("stageInicio") === "1") {
    formStage1.style.display = "flex"
    formStage2.style.display = "none"
    formStage3.style.display = "none"
    
} else if ( localStorage.getItem("stageInicio") === "2") {
    formStage1.style.display = "none"
    formStage2.style.display = "flex"
    formStage3.style.display = "none"

} else if ( localStorage.getItem("stageInicio") === "3") {
    formStage1.style.display = "none"
    formStage2.style.display = "none"
    formStage3.style.display = "flex"

}


// Botón para empezar una nueva partida
start.addEventListener('click', () => {
    localStorage.setItem("partida-iniciada", JSON.stringify(true))    
    overlay.classList.add('fadeIn');
    page.play();
    setTimeout(function(){
        mainMenu.style.display = 'none';
        tablero.style.display = 'flex';

        overlay.classList.remove('fadeIn');
        overlay.classList.add('fadeOut');
    }, 1000)
    setTimeout(function(){
        overlay.classList.remove('fadeOut');
        sonidoTablas.play()
    }, 2000)
    audio.pause()
    
});

// validar partida iniciada

if ( localStorage.getItem("partida-iniciada") === "true") {
    mainMenu.style.display = "none"
    tablero.style.display = "block"
}

settings.addEventListener('click', () => {
    overlay.classList.add('fadeIn');
    page.play();
    setTimeout(function(){
        inicio.style.display = 'none';
        configuracion.style.display = 'block';

        overlay.classList.remove('fadeIn');
        overlay.classList.add('fadeOut');
    }, 1000)
    setTimeout(function(){
        overlay.classList.remove('fadeOut');
    }, 2000)
});

// Botón para volver hacia atrás
back.addEventListener('click', (event) => {
    event.preventDefault();
    page.play();
    overlay.classList.add('fadeIn');
    setTimeout(function(){
        inicio.style.display = 'block';
        configuracion.style.display = 'none';

        overlay.classList.remove('fadeIn');
        overlay.classList.add('fadeOut');
    }, 1000)
    setTimeout(function(){
        overlay.classList.remove('fadeOut');
    }, 2000)
})

// Volumen Modal
const audio = document.querySelector('.audio');
const modalContainer = document.querySelector('.modal__container');
const modal = document.querySelector('.modal');
const playButton = document.querySelector('.play-music');
const stopButton = document.querySelector('.stop-music');

modalContainer.style.display = 'block';

playButton.addEventListener('click', function () {
    audio.currentTime = 0;
    audio.play();
    modalContainer.style.display = 'none';
})

stopButton.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0;
    modalContainer.style.display = 'none';
});

// Preloader
window.addEventListener('load', function() {
    setTimeout(() => {
        preloader.classList.add("fadeLoad");
    }, 1000);
    setTimeout(() => {
        preloader.style.display = "none"
    }, 1800);
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

const jornada = document.querySelector(".jornada");

jornada.onclick = () => {
    document.querySelector("aside").style.display = "flex"
}

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
            <div class="container-notificacion">
                <p class="texto-notificacion">
                    ¡Bienvenida a la oficina! Lee las historias y asigna a las profesionales adecuadas para que las consultas sean exitosas. La toma de decisiones impactará en tu agencia.
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
    

const validarColorAtributo = value => {   

    let nodo = ""       

    value.atributos.forEach( element => {        

        if ( element === "Egoísta" || element === "Empática") {
            nodo += `<li class="atributo-rojo"> ${ element } </li>`
    
        } else if ( element === "Paciente" || element === "Ansioso") {
            nodo += `<li class="atributo-amarillo"> ${ element } </li>`
    
        } else if ( element === "Inseguro" || element === "Determinada") {
            nodo += `<li class="atributo-verde"> ${ element } </li>`
    
        } else if ( element === "Inflexible" || element === "Elocuente") {
            nodo +=`<li class="atributo-azul"> ${ element } </li>`
        }
    })     
    return nodo
}
        


const atributoAHtml = ( data ) => {      

    return `
        <div class="atributos-empleada">            
            <ul class="texto-atributo">            
                ${
                    validarColorAtributo(data)
                }
            </ul>
        </div>
    `   
}

const descripcionVacia = ( ) => {
    return `
    <div class="info-empleada">
        <p class="descripcion-texto">
        Es venezolana, de 42 años, casada hace 20 años, con 2 hijos. Se recibió hace años de psicóloga, pero jamás ejerció porque decidió quedarse en casa a criarlos. Ahora que ya han crecido, desea comenzar su profesión y aportar al hogar económicamente. Su sueño es comprarse una casa.
        </p>        
    </div>
`  
}

const atributoVacio = () => {
    return `
    <div class="atributos-empleada">
            <span class="texto-atributo">                             
                <span class="atributo-amarillo"> Paciente </span>
            </span>
        </div>
    `
    
}

interfazTablas.descripcionEmpleadas.innerHTML = descripcionVacia()
interfazTablas.atributoEmpleadas.innerHTML = atributoVacio()

const getInfoEmpleada = ( id, data ) => data.find( element => element.id === Number(id.slice(9)))


const descripcionCards = ( cards, data ) => {

    for ( let i = 0; i < cards.length; i++ ) {
        cards[i].onmouseover = ( event ) => {            
            if ( event.target.classList.contains("img-empleada")) {
                const info = getInfoEmpleada( cards[i].id, data)              
                interfazTablas.descripcionEmpleadas.innerHTML = info ? descripcionAHtml(info) : descripcionVacia()
                interfazTablas.atributoEmpleadas.innerHTML = info ? atributoAHtml(info) : atributoVacio()
            }           
        }      
    } 
}

const empleadasStage1 = ( empleadas ) => empleadas.filter( element => element.fase === 1 )
const empleadasStage2 = ( empleadas ) => empleadas.filter( element => element.fase === 2 )
const obtenerLStorage = clave => JSON.parse( localStorage.getItem( clave ) )

// CARDS CLIENTES



const clientesCards = data => {   

    return data.reduce( ( acc, element ) => {
        return acc + `
        <div class="card-cliente">
            <div class="container-img-cliente">
                <img src=${element.avatar} alt="cliente ${element.nombre}" >
            </div>    
            <p>
                ${ element.descripcion }
            </p>            
        </div>
    `
    }, "") 
}

// dasd

// FUNCIÓN QUE MONTA TODOS LOS STAGES

const contenedorClientes = document.querySelector(".img-clientes")


const cardsEmpleadas = ( dataEmpleadas ) => {

    let empleadasInicial = empleadasStage1(dataEmpleadas)    

    if ( obtenerLStorage("stageInicio") === 1  ) {

        interfazTablas.carouselEmpleadas.innerHTML = cardsAHtml(empleadasInicial)        
        descripcionCards(document.querySelectorAll(".card-empleada"), dataEmpleadas)
        contenedorClientes.innerHTML = clientesCards(empleadasStage1(clientesAgencia))

    } else if ( obtenerLStorage("stageInicio") === 2  ) {
        
        interfazTablas.carouselEmpleadas.innerHTML = cardsAHtml(empleadasInicial.concat(empleadasStage2(dataEmpleadas)))
        descripcionCards(document.querySelectorAll(".card-empleada"), dataEmpleadas)

    } else if ( obtenerLStorage("stageInicio") === 3  ) {
    
        interfazTablas.carouselEmpleadas.innerHTML = cardsAHtml(dataEmpleadas)
        descripcionCards(document.querySelectorAll(".card-empleada"), dataEmpleadas)
    }
}

cardsEmpleadas(empleadasAgencia)

// ASIGNACIÓN

const cerrarAsideAsignacion = document.querySelector("#close-j-s1")

cerrarAsideAsignacion.onclick = () => {
    document.querySelector("aside").style.display = "none"
}

// Inicializar visual novel 

const selectS1CasoMain = document.querySelector("#select-caso-mariano")
const selectS1CasoSec = document.querySelector("#select-caso-david")

const jornadaStage1 = ( main, subcaso, stage ) => {
    localStorage.setItem( "jornadaPrimerStage", JSON.stringify( {
        casoMain: main,
        subcaso: subcaso,
        stageActual: stage
    }))
}

document.querySelector(".f-stage-1").onsubmit = e => {
    e.preventDefault()

    if (selectS1CasoMain.value === selectS1CasoSec.value) {
        selectS1CasoMain.style.border = "1px solid red"
        selectS1CasoSec.style.border = "1px solid red"
    } else {
        if (selectS1CasoMain.value === "e-1") {
            jornadaStage1("Ana María", "Aylén", 1)
        } else if (selectS1CasoMain.value === "e-2") {
            jornadaStage1("Aylén", "Ana María", 1)
        }
        overlay.classList.add('fadeIn');
        setTimeout(function () {
            mainMenu.style.display = 'none';
            tablero.style.display = 'flex';

            overlay.classList.remove('fadeIn');
            overlay.classList.add('fadeOut');
        }, 5000)        
        setTimeout(() => {
            window.location.href = "novela.html"
        }, 1000)
    }
}

