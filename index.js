import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import userRoute from './Routes/index.js'

const app = express()
app.use(express.json())

app.use(bodyParser.json())
app.use(cors())

app.use('/', userRoute);

const PORT = 5000;

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT)
    console.log(`Server running on port: http://localhost:${PORT}`)
}).catch((error) => {
    console.log(error.message)
})
