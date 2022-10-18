const express=require("express")
const router=express.Router();

//Trae la respuesta json desde el controlador
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") 

//Establece que ruta ver el getProducts
router.route('/productos').get(getProducts) 
router.route('/producto/nuevo').post(newProduct); //Ruta nuevo producto
router.route('/producto/:id').get(getProductById); //Para consultar por id
router.route('/producto/:id').put(updateProduct); //Creación de la ruta de actualización 
router.route('/producto/:id').delete(deleteProduct); // Creación de la ruta de eliminacion por Id

//fetch

module.exports=router;