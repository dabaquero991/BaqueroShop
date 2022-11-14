//const productos = require("../models/productos");
const producto=require("../models/productos")
// usurpación del require
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Ver listas de productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    res.status(200).json({
        success:true,
        count: productos.length,
        productos
    })
}

// Ver producto por ID
exports.getProductById= async(req, res, next)=>{
    const product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success: false,
            message: "Producto no encontrado",
            error:true
        })
    }
    res.status(200).json({
        success:true,
        message: "A continuación encontrará la información del producto: ",
        product
    })
}

// Update un producto
exports.updateProduct= async (req, res, next)=>{
    let product= await producto.findById(req.params.id) //variable de tipo modificable
    if (!product){ // Verificó que el objeto no existe, para finalizar el proceso
        return res.status(404).json({
            success: false,
            message: "Producto no encontrado"
        })
    }
    // Si el objeto si existe, se ejecuta la actualización
    product=await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, // Valida solo los atributos nuevos o actualizados
        runValidators:true
    });
    // Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message: "Producto actualizado correctamente: ",
        product
    })
}

// Delete producto
exports.deleteProduct= async (req, res, next)=>{
    const product= await producto.findById(req.params.id) //variable de tipo modificable
    if (!product){ // Verificó que el objeto no existe, para finalizar el proceso
        return res.status(404).json({
            success: false,
            message: "Producto no encontrado"
        })
    }
    await product.remove();
    res.status(200).json({
        success:true,
        message: "Producto eliminado correctamente: "
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}


//HABLEMOS DE FETCH
//* Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); //Llamamos al metodo creado para probar la consulta

//* ver por Id
function verProductoPorId(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductoPorId('634de32a7c22b3852ae39665'); // probamos metodo con un id


