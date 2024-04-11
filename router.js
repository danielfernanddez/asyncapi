const express = require('express')
const { getDatos } = require('./controller')

const router = express.Router()

router
    .route('/datosapi')
    .get(getDatos)
    .post()
    .put()

router
    .route('/datosapi/id/:id')
    .get()
    .delete()

router.all( '*' , ( req , res , next ) => {
    let err = new Error()
    err.status = 400
    err.statusMessage = 'No existe el Endpoint'
})

router.use(( err , req , res , next ) => {
    let { status , statusMessage } = err
    status = status || 500
    statusMessage = statusMessage || 'Error en el servidor'
    res.status(status).json({ statusMessage : err.message })
})

module.exports = {
    router,
}