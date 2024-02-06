import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDeleteBook } from '../api'

const DeleteBook = () => {

  const location = useLocation()
  const { id } = location.state
  const { message, loading, deleteBook } = useDeleteBook(id)

  return (
    <div>
      <h2>Delete Book</h2>
      <p>Are you sure you want to delete this book?</p>
      <button onClick={deleteBook} disabled={loading}>{loading ? 'Loading' : 'Delete'}</button>
      {message}
    </div>
  )
}

export default DeleteBook