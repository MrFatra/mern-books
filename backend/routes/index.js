import express, { json } from 'express'
import { jsonError, jsonSuccess } from '../helper/response-formatter.js'
import { Book } from '../models/book.js'

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        jsonSuccess({ message: "Welcome!" })
    } catch (err) {
        console.error(err.message)
        jsonError(err.message)
    }
})

export default router;