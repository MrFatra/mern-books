import React from 'react'
import { useDetailBook } from '../api'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const DetailBook = () => {
  // const { id } = useParams()
  const location = useLocation()
  const { id } = location.state
  const { book } = useDetailBook(id)

  return (
    <div>
      <p>Detail Book Of:</p>
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  )
}

export default DetailBook