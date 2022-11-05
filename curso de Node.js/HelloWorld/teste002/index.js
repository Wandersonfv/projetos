const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//config
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')
    //Conecçõ com banco de dados Mysql
    const sequelize = new Sequelize('teste','root','root123',{
        host: 'localhost',
        dialect:'mysql'
    })

//rotas
app.get('/cad',(req,res)=>{
    res.send('Rota de cadastro de post')

})



app.listen(9090,()=> console.log("servidor Rodando em http://localhost:9090"))