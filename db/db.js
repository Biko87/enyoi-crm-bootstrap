const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'crm-enyoi'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('Error al conectarse a la BD: ' + err);
      return;
    }
   
    console.log('Estás conectado a la BD');
  });

  module.exports = connection;