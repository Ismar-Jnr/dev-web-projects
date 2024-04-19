// DOM
// Document Object Model = Modelagem do documento em formato de objeto JavaScript
import Controls from "./controles.js"
import Timer from "./timer.js" 
import Sound from "./sounds.js"
import { play,
    pause,
    buttonStop,
    configTempo,
    soundOn,
    soundOff,
    minutosDisplay,
    segundosDisplay
 } from "./elements.js"

const controls = Controls({ play, pause, configTempo, buttonStop });

const timer = Timer({ minutosDisplay, segundosDisplay, resetarControles: controls.reset, /*minutes*/});

const sound = Sound();

play.addEventListener('click', () =>{
    controls.fplay();
    timer.diminuirContagem();
    sound.pressButton();
})

pause.addEventListener('click', () =>{
    controls.fpause();
    timer.hold();
    sound.pressButton();    
})

buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
    
})

soundOn.addEventListener('click', () => {
    soundOn.classList.add('hide');
    soundOff.classList.remove('hide');
    sound.bgAudio.pause();
})

soundOff.addEventListener('click', () => {
    soundOn.classList.remove('hide');
    soundOff.classList.add('hide');
    sound.bgAudio.play();
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

