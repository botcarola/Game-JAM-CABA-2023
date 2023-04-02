const obtenerDataJornada1 = JSON.parse(localStorage.getItem("jornadaPrimerStage")) 
let indice = 0
let puntaje = []
let stage = obtenerDataJornada1.stageActual
let empleada = obtenerDataJornada1.casoMain
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


const verificarIndice = ( i, array, e ) => {
    sonidoNovela.play()
    if ( e.target.className.includes("siguiente") || e.target.className.includes("respuesta") || e.target.className.includes("iniciar")) {
        document.querySelector(".iniciar").style.display = "none"
        // anterior.style.visibility = "visible"
        next.style.visibility = "visible"
        const longitudArray = array.length 
        verificarTipoDeDialogo( array[i].value )

        if ( indice == longitudArray ) {  
            document.querySelector('.backTablas').style.display = "block"          
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
    
}

document.onclick = e => {
    if ( obtenerDataJornada1.casoMain === "Aylén") {

        verificarIndice(indice, stageUnoAylen, e)
        validarDecisiones( indice, stageUnoAylen, e)
    } else if ( obtenerDataJornada1.casoMain === "Ana María" ) {

        verificarIndice(indice, stageUnoAnaMaria, e)
        validarDecisiones( indice, stageUnoAnaMaria, e)
    }    
}

const modificarValoresStage = () => {
    let stageInicialSeteado = JSON.parse(localStorage.getItem("stageInicio"))
    localStorage.setItem("stageInicio", JSON.stringify(stageInicialSeteado + 1 ))
}

document.querySelector('.backTablas').addEventListener('click', () => {
    
    document.querySelector(".modal-demo").style.display = "flex"
    
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


// finalizar juego

document.querySelector("#finalizar").onclick = () => {
    localStorage.clear()
    window.location.href = "index.html"
}
