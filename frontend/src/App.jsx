import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, CreateBook, DetailBook, EditBook, DeleteBook } from './pages'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBook/>} />
      <Route path='/books/details' element={<DetailBook/>} />
      <Route path='/books/edit' element={<EditBook/>} />
      <Route path='/books/del' element={<DeleteBook/>} />
    </Routes>
  )
}

export default App
