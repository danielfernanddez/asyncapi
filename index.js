console.clear()

const MONGO_BBDD = process.env.MONGO_BBDD || 'mongodb://127.0.0.1:27017/asynctarea'

const express = require('express');
const cors    = require('cors');

//mongodb+srv://dani:dani@cluster0.b8rzbkq.mongodb.net/asynctarea

const mongoose = require('mongoose');
const { router } = require('./router');

const conectar = async () =>
    await mongoose
        .connect(MONGO_BBDD)
        .then((res) => console.log('Mongo Conectado'))
        .catch((error) => console.log(error))

conectar();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(router)

app.use((req , res) => {
    res.status(404).json('No se ha encontrado un Endpoint')
})

app.listen( 3000 , () => console.log('Iniciando API'))
