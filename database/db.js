const mymsql = require('mysql')

const conexion = mymsql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'productos_db'
})


conexion.connect((error)=>{
    if(error){
        console.error('Error al conectar:'+error);
        return
    }
    console.log('Conectado a BD de MySQL')
})


module.exports = conexion;