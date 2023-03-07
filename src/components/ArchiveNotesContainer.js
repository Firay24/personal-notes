import React from 'react'
import ArchiveList from './ArchiveList'

function ArchiveNotesContainer( { notes, onDelete, onMoved } ) {
  return (
    <div className='archiveNote-app'>
      <ArchiveList notes={notes} onDelete={onDelete} onMoved={onMoved}></ArchiveList>
    </div>
  )
}

export default ArchiveNotesContainer



// import React, { Component } from 'react'
// import ArchiveList from './ArchiveList';
// import { getInitialData } from '../utils/data'

// export class ArchiveNotesContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getInitialData().filter(note => note.archived === true),
//     }

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);

//   }

//   onDeleteHandler(id) {
//     const notes = this.state.notes.filter(note => note.id !== id);
//     this.setState( {notes} )
//   }

//   render() {
//     return (
//       <div className='archiveNote-app'>
//         <ArchiveList notes={this.state.notes} onDelete={this.onDeleteHandler}></ArchiveList>
//       </div>
//     )
//   }
// }

// export default ArchiveNotesContainer

