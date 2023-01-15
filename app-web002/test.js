const { JSONB } = require('sequelize')
const Sequelize = require('sequelize')

//Conecção ao banco de dados mysql
const seq = new Sequelize('cadastro_de_usuarios','root','wfv123',{
    dialect:'mysql',
    host:'localhost'
})

const Usuario = seq.define('usuarios_cadastrados',{
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
},

)



Usuario.findAll().then((data)=>{
    data.map((r)=>{

        if(r.idade>50){
            console.log(`
            Nome: ${r.nome}
            Sobrenome: ${r.sobrenome}
            Idade: ${r.idade}
            E-mail: ${r.email} `)
        }
    
            
        
        
    })
})


