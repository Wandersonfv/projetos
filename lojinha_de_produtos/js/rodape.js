var xhr = new XMLHttpRequest

xhr.onload = function(){
    var rod = document.getElementById('rod')
    rod.innerHTML = xhr.responseText
}

xhr.open('GET','../arquivos/rodape/rodape.html',true)
xhr.send(null)