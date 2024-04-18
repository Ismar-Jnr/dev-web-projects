// DOM
// Document Object Model = Modelagem do documento em formato de objeto JavaScript

//Atribuindo os elementos à suas devidas variaveis
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const config = document.querySelector('.config'); 
const soundOn = document.querySelector('.sound-on');
const soundOff = document.querySelector('.sound-off');


play.addEventListener('click', () =>{
    play.classList.add('hide');
    pause.classList.remove('hide');
    config.classList.add('hide');
    buttonStop.classList.remove('hide');
})

pause.addEventListener('click', () =>{
    play.classList.remove('hide');
    pause.classList.add('hide');
    
    
})

buttonStop.addEventListener('click', () => {
    play.classList.remove('hide');
    pause.classList.add('hide');
    config.classList.remove('hide');
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