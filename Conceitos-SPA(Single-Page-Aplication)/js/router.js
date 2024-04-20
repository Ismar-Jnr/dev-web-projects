export class Router{
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

        this.handle()
    }

    
    handle(){
        const { pathname } = window.location
        const route = this.routes [pathname] || this.routes[404]
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML
        })
    } 
 
 /*handle(){ //função que muda as páginas
    //const pathname = window.location.pathname;
    const { pathname } = window.location //faz a mesma coisa que a linha de cima, porém desestruturado, caso precise fazer mais vezes, é muito mais vantajoso.
    //---------------------------------------------

    //Pegando uma rota
    const route = routes[pathname] || routes[404] // O "pathname" tem o nome da rota, logo, essa linha cria uma rota; Caso seja pedido uma roda que não exista, ele pega a routes[404];
    console.log('antes')
    console.log(route); // esta mostrando a rota.
    //---------------------------------------------------------------------------------------//
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html;
    })
    //fetch() é uma função assíncrona, logo, ela não será executada na sequência das linhas de codigo. Ela será separada e executada num segundo momento. São as chamadas promessas. "Promises"
    //then() é a função que depois que a fetch() concluir o que ela tem que fazer, ela executa uma função em sequência
    //---------------------------------------------------------------------------------------//


   
 }*/
}

