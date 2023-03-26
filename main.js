
// Salir
document.querySelector('.exit').addEventListener('click', function() {
    if (confirm("¿Está seguro de que desea salir?")) {
        window.close();
    }
});

// Config.
const settings = document.querySelector('.settings');
const back = document.querySelector('.back');

const inicio = document.querySelector('.inicio');
const configuracion = document.querySelector('.configuracion');

settings.addEventListener('click', () => {
  inicio.style.display = 'none';
  configuracion.style.display = 'block';
});

back.addEventListener('click', () => {
    inicio.style.display = 'flex';
    configuracion.style.display = 'none';
});

// Volumen
const audio = document.querySelector('.audio');
const volumen = document.querySelector('#volumen');
const mute = document.querySelector('.mute');
const save = document.querySelector('.save');


if (localStorage.getItem('mute') === 'true') {
    mute.checked = true;
    audio.volume = 0;
} else {
    mute.checked = false;
    audio.volume = localStorage.getItem('volumen') || 0.5;
    volumen.value = localStorage.getItem('volumen') || 0.5;
}

save.addEventListener('click', () => {

    localStorage.setItem('mute', mute.checked);
    localStorage.setItem('volumen', volumen.value);
});


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

// Pantalla completa
const fullscreen = document.querySelector('.window');

fullscreen.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});


const contenedores = {
  mainMenu: document.querySelector("#main-menu"),
  notificaciones: document.querySelector(".notificaciones")
}

const interfazTablas = {
  carouselEmpleadas: document.querySelector("#cards-em"),
  descripcionEmpleadas: document.querySelector("#descripcion-empleadas")
}
contenedores.mainMenu.style.display = "none"

// NOTIFICACIONES

const notificacion = () => {
  const dialogo = `
      <div class="notificacion">
          <div class="notificacion-img">
              <img src="./assets/avatares/aylen1.jpg" alt="chat con aylen">
          </div>
          <p>
              ¡Hola, bienvenida a la oficina! Hoy tenemos un par de casos interesantes.
          </p>
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
                <h2>
                    ${ value.nombre }
                <h2>
            </div>
        `
    }, "")    
    return nodos
}

const descripcionAHtml = ( data ) => {    
    return `
        <div class="info-empleada">
            <h2>
                Descripción:
            <h2>
            <p class="descripcion-texto">
                ${ data.descripcion }
            </p>
            <div class="atributos-empleada">
                <h2>
                    Atributo: ${ data.atributos[0].tipo }
                <h2>
            </div>
        </div>
    `   
}

const descripcionVacia = ( ) => {
  return `
  <div class="info-empleada">
      <h2>
          Descripción:
      <h2>
      <p class="descripcion-texto">
          Dedicó gran parte de su vida a su familia y al trabajo doméstico. Actualmente se encuentra en el segundo año de la carrera Psicología. Busca acceder a un trabajo formal, su deseo es poder proveerse a sí misma y a su familia.
      </p>
      <div class="atributos-empleada">
          <h2>
              Atributo: Paciencia
          <h2>          
      </div>
  </div>
`  
}

interfazTablas.descripcionEmpleadas.innerHTML = descripcionVacia()

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
            }           
        }      
    } 
}

