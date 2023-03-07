import React, { Component } from 'react'
// import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CreateNotes from './CreateNotes'
import ActiveNotesContainer from './ActiveNotesContainer'
import ArchiveNotesContainer from './ArchiveNotesContainer'
import { getInitialData, showFormattedDate } from '../utils/data'

export class PersonalNotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onMovedHandler = this.onMovedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);

  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState( {notes} )
  }

  onArchiveHandler(id) {
    const notes = this.state.notes
    for (let note of notes) {
      if (note.id === id) {
        note.archived = true
      }
    }
    this.setState(notes)
  }

  onMovedHandler(id) {
    const notes = this.state.notes
    for (let note of notes) {
      if (note.id === id) {
        note.archived = false
      }
    }
    this.setState(notes)
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            createdAt: showFormattedDate(),
            title,
            body,
            archived: false,
          }
        ]
      }
    })
  }

  onSearchChangeEventHandler = (inputSearch) => {
    console.log(inputSearch);
  }

  render() {
    return (
      <div className='body'>
        {/* <Navbar inputSearch={this.onSearchChangeEventHandler} /> */}
        <SearchBar inputSearch={this.onSearchChangeEventHandler}></SearchBar>
        <div className='main-body'>
          <div className='main-body__items'><p>Buat Catatan</p></div>
          <div className='main-body__items'><p>Catatan Aktif</p></div>
          <div className='main-body__items'><p>Simpan</p></div>
        </div>
        <div className='main-body'>
          <div className='main-body__items'><CreateNotes addNote={this.onAddNoteHandler} /></div>
          <div className='main-body__items'>
            <ActiveNotesContainer 
              notes={this.state.notes.filter(note => note.archived === false)}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          </div>
          <div className='main-body__items'>
            <ArchiveNotesContainer 
              notes={this.state.notes.filter(note => note.archived === true)}
              onDelete={this.onDeleteHandler}
              onMoved={this.onMovedHandler}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalNotesApp;
