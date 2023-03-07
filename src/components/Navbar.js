import React from 'react'
import LogoBar from './LogoBar'
import SearchBar from './SearchBar'

function Navbar({inputSearch}) {
  console.log(inputSearch)
  return (
    <div>
        <div className='navbar'>
            <LogoBar></LogoBar>
            <SearchBar inputSearch={inputSearch} />
        </div>
    </div>
  )
}

export default Navbar
