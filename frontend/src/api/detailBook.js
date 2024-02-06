import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../config'

const useDetailBook = (id) => {
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(false)

    const reload = () => init()

    const init = () => {
        setLoading(true)
        axios.get(`${API_URL}/books/${id}`).then(response => {
            console.log('data: ', id);
            const data = response.data.data
            setBook(data)
        }).catch(err => {
            console.error("Error getting book: ", err.message)
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        init()
    }, [])

    return { book, loading, reload }
}

export default useDetailBook