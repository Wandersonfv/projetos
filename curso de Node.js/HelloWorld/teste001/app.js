const http = require('http')


http.createServer((req, res)=>{
    res.end(

    `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    <style>
        h1{
            color: blue;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-weight: bold;
            font-size: 2em;
        }
    </style>
    
    </head>
    <body>
        <h1>OLÁ MUNDO!</h1>
        
    </body>
    </html>`
    
    )

}).listen(9090)

console.log(`O servido Rodando!`)
