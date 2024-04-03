//Variaveis da aplicação
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10); //Gera numero de 1 a 10
let contador = 1;



//função callback é uma função que é passada como argumento de uma outro função
//  para ser utilizada mais tarde, em um outro momento

//função callback
function handleTryClick(event){
    // Esse evento é o click em um botão dentro de um formulario, e o padrão desse evento é enviar o formulário e recarregar a página;
    //Porém nesse caso, nao queremos que ele recarregue a pagina, para isso executamos a linha abaixo;

    event.preventDefault();// não fazer o padrão desse evento; logo, ele não enviar o formulario e tambem nao recarrega a pagina;

    const inputNumber = document.querySelector("#inputNumber"); //Variavel quer recebe o input, atraves do seletor id

    if(Number(inputNumber.value) == randomNumber){
        document.querySelector(".screen1").classList.add("hide"); //Adiciona a classe "hide" ao screen1
        document.querySelector(".screen2").classList.remove("hide"); //Remove a classe "hide" do screen2
        //Obs: A classe hide esconde a div a qual ela pertence, logo, a div que possui a classe hide no momento, não aparecerá

        document.querySelector(".screen2 h2").innerText = `acertou em ${contador} tentativas`;
    }
    
    inputNumber.value = ""
    contador++;
}


// Eventos 
                    // 'click' é um evento de click (naturalmente). 
                    // handleTryClcik é uma função callback
btnTry.addEventListener('click', handleTryClick) // Função handleTryClick foi chamada por refência, através do evento 'click';

btnReset.addEventListener('click', function (){ // Função anonima, executada no proprio escopo
    document.querySelector(".screen1").classList.remove("hide"); 
    document.querySelector(".screen2").classList.add("hide");
    contador = 1;

})