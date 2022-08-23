import React from 'react'
import './navbar.css'

function navbar() {
  return (
    <div className='navbar-parent'>
      <div className='navbar-name align-items-nav'> Bosch Sales </div>

      <div className='textbox align-items-nav'>
        <input placeholder='enter customer id' />

        <div className='search-btn align-items-nav'>
          <button>search</button>
        </div>
        
      </div>
    </div>
  )
}

export default navbar