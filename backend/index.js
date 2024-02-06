import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import homeRouter from './routes/index.js'
import bookRouter from './routes/books.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({
    path: '.env'
})

const app = express()
const upload = multer()

app.use((req, res, next) => {
    global.response = res //! for helper/response-formatter.js
    next()
})

app.use(cors())

app.use(upload.none()) //! text only form-data

app.use('/', homeRouter)

app.use('/books', bookRouter)

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Database Connected!')
    app.listen(process.env.PORT, () => {
        console.log('listening on :', process.env.PORT);
    })
}).catch(err => {
    console.error(err)
})



