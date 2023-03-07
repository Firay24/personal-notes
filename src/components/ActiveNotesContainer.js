import React from 'react'
import NoteList from './NotesList'

function ActiveNotesContainer({ notes, onDelete, onArchive }) {
  return (
    <div className='activeNote-app'>
      <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive}></NoteList>
    </div>
  )
}

export default ActiveNotesContainer;


// import React from 'react'
// import NoteList from './NotesList'
// import { getInitialData } from '../utils/data'


// export class ActiveNotesContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getInitialData().filter(note => note.archived === false),
//     }

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     // this.onArchiveHandler = this.onArchiveHandler.bind(this);

//   }

//   onDeleteHandler(id) {
//     const notes = this.state.notes.filter(note => note.id !== id);
//     this.setState( {notes} )
//   }

//   render() {
//     return (
//       <div className='activeNote-app'>
//         <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}></NoteList>
//       </div>
//     )
//   }
// }

// export default ActiveNotesContainer
