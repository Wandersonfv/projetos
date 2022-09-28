import express from "express";

const porta = 3000
const app = express()

app.set("json spaces",4)

module.exports = app =>{app.get('/',(req,res)=> res.json({status:"Ntask API"}))} 

module.exports = app =>{app.get('/task',(req,res)=> res.json({
    tasks:[
        {title:"Fazer compras"},
        {title:"Consertar o PC"},
    ]
}))} 


app.listen(porta,() => console.log(`Ntask API porta ${porta}`))
