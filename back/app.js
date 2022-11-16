const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")

//Ruta del navegador (esta cambia)
app.use('/api',productos)

//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app