import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../config'

const useGetBooks = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    const reload = () => init()

    const init = () => {
        setLoading(true)
        axios.get(`${API_URL}/books`).then(response => {
            const data = response.data.data
            setBooks(data)
        }).catch(err => {
            console.error("Error getting books: ", err.message)
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        init()
    }, [])

    return { books, loading, reload }
}

export default useGetBooks