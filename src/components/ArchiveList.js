import React from 'react'
import ArchiveItem from './ArchiveItem'

function ArchiveList({ notes, onDelete, onMoved }) {
  return (
    <div>
      {
        notes.map((note) => (
            <ArchiveItem key={note.id}
            id={note.id}
            onDelete={onDelete}
            onMoved={onMoved}
            {...note} />
        ))
      }
    </div>
  )
}

export default ArchiveList;
