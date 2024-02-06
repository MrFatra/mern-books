import React from 'react'
import Loading from '../components/Loading'
import { FaEdit, FaInfo, FaTrash, FaPlus } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useGetBooks } from '../api'

const Home = () => {

  const { books, loading, reload } = useGetBooks()
  const navigate = useNavigate()

  return (
    <>
      <p>List Of Books</p>
      <button onClick={reload}>Reload List</button>
      <button onClick={() => { navigate('/books/create') }}>
        <FaPlus />
      </button>
      {
        loading
          ?
          <Loading />
          :
          <table className='table-fixed border border-collapse'>
            <thead>
              <tr>
                <th className='border border-slate-600 p-5'>Title</th>
                <th className='border border-slate-600'>Author</th>
                <th className='border border-slate-600 px-10'>Published At</th>
                <th className='border border-slate-600 px-10'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map(item => (
                  <tr key={item._id} className='border border-slate-600'>
                    <td className='border border-slate-600 px-5'>{item.title}</td>
                    <td className='border border-slate-600 px-5'>{item.author}</td>
                    <td className='border border-slate-600 text-right pr-2'>{item.publishVer}</td>
                    <td className='py-2'>
                      <div className="flex items-center justify-center gap-5 px-10">
                        <button onClick={() => { navigate(`/books/details/`, { state: { id: item._id } }) }}>
                          <FaInfo className='text-3xl text-sky-400 border rounded-full p-1 border-sky-400' />
                        </button>
                        <button onClick={() => { navigate(`/books/edit/`, { state: { id: item._id } }) }}>
                          <FaEdit className='text-2xl text-blue-600' />
                        </button>
                        <button onClick={() => { navigate(`/books/del/`, { state: { id: item._id } }) }}>
                          <FaTrash className='text-2xl text-red-500' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      }
    </>
  )
}

export default Home