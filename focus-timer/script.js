// DOM
// Document Object Model = Modelagem do documento em formato de objeto JavaScript

//Atribuindo os elementos à suas devidas variaveis
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');

play.addEventListener('click', () =>{
    play.classList.add('hide');
    pause.classList.remove('hide');
})

play.addEventListener('click', () =>{
    play.classList.remove('hide');
    pause.classList.add('hide');
})