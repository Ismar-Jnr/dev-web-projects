export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),
    open(){
        Modal.wrapper.classList.add('open'); // 'open' é a classe adicionada ou removida de acordo com a hora em que deve aparecer o modal
    },
    close(){
        Modal.wrapper.classList.remove('open');
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close();
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
    if(event.key === 'Escape'){
        Modal.close();
    }
}
