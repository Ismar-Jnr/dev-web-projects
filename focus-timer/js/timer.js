import Sounds from "./sounds.js"



export default function Timer({ minutosDisplay, segundosDisplay, resetarControles} ){

    let timerTimeOut;
    let minutes = Number(minutosDisplay.textContent);

    function updateDisplay(newMinutes, segundosContagem){
        newMinutes = newMinutes === undefined ? minutes : newMinutes;
        segundosContagem = segundosContagem === undefined ? 0 : segundosContagem;
        minutosDisplay.textContent = String(newMinutes).padStart(2, "0");
        segundosDisplay.textContent = String(segundosContagem).padStart(2, "0");
        
    }

    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    function diminuirContagem () {
        timerTimeOut = setTimeout(()=> {
        let segundosContagem = Number(segundosDisplay.textContent);
        let minutes = Number(minutosDisplay.textContent);
        let isFinished = minutes <= 0 && segundosContagem <= 0;
        updateDisplay(minutes, 0);
        
        if(isFinished){
            resetarControles();
            updateDisplay();
            Sounds().timeEnd();
            return
        }
        
        if(segundosContagem <= 0){
            segundosContagem = 60;
            --minutes            
        }      
        
        updateDisplay(minutes, String(segundosContagem - 1))
        
        diminuirContagem();
    }, 1000)
    };

    function updateMinutes(newMinutes){
        minutes =  newMinutes;
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }

    return{
        diminuirContagem, reset, updateDisplay, updateMinutes, hold
    }
}