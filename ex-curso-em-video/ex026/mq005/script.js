document.querySelector('body').onresize = function(){
   
   
    if(window.innerWidth >= 550){
        list.style.display = 'block'
    }else{
        list.style.display = 'none'
    }

    
}
document.querySelector('#botao').onclick = ()=>{
    let list = document.querySelector('ul#list')
    if(list.style.display == 'block'){
        list.style.display = 'none'

    }else{
        list.style.display = 'block'
    }

}