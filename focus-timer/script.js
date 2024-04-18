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
let minutosDefinidoPeloUser;
let segundosDefinidoPeloUser;

function diminuirContagem () {
    setTimeout(()=> {
        let segundosContagem = Number(segundos.textContent);
        let minutosContagem = Number(minutos.textContent);

        
        if(segundosContagem <= 0){
            segundosContagem =2;
            
            minutos.textContent = String(minutosContagem - 1).padStart(2, "0");
        }
        
        segundos.textContent = String(segundosContagem - 1).padStart(2, "0");
        
        if(minutosContagem <= 0){

            play.classList.remove('hide');
            pause.classList.add('hide');
            configTempo.classList.remove('hide');
            buttonStop.classList.add('hide');

            return
        }
        

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
    
    
})

buttonStop.addEventListener('click', () => {
    play.classList.remove('hide');
    pause.classList.add('hide');
    configTempo.classList.remove('hide');
    buttonStop.classList.add('hide');
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
    minutosDefinidoPeloUser = prompt('Quantos minutos?');
    minutos.textContent = minutosDefinidoPeloUser;
    segundosDefinidoPeloUser = prompt('Quantos segundos?');
    segundos.textContent = segundosDefinidoPeloUser;
    
})

