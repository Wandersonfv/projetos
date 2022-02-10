document.querySelector('body').onclick = function(){
    document.querySelector('#menu1').onclick = function(){
        document.querySelector('#funçao').innerHTML = ''
        document.querySelector('#funçao').innerHTML = `
        <label for="">
            Tabuada
            <input type="number" id="tabuada">
            <button id="Tb">Ver tabuada</button>
        </label>
        <main id="result">
            <h2>Informação</h2>
        </main>
        
        `
        document.querySelector('#Tb').onclick = function(){
            var tabuada = document.querySelector('#tabuada').value
            var result = document.querySelector('#result')
            result.innerHTML = ''
            for(var n=1;n<=10;n++){
                result.innerHTML += `<p> ${tabuada} x ${n} = ${tabuada*n} </p>`
            }
              
        }
    
    
    }
    
    
    document.querySelector('#menu2').onclick = function(){
        document.querySelector('#funçao').innerHTML = ''
        document.querySelector('#funçao').innerHTML = `
        <h3>
            FUNÇÃO MENU ${document.querySelector('#menu2').innerHTML} INDISPONIVEL NO MOMENTO
    
        <h3>
        
        `
    
    }
    
    document.querySelector('#menu3').onclick = function(){
        document.querySelector('#funçao').innerHTML = ''
        document.querySelector('#funçao').innerHTML = `
        <h3>
            FUNÇÃO MENU ${document.querySelector('#menu3').innerHTML} INDISPONIVEL NO MOMENTO
    
        <h3>
        
        `
    }
    
    document.querySelector('#menu4').onclick = function(){
        document.querySelector('#funçao').innerHTML = ''
        document.querySelector('#funçao').innerHTML = `
        
        <h3>
            FUNÇÃO MENU ${document.querySelector('#menu4').innerHTML} INDISPONIVEL NO MOMENTO
    
        <h3>
        
        `
    }

}



