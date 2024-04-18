export default function Controls({ play, pause, configTempo, buttonStop }){

    function fplay(){
        play.classList.add('hide');
        pause.classList.remove('hide');
        configTempo.classList.add('hide');
        buttonStop.classList.remove('hide');
    }

    function fpause(){
        play.classList.remove('hide');
        pause.classList.add('hide');
    }

    function reset (){
        play.classList.remove('hide');
        pause.classList.add('hide');
        configTempo.classList.remove('hide');
        buttonStop.classList.add('hide');
    }

    function getMinutes(){
        let newMinutes = prompt('Quantos minutos?');
        if(!newMinutes){
            return false;
        }
        return newMinutes;
    }
    
    return {
        reset, fplay, fpause, getMinutes
    }
  
}