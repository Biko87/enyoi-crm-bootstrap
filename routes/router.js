const express = require("express");
const router = express.Router();
const connection = require("../db/db");

router.get("/", (req, res) => {

    connection.query('SELECT * FROM clientes', (error, results)=> {
        if (error) {
            throw error;
        } else {
            res.render("clientes", {results:results});
        }
    });
    
});

// crear cliente
router.get('/crear-cliente', (req, res) => {
    res.render('crear-cliente')
});

// Editar cliente
router.get('/editar-cliente/:id', (req, res)=> {
    const id = req.params.id;
    connection.query('SELECT * FROM clientes WHERE id=?', [id], (error, results)=> {
        if (error) {
            throw error;
        } else {
            res.render("editar-cliente", {cliente:results[0]});
        }
    })
})

// Delete cliente
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM clientes WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

// Procesos del crud
const crud = require('../controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

    module.exports = router;