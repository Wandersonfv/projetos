//Tabuada----------------------------------------------------------
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

//Cronometro----------------------------------------------------------

document.querySelector('#menu2').onclick = function(){
    document.querySelector('#funçao').innerHTML = ''
    document.querySelector('#funçao').innerHTML = `
    <div id='crono'>
    <h3>Cronometro</h3>
    <div id='cro'>
        <div id="seg">00</div> : <div id="mili">00</div>
    </div>
    <div id='Mcrob'>
    <button class="crob" id="init">Iniciar</button>
    <button class="crob" id="stop">Parar</button>
    <button class="crob" id="rein">Reiniciar</button>
    </div>
    <div>

    `
    let m = 0
    let s = 0
    let mili = document.querySelector('#mili')
    let seg = document.querySelector('#seg')




    function cont(){
        m++
        if(m<10){
            mili.innerHTML=`<div id="mili">0${m}</div>`
        }
        else{
            mili.innerHTML=`<div id="mili">${m}</div>`
        }
        
        if(m>=60){
            m = 0
            s++
            mili.innerHTML=`<div id="mili">0${m}</div>`
            if(s<9){
                seg.innerHTML = `<div id="seg">0${s}</div>`
            }
            else{
                seg.innerHTML = `<div id="seg">${s}</div>`
            }
            
        }
    }

    function tempo(){
        time = setInterval(cont,1000)
        init.removeEventListener('click',tempo)}



    
        
    
    //inicio
    let init = document.querySelector('#init') 
    init.addEventListener('click',tempo)
    
   
   
    //parar
    document.querySelector('#stop').onclick = ()=>{
        clearInterval(time)
        init.addEventListener('click',tempo)
        
        

    }
    //reinicio
    document.querySelector('#rein').onclick = ()=>{
        clearInterval(time)
        init.addEventListener('click',tempo)
        
        m=0
        s=0
        mili.innerHTML = `<div id="mili">00</div>`
        seg.innerHTML =  `<div id="seg">00</div>`


        
    }

}
   
    




//Lista
document.querySelector('#menu3').onclick = function(){
    document.querySelector('#funçao').innerHTML = ''
    document.querySelector('#funçao').innerHTML = `
    <div id="lista">
    <h3>Lista de Tarefas</h3>
    <input type="text" id="inf"> <input type="button" value="+" id="atribuir">
        <ul id="list">
            
            
        </ul>
    </div>

    `
    document.querySelector('#atribuir').onclick = ()=>{
        let list = document.querySelector('#list')
        let inf = document.querySelector('#inf')
        inf = inf.value

        list.innerHTML += `

        <li class="listing"><p>${inf} </p><button class="ex">x</button></li>
        
        `

        let ex = document.querySelectorAll('.ex')
        for(let i = 0;i<ex.length;i++){
            ex[i].addEventListener('click',removePai)
        }
        function removePai(a) {
            //a.preventDefalt()
            let li = this.parentNode
            li.parentNode.removeChild(li)
        
            
        }

    }

}






