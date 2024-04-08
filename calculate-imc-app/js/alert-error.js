export const AlertError = {
    element: document.querySelector('.alert-error'),
    open(){
        AlertError.element.classList.add('open') // 'open' é a classe adicionada ou removida de acordo com a hora em que deve aparecer o modal
    },
    close(){
        AlertError.element.classList.remove('open')
    },
}

