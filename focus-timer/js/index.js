// DOM
// Document Object Model = Modelagem do documento em formato de objeto JavaScript
import Controls from "./controles.js"
import Timer from "./timer.js" 

const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const configTempo = document.querySelector('.config-tempo'); 
const soundOn = document.querySelector('.sound-on');
const soundOff = document.querySelector('.sound-off');
const minutosDisplay = document.querySelector('.minutos');
const segundosDisplay = document.querySelector('.segundos');
//let minutes = Number(minutosDisplay.textContent);

const controls = Controls({ play, pause, configTempo, buttonStop });

const timer = Timer({ minutosDisplay, segundosDisplay, resetarControles: controls.reset, /*minutes*/});

play.addEventListener('click', () =>{
    controls.fplay();
    timer.diminuirContagem();
})

pause.addEventListener('click', () =>{
    controls.fpause();
    timer.hold();
    clearTimeout(timerTimeOut);    
})

buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
    
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

    let newMinutes = controls.getMinutes();

    if(!newMinutes){
        timer.reset();
        return;
    }
   // minutes = newMinutes;
   timer.updateDisplay(newMinutes, 0)
   timer.updateMinutes(newMinutes)
    
})

