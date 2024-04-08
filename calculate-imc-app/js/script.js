import { Modal } from './modal.js';
import { AlertError } from "./alert-error.js";
import { calculateIMC, notANumber} from "./utils.js";

// Variáveis - variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const saidaErro = document.querySelector('.input-wrapper');

saidaErro.oninput = (event) => {
    
}


form.onsubmit = (event) => {
    event.preventDefault(); // previne o recarregamento da pagina;

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
    if(weightOrHeightIsNotANumber){
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = calculateIMC(weight, height);
    displayResultMessage(result);
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`;
    
    Modal.message.innerText = message;
    Modal.open();
}



//  Fechar a janela de erro ao digitar no campo
//    Obs: o evento é e nome input

inputWeight.oninput = () => {
    AlertError.close();
}

inputHeight.oninput = () => {
    AlertError.close();
}
