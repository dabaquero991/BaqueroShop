const catchAsyncErrors = require("../middleware/catchAsyncErrors");
//const productos = require("../models/productos");
const producto = require("../models/productos")
// usurpación del require
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url));

//Ver listas de productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

    const resPerPage = 4;
    const productsCount = await producto.countDocuments();

    const apiFeatures = new APIFeatures(producto.find(), req.query)
        .search()
        .filter();

    let products = await apiFeatures.query;
    let filteredProductsCount = products.length;
    apiFeatures.pagination(resPerPage);
    products = await apiFeatures.query.clone();

    res.status(200).json({
        success: true,
        productsCount,
        resPerPage,
        filteredProductsCount,
        products
    })

})

// Ver producto por ID
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    res.status(200).json({
        success: true,
        message: "Aqui debajo encuentras información sobre tu producto: ",
        product
    })
})

// Update un producto
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    let imagen = []

    if (typeof req.body.imagen == "string") {
        imagen.push(req.body.imagen)
    } else {
        imagen = req.body.imagen
    }
    if (imagen !== undefined) {
        //eliminar imagenes asociadas con el product
        for (let i = 0; i < product.imagen.lenght; i++) {
            const result = await cloudinary.v2.uploader.destroy(product.images[i].public_id)
        }

        let imageLinks = []
        for (let i = 0; i < imagen.lenght; i++) {
            const result = await cloudinary.v2.uploader.upload(imagen[i], {
                folder: "products"
            });
            imageLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })
        }
        req.body.imagen = imageLinks
    }

    //Si el objeto si existia, entonces si ejecuto la actualización
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //Valido solo los atributos nuevos o actualizados
        runValidators: true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success: true,
        message: "Producto actualizado correctamente",
        product
    })
})

// Delete producto
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.params.id) //Variable de tipo modificable

    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success: true,
        message: "Producto eliminado correctamente"
    })
})

//Crear nuevo producto /api/productos
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
    let imagen = []
    if (typeof req.body.imagen === "string") {
        imagen.push(req.body.imagen)
    } else {
        imagen = req.body.imagen
    }

    let imagenLink = []

    for (let i = 0; i < imagen.length; i++) {
        const result = await cloudinary.v2.uploader.upload(imagen[i], {
            folder: "products"
        })
        imagenLink.push({
            public_id: result.public_id,
            url: result.secure_url
        })
    }

    req.body.imagen = imagenLink
    req.body.user = req.user.id;
    const product = await producto.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})


//HABLEMOS DE FETCH
//* Ver todos los productos
function verProductos() {
    fetch('http://localhost:4000/api/productos')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

//verProductos(); //Llamamos al metodo creado para probar la consulta

//* ver por Id
function verProductoPorId(id) {
    fetch('http://localhost:4000/api/producto/' + id)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

//verProductoPorId('634de32a7c22b3852ae39665'); // probamos metodo con un id


