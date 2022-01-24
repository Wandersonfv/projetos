var xhr = new XMLHttpRequest()

document.querySelector('body').onload = function(){
    if(xhr.status == 200){
        var obj = JSON.parse(xhr.responseText)        
        var produtos = document.querySelector('#produtos')
        for(var n=0;n<obj.verduras.length;n++){
            var div = document.createElement('div')
            div.setAttribute('class','item')
            div.innerHTML += `
            <p>${obj.verduras[n].nome}</p>
            <img src="${obj.verduras[n].imagen}" alt="${obj.verduras[n].nome}">
            <p>${obj.verduras[n].preço}</p>
            <br>
            <a key="${obj.verduras[n].id}" class="botao">Comprar</a>
            `
        produtos.appendChild(div)
        }

        var botao = document.querySelectorAll('a.botao')
        var carrinho = document.querySelector('#carrinhodecompras')
        var valorTotal = document.querySelector('#total>h3')
        var soma = 0

        for(var c = 0; c < botao.length; c++){

            botao[c].addEventListener('click',function(){
                var key = this.getAttribute('key')
                obj.verduras[key].qtda++
                carrinho.innerHTML = ''
                soma += obj.verduras[key].preço
                valorTotal.innerHTML = `Total carrinho: R$ ${soma.toFixed(2)}`
                obj.verduras.map(function(valor){
                    if(valor.qtda > 0){
                        carrinho.innerHTML += `

                            <div class="compra">
                                <p>Nome: ${valor.nome}</p>
                                <p>Preço: ${valor.preço}</p>
                                <p>Quantidade: ${valor.qtda}</p>
                            </div>
                        
                        `
                    }
                })

            })
        }
    }
}





xhr.open('GET','produtos.json',true)
xhr.send(null)


