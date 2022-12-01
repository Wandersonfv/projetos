const Sequelize = require('sequelize')

const seq = new Sequelize('cadastro_de_usuarios','root','wfv123',{
    host:'localhost',
    dialect:'mysql'
})


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

Usuario.sync({force:true})