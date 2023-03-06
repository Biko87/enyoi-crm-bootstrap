const connection = require("../db/db");

// Save cliente
exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const empresa = req.body.empresa;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    
    connection.query('INSERT INTO clientes SET ?', {nombre:nombre, apellido:apellido, empresa:empresa, correo:correo, telefono:telefono}, (error, results)=> {
        if (error) {
            console.log(error)   
        } else {
            res.redirect('/');
        }
    })
}

// Update register
exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const empresa = req.body.empresa;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    connection.query('UPDATE clientes SET ? WHERE id = ?',[{nombre:nombre, apellido:apellido, empresa:empresa, correo:correo, telefono:telefono}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};