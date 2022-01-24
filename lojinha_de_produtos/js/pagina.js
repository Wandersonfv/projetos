var xhl = new XMLHttpRequest()

xhl.onload = function(){
    if(xhl.status === 200){
        var cab = document.getElementById('cab')
        cab.innerHTML = xhl.responseText
        
    }
}

xhl.open('GET','../arquivos/header/header.html',true)
xhl.send(null)







