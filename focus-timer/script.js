// DOM
// Document Object Model = Modelagem do documento em formato de objeto JavaScript

//Atribuindo os elementos à suas devidas variaveis
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const configTempo = document.querySelector('.config-tempo'); 
const soundOn = document.querySelector('.sound-on');
const soundOff = document.querySelector('.sound-off');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
let minutosDefinidoPeloUser = Number(minutos.textContent);
let segundosDefinidoPeloUser;
let timerTimeOut;

function resetarControles (){
    play.classList.remove('hide');
    pause.classList.add('hide');
    configTempo.classList.remove('hide');
    buttonStop.classList.add('hide');
}

function attTempoDisplay(minutosContagem, segundosContagem){
    minutos.textContent = String(minutosContagem).padStart(2, "0");
    segundos.textContent = String(segundosContagem).padStart(2, "0");
}
function resetarTempo(){
    attTempoDisplay(minutosDefinidoPeloUser, 0)
    clearTimeout(timerTimeOut)
}

function diminuirContagem () {
   timerTimeOut = setTimeout(()=> {
        let segundosContagem = Number(segundos.textContent);
        let minutosContagem = Number(minutos.textContent);
        
        attTempoDisplay(minutosContagem, 0);
        
        if(minutosContagem <= 0){
            resetarControles();
            return
        }
        
        if(segundosContagem <= 0){
            segundosContagem =5;
            --minutosContagem            
        }      
        
        attTempoDisplay(minutosContagem, String(segundosContagem - 1))
        
        diminuirContagem();
    }, 1000)
};

play.addEventListener('click', () =>{
    play.classList.add('hide');
    pause.classList.remove('hide');
    configTempo.classList.add('hide');
    buttonStop.classList.remove('hide');

    diminuirContagem();
})

pause.addEventListener('click', () =>{
    play.classList.remove('hide');
    pause.classList.add('hide');
    clearTimeout(timerTimeOut);
    
})

buttonStop.addEventListener('click', () => {
    resetarControles();
    resetarTempo();
    
})

soundOn.addEventListener('click', () => {
    soundOn.classList.add('hide');
    soundOff.classList.remove('hide');
})

soundOff.addEventListener('click', () => {
    soundOn.classList.remove('hide');
    soundOff.classList.add('hide');
})

configTempo.addEventListener('click', () => {
   let minutosDefinidoPeloUser = prompt('Quantos minutos?');
    if(!minutosDefinidoPeloUser){
        resetarTempo();
        return;
    }
    minutosContagem = minutosDefinidoPeloUser;
   attTempoDisplay(minutosDefinidoPeloUser, 0)
    
})

