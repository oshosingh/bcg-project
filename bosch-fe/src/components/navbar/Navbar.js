import React from 'react'
import './navbar.css'
import { useState } from 'react'

function Navbar(props) {

  const [searchInput, setSearchInput] = useState(0)

  const redirectToTableView = () => {
      props.renderTableView('table')
  }

  const handleAddSales = () => {
      props.renderTableView('add')
  }

  const handleEditSales = () => {
      props.renderTableView('edit')
  } 

  const handleSearchInput = (event) => {
      setSearchInput(event.target.value)
  }

  const fetchSearchResult = () => {
      props.renderTableWithSearchResults(searchInput)
  }

  return (
    <div className='navbar-parent'>
      <div className='navbar-name align-items-nav' onClick={redirectToTableView}> Bosch Sales </div>

      <div className='sales-btn align-items-nav' onClick={handleAddSales}>
        Add Sales
      </div>

      <div className='sales-btn align-items-nav' onClick={handleEditSales}>
        Edit Sales
      </div>

      <div className='textbox align-items-nav'>
        <input placeholder='enter sales id or customer id' onChange={handleSearchInput}/>

        <div className='search-btn align-items-nav'>
          <button onClick={fetchSearchResult}>search</button>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar