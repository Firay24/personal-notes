import React from 'react'

function ContentItemBody({ title, createdAt, body }) {
  return (
    <div className='content-item__body'>
      <p className='content-item__title'>{title}</p>
      <p className='content-item__date'>{createdAt}</p>
      <p className='content-item__descriptions'>{body}</p>
    </div>
  )
}

export default ContentItemBody
