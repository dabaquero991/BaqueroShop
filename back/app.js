const express=require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")

//Ruta del navegador (esta cambia)
app.use('/api',productos)

module.exports=app