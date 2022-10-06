const express=require("express")
const router=express.Router();

//trae la respuesta json desde3 el controlador
const {getProducts} = require("../controllers/productsController")

//Establece desde que ruta ver los getProducts
router.route('/productos').getProducts

module.exports=router;