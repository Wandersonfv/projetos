let s = 0
let m = 0


setInterval(()=>{
    s++
    if(s==10){
        s=0
        m++
    }
    console.clear()
    console.log(`${m}:${s}`)
    
},1000)




