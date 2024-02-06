import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../config'
import useDetailBook from './detailBook'
import { useNavigate } from 'react-router-dom'

const useEditBook = (id) => {
    const { book, loading: loadBook } = useDetailBook(id)
    const navigate = useNavigate()
    const formData = new FormData()

    console.log('book: ', book);

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (!loadBook) {
            setData(book)
        }
    }, [loadBook, book])

    const edit = () => {
        setLoading(true)
        for (const key in data) {
            formData.append(key, data[key])
        }
        axios.put(`${API_URL}/books/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {
            setMessage(response.data.message)
        }).catch(err => {
            console.error("Error getting books: ", err.message)
            setMessage(err.message)
        }).finally(() => {
            setLoading(false)
            setTimeout(() => {
                navigate('/')
            }, 2000)
        })
    }

    const onChange = (event) => {
        const { name, value } = event.target
        setData(prevVal => ({
            ...prevVal,
            [name]: value,
        }))
    }

    return { loading, loadBook, edit, message, data, onChange }
}

export default useEditBook