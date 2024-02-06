import express from 'express'
import { jsonError, jsonSuccess } from '../helper/response-formatter.js'
import { Book } from '../models/book.js'

const router = express.Router()

//?     GET
router.get('/', async (request, response) => {
    try {
        const book = await Book.find()
        jsonSuccess({ message: 'Success!', count:  book.length, data: book })
    } catch (err) {
        console.error(err.message)
        jsonError(err.message)
    }
})

router.get('/search', async (request, response) => {
    try {
        const { q } = request.query
        const book = await Book.find({
            $or: [
                { title: { $regex: q, $options: 'i' } }, // Mencocokkan title yang mengandung string q (case insensitive)
                { author: { $regex: q, $options: 'i' } } // Mencocokkan author yang mengandung string q (case insensitive)
            ]
        })
        jsonSuccess({ message: "Done!", data: book })
    } catch (err) {
        console.error(err)
        jsonError(err.message)
    }
})

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const book = await Book.findById(id)
        jsonSuccess({ message: 'Data found!', data: book })
    } catch (err) {
        console.error(err.message)
        jsonError(err.message)
    }
})

//?     POST
router.post('/', async (request, response) => {
    try {
        // console.warn(request.body);
        const data = {
            title: request.body.title,
            author: request.body.author,
            publishVer: request.body.publishVer,
        }

        const book = await Book.create(data)

        jsonSuccess({ message: "Done", data: book })

    } catch (err) {
        console.error(err.message)
        jsonError(err.message)
    }

})

//?     PUT
router.put('/:id', async (request, response) => {
    try {
        const data = {
            title: request.body.title,
            author: request.body.author,
            publishVer: request.body.publishVer,
        }

        const { id } = request.params

        const book = await Book.findByIdAndUpdate(id, data);

        jsonSuccess({ message: "Updated!" })
    } catch (err) {
        console.error(err.message)
        jsonError(err.message)
    }
})

//?     DELETE
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params

        const book = await Book.findByIdAndDelete(id)

        jsonSuccess({ message: "Done", result: book })
    } catch (err) {
        console.error(err.message)
        jsonError(err.message)
    }

})

export default router;