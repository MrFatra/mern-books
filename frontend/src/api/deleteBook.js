import axios from 'axios'
import { useState } from 'react'
import { API_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const useDeleteBook = (id) => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const deleteBook = () => {
        setLoading(true)
        axios.delete(`${API_URL}/books/${id}`).then(response => {
            setMessage(response.data.message)
        }).catch(err => {
            console.error("Error deleting books: ", err.message)
            setMessage(err.message)
        }).finally(() => {
            setLoading(false)
            setTimeout(() => {
                navigate('/')
            }, 2000)
        })
    }

    return { message, loading, deleteBook }
}

export default useDeleteBook