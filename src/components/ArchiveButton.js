import React from 'react'

function ArchiveButton({ id, onArchive }) {
  return (
    <button className='active-notes__archive' onClick={() => onArchive(id)}>
        <i className='fa-solid fa-download' />
        Diarsipkan
        </button>
  )
}

export default ArchiveButton
