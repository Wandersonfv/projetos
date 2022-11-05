// importa a LIB sequelize que serve para se conectar ao banco de dados.
const Sequelize = require('sequelize')


//Conecta no banco de dados.
const sequelize = new Sequelize('teste','root','root123',{
    host: 'localhost',
    dialect:'mysql'
})


//Cria a estrutura de tabela do BVanco de dados.
const Postagem = sequelize.define('postagen',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});


//SErve para Inserir dados na tabela do Banco de dados.
/*Postagem.create({
    titulo:'Primeiro arquivo',
    conteudo:'Meu primeiro arquivo no Banco de Dados, estou mito Feliz.'
})*/


//Serve para criar a tabela no banco de dados.
//Postagem.sync({force: true})


//Cria a estrutura de tabela do BVanco de dados.
const Usuarios = sequelize.define('Usuarios',{
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

})

Usuarios.create({
    nome:'Wanderson',
    sobrenome:'Furtado Varejão',
    idade:29,
    email:'wandersonfv10@gmail.com'
})

//Serve para criar a tabela no banco de dados.
//Usuarios.sync({force: true})



//Serve para testar se a conecção foi concluida com sucesso.
sequelize.authenticate().then(
    ()=> console.log('Servidor Conectado com Sucesso!')
).catch(
    (error)=> console.log(`Falha ao se conectar: ${error}`) 
)