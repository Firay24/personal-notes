import React from 'react'
import ContentItemBody from './ContentItemBody'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'

function NoteItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className='note-item'>
      <div className='note-item__information'>
        <ContentItemBody title={title} createdAt={createdAt} body={body}></ContentItemBody>
      </div>
      <div className='note-item__button'>
        <DeleteButton id={id} onDelete={onDelete}></DeleteButton>
        <ArchiveButton id={id} onArchive={onArchive}></ArchiveButton>
      </div>
    </div>
  )
}

export default NoteItem
