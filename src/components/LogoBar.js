import React from 'react';
import logo from './assets/images/logo.png'

function LogoBar() {
  return (
    <div className='logo-bar'>
      <div className='logo-bar__body'>
        <img className='logo-bar__image' src={logo} alt='logo-avatar' />
        <p>Notes Plus</p>
      </div>
    </div>
  )
}

export default LogoBar;
