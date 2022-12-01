const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/sobre', function(req,res){

    res.send(`

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    <style>
        h1{
            color: red;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-weight: bold;
            font-size: 2em;
        }
    </style>
    
    </head>
    <body>
        <h1>MINHA PAGINA SOBRE</h1>
        
    </body>
    </html>
    
    `)
    
})

app.get('/blog', function(req,res){

    res.send(`

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    <style>
        h1{
            color: pink;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-weight: bold;
            font-size: 2em;
        }
    </style>
    
    </head>
    <body>
        <h1>MINHA PAGINA SOBRE BLOG</h1>
        
    </body>
    </html>


    `)

})
app.get('/ola/:nome/:cargo/:cor',function(req,res){

    res.send(`

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    <style>
        h1{
            color: yellowgreen;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-weight: bold;
            font-size: 2em;
        }
    </style>
    
    </head>
    <body>
        <h1>OLÁ ${req.params.nome}</h1>
        <h1>profissão: ${req.params.cargo}</h1>
        <h1>Cor favorita: ${req.params.cor}</h1>
        
        
    </body>
    </html>
    
    `)

})




app.listen(8081, function(){
    console.log('Servidor Rodando na url http://localhost:8081')
})

