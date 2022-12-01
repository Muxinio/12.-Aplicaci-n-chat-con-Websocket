const { resume } = require('../database/db')
const conexion = require('../database/db')

exports.save =(req,res)=>{
    const producto = req.body.productos
    const valor = req.body.valor
    conexion.query('INSERT INTO productos SET ?',{producto:producto, valor:valor},(error,results)=>{
    if(error){
        console.log(error);
    }else{
        res.redirect('/');
    }
    
    
    })
}

exports.update =(req,res)=>{
    const id = req.body.id;
    const producto = req.body.productos;
    const valor = req.body.valor;
    conexion.query('UPDATE productos SET ? WHERE id = ?',[{producto:producto,valor:valor},id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }    
    })

}

