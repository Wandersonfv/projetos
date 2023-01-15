const Sequelize = require('sequelize')

//Conecção ao banco de dados mysql
const seq = new Sequelize('cadastro_de_usuarios','root','wfv123',{
    dialect:'mysql',
    host:'localhost'
})



module.exports = {
    Sequelize: Sequelize,
    Seq: seq
}