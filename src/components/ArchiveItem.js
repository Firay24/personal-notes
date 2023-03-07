import React from 'react'
import ContentItemBody from './ContentItemBody'
import MoveButton from './MoveButton'
import DeleteButton from './DeleteButton'

function NoteItem({ title, createdAt, body, id, onDelete, onMoved }) {
  return (
    <div className='note-item'>
      <div className='note-item__information'>
        <ContentItemBody title={title} createdAt={createdAt} body={body}></ContentItemBody>
      </div>
      <div className='note-item__button'>
        <DeleteButton id={id} onDelete={onDelete}></DeleteButton>
        <MoveButton id={id} onMoved={onMoved}></MoveButton>
      </div>
    </div>
  )
}

export default NoteItem
