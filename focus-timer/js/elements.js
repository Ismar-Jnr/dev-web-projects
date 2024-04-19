const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const configTempo = document.querySelector('.config-tempo'); 
const soundOn = document.querySelector('.sound-on');
const soundOff = document.querySelector('.sound-off');
const minutosDisplay = document.querySelector('.minutos');
const segundosDisplay = document.querySelector('.segundos');
//let minutes = Number(minutosDisplay.textContent);

export {
    play,
    pause,
    buttonStop,
    configTempo,
    soundOn,
    soundOff,
    minutosDisplay,
    segundosDisplay
}