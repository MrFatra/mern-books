import axios from 'axios'
import { useState } from 'react'
import { API_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const useCreateBook = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const formData = new FormData()
    const navigate = useNavigate()

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('data: ', data);
        for (const key in data) {
            formData.append(key, data[key])
        }
        setLoading(true)
        axios.post(`${API_URL}/books`, data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {
            const data = response.data.data
            console.log(data)
            navigate('/')
        }).catch(err => {
            console.error("Error adding books: ", err.message)
        }).finally(() => {
            setLoading(false)
        })
    }

    const onChange = (event) => {
        const { name, value } = event.target
        setData(prevVal => ({
            ...prevVal,
            [name]: value,
        }))
    }

    return { loading, onSubmit, onChange }
}

export default useCreateBook