const Sequelize = require('sequelize')
const Express = require('express')
const app = Express()


//Conecção ao banco de dados mysql
const seq = new Sequelize('cadastro_de_usuarios','root','wfv123',{
    dialect:'mysql',
    host:'localhost'
})


app.use(Express.urlencoded({extended:true}))
app.use(Express.json())

app.get('/',(req, res)=>{
    res.sendFile(__dirname+"/html/index.html")
})

app.post('/add',(req,res)=>{

    const Usuario = seq.define('Usuarios_cadastrados',{
        nome:{
            type: Sequelize.STRING
        },
        sobrenome:{
            type: Sequelize.STRING
        },
        idade:{
            type:Sequelize.INTEGER
        },
        email:{
            type:Sequelize.STRING
        }
    
    
    })

    Usuario.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        email: req.body.email,
    }).then(()=>{
        res.sendFile(__dirname+'/html/msg.html')
    }).catch((error)=>{
        res.send(`
        
        <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensagem</title>
    <style>
           body{
            background-color: rgb(66, 66, 227);

        }
        h1{
    
            background-color: white;
            margin: auto;
            padding: 10px;
            border-radius: 5px;
            max-width: 500px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: red;

            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.349);
        }
        

    </style>
</head>
<body>
    <h1>Houve algum problema ao enviar o dados... por favor tente mais tarde...  ${error}</h1>
    
</body>
</html>
        
        
        `)

    })

    
    

})


app.listen(9060,()=> console.log("Servidor Funcionando na porta https://localhost:9060"))

