const mongoose = require('mongoose')

const datosapiSchema = new mongoose.Schema(
    { data : Object ,sections : Array ,itemCards : Array , itemBox : Array , footer : Array , rrss : Array },
    { collection : 'datosweb'}
)

const DatosApi = mongoose.model("DatosApi" , datosapiSchema)

const getDatos = async ( req , res , next ) => {
    try {
        const buscar = await DatosApi.find()
        res.status(200).json(buscar)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getDatos,
}
