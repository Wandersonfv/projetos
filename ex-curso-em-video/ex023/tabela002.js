
var td = document.querySelectorAll('td.nun')
var total = document.querySelector('td#total')

var tot = 0
for(var n=0; n< td.length; n++){
    console.log(Number(td[n].innerHTML))
    tot = Number(td[n].innerHTML) + tot
    
}
console.log('---------------------')
console.log(tot)
total.innerHTML = `${tot}`

console.log('---------------------')
console.log(Number(td[26].innerHTML) + Number(td[26].innerHTML))