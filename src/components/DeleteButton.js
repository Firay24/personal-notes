import React from 'react'

function DeleteButton({ id, onDelete }) {
  return (
    <button className='active-notes__delete' onClick={() => onDelete(id)}>
        <i className='fa-solid fa-trash' />
        Delete
        </button>
  )
}

export default DeleteButton
