const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


//Registrar un nuevo usuario /api/usuario/registro
exports.registroUsuario = catchAsyncErrors(async (req, res, next) => {
    const { nombre, email, password } = req.body;

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 240,
        crop: "scale"
    })

    const user = await User.create({
        nombre,
        email,
        password,
        avatar: {
            public_id: result.public_id,
            url: result.secure_url
        }
    })
    tokenEnviado(user, 201, res)
})
