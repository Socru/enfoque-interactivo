const hmtl = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto')
const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const botonLargo = document.querySelector('.app__card-button--largo')
const banner = document.querySelector('.app__image') 
const titulo = document.querySelector('.app___title')
const botones=document.querySelectorAll('.app__card-button')
const inputEnfoqueMusica=document.querySelector('#alternar-musica')
const textoIniciarPausar=docoment.querySelector('#start-pause span')
const musicartist = new Audio('./sonidos/luna-rise.part-one.mp3')
const botonIniciarPausa=document.querySelector('start-pause')
const audioPlay = new Audio('./sonidos/play.wav');
const audioPausa = new Audio('./sonidos/pause.mp3');
const audioTiempoFinalizado = new Audio('./sonidos/beep.mp3')
const tiempoEnPantalla= document.querySelector('timer');

let tiempoTrascurridoEnSegundos =1500;
let idIntervalo= null;

inputEnfoqueMusica.addEventListener('change', () => {
    if (musicartist.paused) { 
        musicartist.play()
    } else {
        musicartist.pause()
    }
})

botonCorto.addEventListener('click', () => {
    tiempoTrascurridoEnSegundos = 300;
    cambiarContexto('descanso-corto')
    botonCorto.classList.add('active')
})


botonEnfoque.addEventListener('click', () => {
    tiempoTrascurridoEnSegundos = 1500;
    cambiarContexto('enfoque')
    botonEnfoque.classList.add('active')
})

botonLargo.addEventListener('click', () => {
    tiempoTrascurridoEnSegundos = 900;
    cambiarContexto('descanso-largo')
    botonLargo.classList.add('active')
})

function cambiarContexto(contexto) {
    mostrarTiempo();
    botones.forEach(function (contexto) {
        contexto.classList.remove('active')
    })

    hmtl.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagenes/${contexto}.png`)
    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `
            optimiza productividad,              CX<br>
            <strong class="app_title-strong>lo importante</strong>`
            break;
        case "descanso-corto":
            titulo.innerHTML = `respira
            <strong class ="app__title-strong" >ahhhh</strong>`
            break;
    
        case "descanso-largo":
            titulo.innerHTML = `yaaa
            <strong class ="app__title-strong" >ahhhh tranqui </strong>`
            break;   
        default:
            break;
    }
}

const cuentaRegresiva = () => {
    if (tiempoTrascurridoEnSegundos.length <= 0) {
        audioTiempoFinalizado .play() 
        alert("time over")
        return
        
    }
    textoIniciarPausaria.textContent="pausar".
    tiempoTranscurridoEnSegundos -= 1
    console.log('Tiempo: ' + tiempoTranscurridoEnSegundos) // Muestra el tiempo actual
    console.log('Id: ' + intervaloId)
    mosstrarTiempo();
}

botonIniciarPausa.addEventListener('click', cuentaRegresiva); 

function iniciarPausa() {
    if (idIntervalo) {
        audioPausa.play(); 
        reiniciar()
        return 
    }
    idIntervalo = setInterval(cuentaRegresiva, 1000)
}

function reiniciar() {
    clearInverval(idIntervalo);
    textoIniciarPausar.textContent= "comenzar" 
    idIntervalo = null;
}

function mostrarTiempo() {
    const tiempo = new Date(tiempoTrascurridoEnSegundos * 1000);
    const tiempoFormateado = tiempo.toLocaleDateString('es-MX',{minute:'2-digit',second:'2-digit'});
    tiempoEnPantalla.innerHTML= `${tiempoFormateado}`
}
mostrarTiempo();