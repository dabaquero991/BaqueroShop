const mongoose= require ("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type: String,
        required:[true, "Por favor registre el nombre del producto."],
        trim: true,
        maxLength:[150, "El nombre del producto no debe exceder los 120 caracteres."]
    },
    precio:{
        type: Number,
        required:[true, "Por favor ingrese el precio del producto"],
        maxLength:[9, "El precio del producto no puede estar por encima de $ 99'999.999"],
        default: 0.0
    },
    descripcion:{
        type: String,
        required: [true, "Por favor registre una descripcion para el producto"]
    },
    calificacion:{
        type: Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type: String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required: [true, "Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Celulares",
                "Computadores",
                "Televisores",
                "Audio",
                "Accesorios",
                "Impresoras",
                "Camaras",
                "Electrodomesticos"
            ]
        }
    },
    vendedor:{
        type: String,
        required: [true, "Por favor registre el vendedor de producto"]
    },
    inventario:{
        type: Number,
        required: [true, "Por favor registre el Stock del producto"],
        maxLength: [5, "Cantidad total del producto no puede sobrepasar de 99999"],
        default:0
    },
    numCalificaciones:{
        type: Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type: String,
                require:true
            },
            rating:{
                type: Number,
                required: true
            },
            comentario:{
                type:String,
                required: true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("productos",productosSchema)