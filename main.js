
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


const selectors = {
  mainMenu: document.querySelector("#main-menu")
}

selectors.mainMenu.style.display = "none"
