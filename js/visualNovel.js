localStorage.setItem("stage", 1) // --> acá va función que baja info del objeto subido desde la pantalla principal

let indice = 0
let puntaje = []
let stage = JSON.parse(localStorage.getItem("stage"))
let empleada
const textBox = document.querySelector(".caja-dialogos")
const next = document.querySelector(".siguiente")
// agregar botón que diga :" volver al espacio común " --> se ejecuta animación y vuelve al tablero
// hay que deshabilitar el botón next cuando hay opciones de dialogo, sino nos arruinan la UX



// Acá se generan los diálogos y se aclara el nombre

const renderDialogo = value => {
    return `
        <h2>
            ${ value }
        </h2>
    `
}

// Acá se generan los botones de las opciones

const renderDecisiones = value => {
    return value.reduce(( acc, element  ) => {
        return acc + `
            <button class="respuesta" id=${ element.puntaje }>
                ${ element.opcion }
            </button>
        `
    }, "")
}

const verificarTipoDeDialogo = valor => {
    if ( typeof valor == "string" ) {
        next.style.display = "block"
        textBox.innerHTML = renderDialogo( valor ) 
        indice++
    } else {
        next.style.display = "none"
        textBox.innerHTML = renderDecisiones( valor)        
        indice++
        
    }
}

const botonAn = document.querySelector(".anterior")
const botonSigu = document.querySelector(".siguiente")
const botonConf = document.querySelector(".settings")

botonConf.onclick = function() {
    window.location.href = "index.html";
};

// document.querySelector(".iniciar").addEventListener('click', () => {
//     botones.style.visibility = "visible"
// });

const verificarIndice = ( i, array, e ) => {
    if ( e.target.className.includes("siguiente") || e.target.className.includes("respuesta") || e.target.className.includes("iniciar")) {
        document.querySelector(".iniciar").style.display = "none"
        botonAn.style.visibility = "visible"
        botonSigu.style.visibility = "visible"
        botonConf.style.visibility = "visible"
        const longitudArray = array.length 
        verificarTipoDeDialogo( array[i].value )

        if ( indice == longitudArray ) {            
            document.querySelector(".siguiente").style.display = "none"
        }      
    }
}


const subirPuntaje = ( ronda ) => localStorage.setItem(`stage-${ ronda}` , JSON.stringify( puntaje) )
const obtenerPuntaje = clave => JSON.parse(localStorage.getItem( clave ))

puntaje = obtenerPuntaje(`stage-${stage}`) || []

const puntajePorDecision = e => {
    
    if ( e.target.id == 0 ){        
        puntaje.push(0)         
        subirPuntaje( stage)
    } else if ( e.target.id == 1 ) {         
        puntaje.push(1) 
        subirPuntaje( stage) 
    } else if ( e.target.id == 2 ) {         
        puntaje.push(2) 
        subirPuntaje( stage)        
    }
}

let cont = 0;
const validarDecisiones = ( i, array , e) => {
    if ( e.target.className.includes("respuesta")){       
        puntajePorDecision(e) 
        verificarIndice(i, array, e)
        cont++;
        console.log(cont)
    }
    if (cont === 3){
        document.querySelector('.backTablas').style.display = "block"
        console.log(cont)
    }
}

document.onclick = e => {
    verificarIndice(indice, stageUnoAylen, e)
    validarDecisiones( indice, stageUnoAylen, e)
}


document.querySelector('.backTablas').addEventListener('click', () => {
    document.querySelector('.overlay').classList.add('fadeIn');
    setTimeout(function(){
        document.querySelector('.overlay').classList.remove('fadeIn');
        document.querySelector('.overlay').classList.add('fadeOut');
    }, 1000)
    setTimeout(function(){
        document.querySelector('.overlay').classList.remove('fadeOut');
        window.location.href = 'index.html';
    }, 2000)
});

// setear background, aplicar estilos, etc

// falta pensar en tomamos el stage

// hacer tres funciones que definan quién atiende a quién

