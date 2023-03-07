import React, { Component } from 'react'

export class CreateNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      inputCharacter: '50',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      const inputUser = event.target.value
      return {
        title: event.target.value,
        inputCharacter: 50 - inputUser.length,
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className='form-createNotes' onSubmit={this.onSubmitEventHandler}>
        <input placeholder='ini adalah judul...' type="text" onChange={this.onTitleChangeEventHandler} maxLength="50"/>
        <p>Sisa Karakter: {this.state.inputCharacter}</p>
        <textarea placeholder='tulis catatanmu disini' onChange={this.onBodyChangeEventHandler}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default CreateNotes

