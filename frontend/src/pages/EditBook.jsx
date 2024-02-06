import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEditBook } from '../api'

const EditBook = () => {
  const location = useLocation();
  const { id } = location.state;

  const { loading, loadBook, edit, message, data, onChange } = useEditBook(id);

  if (loading || loadBook) {
    return <p>Loading</p>;
  }

  return (
    <div className="">
      <div>Edit Book</div>
      {message}
      <form method="post" onSubmit={edit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={data?.title || ''}
          onChange={(event) => onChange(event)}
        /><br />
        <label htmlFor="author">Author: </label>
        <input
          type="text"
          name="author"
          id="author"
          value={data?.author || ''}
          onChange={(event) => onChange(event)}
        /><br />
        <label htmlFor="year">Year: </label>
        <input
          type="date"
          name="publishVer"
          id="publishVer"
          value={data?.publishVer || ''}
          onChange={(event) => onChange(event)}
        /><br />
        <button type="submit">{loading ? 'Loading' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default EditBook