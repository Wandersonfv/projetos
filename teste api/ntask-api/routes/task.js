module.exports = app =>{app.get('/task',(req,res)=> res.json({
    tasks:[
        {title:"Fazer compras"},
        {title:"Consertar o PC"},
    ]
}))} 