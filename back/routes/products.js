const express=require("express")
const router=express.Router();

//Trae la respuesta json desde el controlador
const {getProducts} = require("../controllers/productsController") 

//Establece que ruta ver el getProducts
router.route('/productos').get(getProducts) 

module.exports=router;