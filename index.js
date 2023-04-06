import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import userRoute from './Routes/index.js'

const app = express()
app.use(express.json())

// app.use(bodyParser.json())
app.use(cors())

app.use('/', userRoute);

const PORT = 5000;

mongoose.connect('mongodb+srv://aatir_nadim_:aatir_nadim_@cluster0.2nedsh6.mongodb.net/darwin?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT)
    console.log(`Server running on port: http://localhost:${PORT}`)
}).catch((error) => {
    console.log(error.message)
})
