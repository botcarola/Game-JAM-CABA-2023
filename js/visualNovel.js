localStorage.setItem("stage", 1) // --> acá va función que baja info del objeto subido desde la pantalla principal

let indice = 0
let puntaje = []
let stage = JSON.parse(localStorage.getItem("stage"))
let empleada
const textBox = document.querySelector(".caja-dialogos")

// Pestañas
const sonidoNovela = document.querySelector('.sonidoNovela');
const overlay = document.querySelector('.overlay');

const anterior = document.querySelector(".anterior")
const next = document.querySelector(".siguiente")
// agregar botón que diga :" volver al espacio común " --> se ejecuta animación y vuelve al tablero
// hay que deshabilitar el botón next cuando hay opciones de dialogo, sino nos arruinan la UX
overlay.classList.add('fadeOut');
overlay.classList.add('index');
// Acá se generan los diálogos y se aclara el nombre
sonidoNovela.play()

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




// document.querySelector(".iniciar").addEventListener('click', () => {
//     botones.style.visibility = "visible"
// });

const verificarIndice = ( i, array, e ) => {
    if ( e.target.className.includes("siguiente") || e.target.className.includes("respuesta") || e.target.className.includes("iniciar")) {
        document.querySelector(".iniciar").style.display = "none"
        anterior.style.visibility = "visible"
        next.style.visibility = "visible"
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

const sonidoEnojado = document.querySelector('.sonidoEnojado');
const sonidoMejor = document.querySelector('.sonidoMejor');
const sonidoPeor = document.querySelector('.sonidoPeor');

const puntajePorDecision = e => {
    if ( e.target.id == 0 ){        
        puntaje.push(0)         
        subirPuntaje( stage)
        document.body.classList.add("enojado")
        sonidoEnojado.play();
        setTimeout(function(){
            document.body.classList.remove("enojado")
            document.body.classList.add("neutral")
        }, 1500)
    } else if ( e.target.id == 1 ) {         
        puntaje.push(1) 
        subirPuntaje( stage)
        document.body.classList.add("mejor")
        sonidoMejor.play();
        setTimeout(function(){
            document.body.classList.remove("mejor")
            document.body.classList.add("neutral")
        }, 1500)
    } else if ( e.target.id == 2 ) {         
        puntaje.push(2) 
        subirPuntaje( stage)
        document.body.classList.add("peor")
        sonidoPeor.play();
        setTimeout(function(){
            document.body.classList.remove("peor")
            document.body.classList.add("neutral")
        }, 1500)
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