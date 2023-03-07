import React, { Component } from 'react'

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputSearch: '',
    }
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    this.setState(() => {
      // console.log(event.target.value)
      return {
        inputSearch: event.target.value,
      }
    })
  }

  render() {
    return (
      <div className='search-bar'>
        <div className='seacrh-bar__body'>
          <i className='icon-search fa-solid fa-magnifying-glass'></i>
          <input className='search-bar__input' placeholder='cari catatan...' onChange={this.onSearchEventHandler}></input>
        </div>
      </div>
    )
  }
}

export default SearchBar



// import React from 'react'

// function SearchBar({ onChangeSearch }) {
//   return (
//     <div className='search-bar'>
//       <div className='seacrh-bar__body'>
//         <i className='icon-search fa-solid fa-magnifying-glass'></i>
//         <input className='search-bar__input' placeholder='cari catatan...' onChange={onChangeSearch}></input>
//       </div>
//     </div>
//   )
// }

// export default SearchBar;
