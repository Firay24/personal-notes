import React from 'react'

function MoveButton({ id, onMoved }) {
  return (
    <button className='active-notes__move' onClick={() => onMoved(id)}>
        <i className='fa-solid fa-rotate-left' />
        Pindahkan
        </button>
  )
}

export default MoveButton
