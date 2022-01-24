produtos = [
    
        {
            id: 0,
            nome:'Liquitificador Mondial Power 2 black',
            quantidade: 0,
            preço: 139.99, 
            imagen:'../produtos/liquitificador/Liquidificador-Mondial-Power-2-black.png',
            tipo: 'eletrodoméstico'
        },

        {   
            id: 1,
            nome:'Liquitificador Britânia diamante', 
            quantidade: 0, 
            preço:199.99, 
            imagen:'../produtos/liquitificador/Liquitificador-Britania-diamante.png',
            tipo: 'eletrodoméstico'
        },
                    
        {   
            id: 2,
            nome:'Liquitificador Philco PLQ1412P 3L', 
            quantidade: 0, 
            preço: 233.99, 
            imagen:'../produtos/liquitificador/Liquitificador-Philco-PLQ1412P-3l.png',
            tipo: 'eletrodoméstico'
        },

    

   
        {
            id:3,
            nome:'Nintendo Swich',
            quantidade: 0,
            preço: 2499.90,
            imagen:'../produtos/videogame/console-nintendo-switch-azul-neon-e-vermelho-neon.png',
            tipo: 'game'
        },

        {
            id:4,
            nome:'Playstation 5',
            quantidade: 0,
            preço: 4499.90,
            imagen:'../produtos/videogame/playstation-5.png',
            tipo: 'game'
        },

        {
            id:5,
            nome:'Xbox series X',
            quantidade: 0,
            preço: 4499.90,
            imagen:'../produtos/videogame/xbox-series-x-1tb.png',
            tipo: 'game'
        },


        {
            id:6,
            nome:'Smart TV LG 2021 43p FULLHD',
            quantidade: 0,
            preço: 4499.90,
            imagen:'../produtos/tv/2021-smarttv-lg-43-fullhd.png',
            tipo:'tv'  
        },

        {
            id:7,
            nome:'Smart TV Britânia 42p BTV42G70N5',
            quantidade: 0,
            preço: 3499.90,
            imagen:'../produtos/tv/smarttv-britânia-42-btv42g70n5.png',
            tipo:'tv'
        },

    
        {
            id:10,
            nome:'TV Philco PTV32D 10N5SK',
            quantidade: 0,
            preço: 5499.90,
            imagen:'../produtos/tv/tv-philco-ptv32d10n5sk.png',
            tipo:'tv' 
        }

]

//----------------------------------------------------------------------------------------


var prod = document.querySelector('#produtos')
var eletrodomesticos = document.querySelector('#eletrodomestico>div')
var games = document.querySelector('#game>div')
var tv = document.querySelector('#tv>div')


function carregar_itens(item){
    for(var n = 0; n < item.length; n++){
        if(item[n].tipo == 'eletrodoméstico'){
            eletrodomesticos.innerHTML += `
                <div class="produto">
                    <div class="image"><img src="${item[n].imagen}" alt=""></div>
                    <p>${item[n].nome}</p>
                    <p>R$ ${item[n].preço}</p>
                    <a class="botao" key="${item[n].id}" href="#">Adicionar ao carrinho</a>
                </div>
            `

        }
        if(item[n].tipo == 'game'){
            games.innerHTML += `
                <div class="produto">
                    <div class="image"><img src="${item[n].imagen}" alt=""></div>
                    <p>${item[n].nome}</p>
                    <p>R$ ${item[n].preço}</p>
                    <a class="botao" key="${item[n].id}" href="#">Adicionar ao carrinho</a>
                </div>
            `
        }

        if(item[n].tipo == 'tv'){
            tv.innerHTML += `
                <div class="produto">
                    <div class="image"><img src="${item[n].imagen}" alt=""></div>
                    <p>${item[n].nome}</p>
                    <p>R$ ${item[n].preço}</p>
                    <a class="botao" key="${item[n].id}" href="#">Adicionar ao carrinho</a>
                </div>
            `

        }

    }

}



prod.onload = carregar_itens(produtos)

function teste(t){
    console.log(t)
}
var soma  = 0
var botao = document.querySelectorAll('a.botao')
var total = document.querySelector('#total')
var comprados = document.querySelector('#comprados')


for(var i = 0; i< botao.length; i++){
    botao[i].addEventListener('click',function(){
        var key = this.getAttribute('key')
        total.innerHTML = `Total: R$ ${soma += produtos[key].preço}`
        comprados.innerHTML = ''
        produtos[key].quantidade++
        
        produtos.map(function(valor){
            if(valor.quantidade>0){
                comprados.innerHTML += `
                    <div class="compra">
                        <p>Nome: ${valor.nome}</p>
                        <p>Qtd: ${valor.quantidade}</p>
                        <P>Valor: ${valor.preço}</P>
                    </div>
                `
            }
        })

        
         
       
    })
    
}


