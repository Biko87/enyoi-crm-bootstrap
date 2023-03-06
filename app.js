const express = require("express");
const app = express();

const port = process.env.PORT || 4000;


// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:false}));



//Rutas web
app.use('/', require('./routes/router'));
app.get('/inicio-sesion', (req, res) => {
    req('/inicio-sesion')
})

app.listen(port, () => {
    console.log(`escuchando en el puerto http://localhost:${port}`);
  });