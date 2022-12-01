const express = require("express");
const Sequelize = require('sequelize')
const app = express()
    //banco de dados
    const sequelize = new Sequelize('teste','root','root123',{
        dialect:'mysql',
        host:'localhost'
    })
    //bodyparse
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/html/tabela.html')
})

app.post('/add',(req,res)=>{
    
    res.send('<h1>Dados enviados ao servidor</h1>')
   
   const usuario = sequelize.define('Usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }

   });

   usuario.create({

    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    idade: req.body.idade,
    email: req.body.email,
    

})


})



app.listen(9035, ()=>console.log('Servidor Funcionando em http://localhost:9035'))

