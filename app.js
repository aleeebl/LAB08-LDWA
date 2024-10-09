const express = require('express')
const Sequelize = require('sequelize') 
const { Json } = require('sequelize/lib/utils')
const app= express()

// Definir los parametros de la conexion
const sequelize= new Sequelize('data','root','root',{ 
    host: 'localhost',
    dialect: 'mysql'

})

// Definimos el modelo 

const clientesModel=sequelize.define('clientes',{ 
    "id":{type: Sequelize.INTEGER, primaryKey:true},
    "nomcli":Sequelize.STRING,
    "apecli":Sequelize.STRING,
    "nrodnicli":Sequelize.STRING,
    "telcli":Sequelize.STRING
})

//Autenticamos

sequelize.authenticate()
.then(()=>{
console.log('conexión a la base de datos OK')
})

.catch(error =>{
console.log('error de conexión a la base de datos '+error)
})

// Mostramos todos los registros de la BD

clientesModel.findAll({attributes:['idcli', 'nomcli', 'apecli', 'nrodnicli',  'telcli']})
.then(clientes=>{
    const resultados = JSON.stringify(clientes)
    console.log(resultados)
})

.catch(error =>{
    console.log('No hay registros'+error)
})

app.listen(3000, ()=>{
console.log('conectado')
})