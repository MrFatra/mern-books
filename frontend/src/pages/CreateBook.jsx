import React, { useState } from 'react'
import { useCreateBook } from '../api'

const CreateBook = () => {

  const { loading, onSubmit, onChange } = useCreateBook()

  return (
    <div className="">
      <div>Create New Book</div>
      <form method="post" onSubmit={onSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" onChange={(event) => onChange(event)} /><br />
        <label htmlFor="author">Author: </label>
        <input type="text" name="author" id="author" onChange={(event) => onChange(event)} /><br />
        <label htmlFor="year">Year: </label>
        <input type="date" name="publishVer" id="publishVer" onChange={(event) => onChange(event)} /><br />
        <button type="submit">{loading ? 'Loading' : 'Submit'}</button>
      </form>
    </div>
  )
}

export default CreateBook